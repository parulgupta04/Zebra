import React, {Fragment, useState, memo} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {Item, Row, Left, Input, Icon} from 'native-base';
import {AppText, AppClick} from '..';
import {FONT_FAMILY_REGULAR} from '../../Config/Contants';
import getPerfectSize from '../../Utilities/DimensionHandler';
import Theme from '../../Config/Theme';
import AppSpacer from '../Shared/AppSpacer';
import ModalDropdown from 'react-native-modal-dropdown';
import LifecycleEventsHandler from '../../Utilities/LifecycleEventsHandler';

function PickerInputItem({
  label,
  placeholder,
  lightLabel,
  options,
  value,
  onSelect,
}) {
  let ref = {};
  const [dropDownWidth, setDropdownWidth] = useState(null);
  const [dropDownX, setDropdownX] = useState(0);
  const styles = StyleSheet.create({
    clickStyles: {width: dropDownWidth},
    itemMargin: {marginLeft: 0},
    dropDownStyles: {
      backgroundColor: Theme.shade,
      width: dropDownWidth,
      height: 50 * options.length,
    },
    dropDownTextStyles: {
      backgroundColor: Theme.shade,
      color: Theme.light,
    },
    inputStyles: {
      fontFamily: FONT_FAMILY_REGULAR,
      color: lightLabel ? Theme.lightSecondary : Theme.light,
      fontSize: getPerfectSize(lightLabel ? 26 : 28),
      paddingLeft: 0,
      flex: 1,
      width: dropDownWidth,
      position: 'relative',
    },
    rightStyles: {
      justifyContent: 'center',
      paddingRight: getPerfectSize(10),
    },
    iconStyles: {
      color: Theme.grey,
      position: 'absolute',
      zIndex: 1,
      right: -5,
      top: 13,
      bottom: 15,
    },
    rowStyles: isSelected => {
      return {
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: getPerfectSize(15),
        backgroundColor: isSelected ? Theme.grey : Theme.shade,
      };
    },
  });

  function componentDidMount() {
    if (value) {
      options.forEach((op, index) => {
        if (op.value === value) ref.select(index);
      });
    }
  }
  LifecycleEventsHandler(componentDidMount);

  function adjustFrame({height, top, left}) {
    return {
      height,
      top: Platform.OS === 'ios' ? top : top - 24,
      left,
      right: dropDownX + 24,
    };
  }

  function renderRow(option, index, isSelected) {
    return (
      <View key={index} style={styles.rowStyles(isSelected)}>
        <AppText fontSize={26} inverted>
          {option.display}
        </AppText>
      </View>
    );
  }

  function onSelectInput(index) {
    const selectedOption = options[index];
    onSelect(selectedOption);
  }

  function onLayout(event) {
    const {width, x} = event.nativeEvent.layout;
    setDropdownWidth(width);
    setDropdownX(x);
  }

  return (
    <Fragment>
      <Row>
        <Left>
          <AppText bold={!lightLabel} fontSize={lightLabel ? 26 : 28} inverted>
            {label}
          </AppText>
        </Left>
      </Row>
      <AppClick style={styles.clickStyles} onPress={ref.show}>
        <Item style={styles.itemMargin} onLayout={onLayout}>
          <ModalDropdown
            ref={dropRef => (ref = dropRef)}
            options={options}
            dropdownStyle={styles.dropDownStyles}
            onSelect={onSelectInput}
            adjustFrame={adjustFrame}
            renderRow={renderRow}
            dropdownTextStyle={styles.dropDownTextStyles}>
            <Input
              placeholder={placeholder}
              style={styles.inputStyles}
              value={value}
              pointerEvents="none"
              editable={false}
            />
            <Icon name={'arrow-dropdown'} style={styles.iconStyles} />
          </ModalDropdown>
        </Item>
      </AppClick>
      <AppSpacer size={40} />
    </Fragment>
  );
}

export default memo(PickerInputItem);
