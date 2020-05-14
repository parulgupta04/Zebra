import React, {useState, useEffect, useMemo} from 'react';
import {Text, StyleSheet} from 'react-native';
import getPerfectSize from '../../Utilities/DimensionHandler';
import {FONT_FAMILY_BOLD, FONT_FAMILY_REGULAR} from '../../Config/Contants';
import Theme from '../../Config/Theme';
import {useSelector} from 'react-redux';
import {TranslatorFactory} from 'react-native-power-translator';
import useTranslation from '../../Hooks/Shared/useTranslation';

function AppText(props) {
  // let translator = TranslatorFactory.createTranslator();
  const {
    children,
    textProps,
    onPress,
    fontSize,
    color,
    style,
    inverted,
    underline,
    bold,
    noTranslate,
  } = props;

  const appState = useSelector(state => state);
  const {appLanguage} = appState;
  const textChildren = useTranslation(
    [children, appLanguage],
    noTranslate,
    children,
  );

  const styles = StyleSheet.create({
    textStyles: {
      fontSize: getPerfectSize(fontSize || 24),
      color: color || (inverted ? Theme.white : Theme.dark),
      fontFamily: bold ? FONT_FAMILY_BOLD : FONT_FAMILY_REGULAR,
      fontWeight: bold ? 'bold' : 'normal',
      textDecorationLine: underline ? 'underline' : 'none',
      textAlign: appLanguage === 'ar' ? 'right' : 'left',
      ...style,
    },
  });

  if (!onPress) {
    delete props.onPress;
  }

  return useMemo(() => {
    return (
      <Text
        {...props}
        style={styles.textStyles}
        allowFontScaling={false}
        {...textProps}>
        {textChildren}
      </Text>
    );
  }, [appLanguage, textChildren, color]);
}

export default AppText;
