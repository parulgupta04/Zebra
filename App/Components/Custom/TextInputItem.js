import React, {Fragment, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Item, Row, Left, Input, Icon} from 'native-base';
import {AppText, AppVisibilityToggle} from '..';
import {FONT_FAMILY_REGULAR} from '../../Config/Contants';
import getPerfectSize from '../../Utilities/DimensionHandler';
import Theme from '../../Config/Theme';
import AppSpacer from '../Shared/AppSpacer';
import {TextInputMask} from 'react-native-masked-text';
import {useSelector} from 'react-redux';

function TextInputItem({
  label,
  placeholder,
  secureTextEntry,
  lightLabel,
  note,
  value,
  onChangeText,
  textInputProps,
  hideIcon,
  dark,
  inputType,
  customIcon,
  customIconStyle,
}) {
  const [secureTextState, setSecureTextState] = useState(
    secureTextEntry ? true : false,
  );

  const appState = useSelector(state => state);
  const {appLanguage} = appState;

  const styles = StyleSheet.create({
    inputStyles: {
      fontFamily: FONT_FAMILY_REGULAR,
      color: dark
        ? Theme.dark
        : lightLabel
        ? Theme.lightSecondary
        : Theme.light,
      fontSize: getPerfectSize(lightLabel ? 26 : 28),
      paddingLeft: 0,
    },
    eyeIconStyles: {color: Theme.primary},
    rowStyles: {
      height: getPerfectSize(40),
      justifyContent: 'flex-end',
      paddingBottom: getPerfectSize(15),
    },
  });

  function toggleState() {
    setSecureTextState(!secureTextState);
  }

  return (
    <Fragment>
      <Row style={{direction: appLanguage === 'ar' ? 'rtl' : 'ltr'}}>
        <Left>
          <AppText
            bold={!lightLabel}
            fontSize={lightLabel ? 26 : 28}
            inverted={dark ? false : true}>
            {label}
          </AppText>
        </Left>
      </Row>
      <Item style={{marginLeft: 0}}>
        <AppVisibilityToggle visible={inputType !== 'phone'}>
          <Input
            placeholder={placeholder}
            style={styles.inputStyles}
            secureTextEntry={secureTextState}
            value={value}
            onChangeText={onChangeText}
            returnKeyType={'next'}
            textAlign={appLanguage === 'ar' ? 'right' : 'left'}
            {...textInputProps}
          />
        </AppVisibilityToggle>

        <AppVisibilityToggle visible={inputType === 'phone'}>
          <TextInputMask
            type={'cel-phone'}
            placeholder={placeholder}
            placeholderTextColor={Theme.grey}
            style={{...styles.inputStyles, height: 50, width: null}}
            options={{
              maskType: 'INTERNATIONAL',
            }}
            value={value}
            onChangeText={onChangeText}
          />
        </AppVisibilityToggle>
        <AppVisibilityToggle visible={secureTextEntry && !hideIcon}>
          <Icon
            active
            name={secureTextState ? 'eye' : 'eye-off'}
            style={styles.eyeIconStyles}
            onPress={toggleState}
          />
        </AppVisibilityToggle>
        <AppVisibilityToggle visible={customIcon}>
          <Icon
            active
            name={customIcon}
            style={{
              ...styles.eyeIconStyles,
              ...customIconStyle,
              color: Theme.green,
            }}
          />
        </AppVisibilityToggle>
      </Item>
      <AppVisibilityToggle visible={!note}>
        <AppSpacer size={40} />
      </AppVisibilityToggle>
      <AppVisibilityToggle visible={note}>
        <Row style={styles.rowStyles}>
          <AppText fontSize={18} inverted>
            ({note})
          </AppText>
        </Row>
      </AppVisibilityToggle>
    </Fragment>
  );
}

export default TextInputItem;
