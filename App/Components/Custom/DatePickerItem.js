import React, {Fragment, useState, memo, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {Item, Row, Left, Input, Icon} from 'native-base';
import {AppText} from '..';
import {FONT_FAMILY_REGULAR} from '../../Config/Contants';
import getPerfectSize from '../../Utilities/DimensionHandler';
import Theme from '../../Config/Theme';
import AppSpacer from '../Shared/AppSpacer';
import DateTimePicker from 'react-native-modal-datetime-picker';

function DatePickerItem({
  label,
  placeholder,
  lightLabel,
  value,
  mode,
  onSelect,
}) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const styles = StyleSheet.create({
    itemMargin: {marginLeft: 0},
    inputStyles: {
      fontFamily: FONT_FAMILY_REGULAR,
      color: lightLabel ? Theme.lightSecondary : Theme.light,
      fontSize: getPerfectSize(lightLabel ? 26 : 28),
      paddingLeft: 0,
      flex: 1,
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
  });

  function toggleDatePicker() {
    setShowDatePicker(!showDatePicker);
  }

  function handleDatePicked(date) {
    onSelect(date);
    toggleDatePicker();
  }

  function renderDate() {
    if (value) {
      const date = new Date(value);
      return date.toLocaleDateString();
    } else {
      return value;
    }
  }

  const memoisedRenderDate = useMemo(renderDate, [value]);

  return (
    <Fragment>
      <Row>
        <Left>
          <AppText bold={!lightLabel} fontSize={lightLabel ? 26 : 28} inverted>
            {label}
          </AppText>
        </Left>
      </Row>
      <Item style={styles.itemMargin} onPress={toggleDatePicker}>
        <Input
          placeholder={placeholder}
          style={styles.inputStyles}
          value={memoisedRenderDate}
          pointerEvents="none"
          editable={false}
        />
        <Icon name={'calendar'} style={styles.iconStyles} />
      </Item>
      <AppSpacer size={40} />
      <DateTimePicker
        isVisible={showDatePicker}
        onConfirm={handleDatePicked}
        onCancel={toggleDatePicker}
        mode={mode}
      />
    </Fragment>
  );
}

export default memo(DatePickerItem);
