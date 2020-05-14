import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Left, Body, Right, Row, Icon} from 'native-base';
import {AppText, AppClick} from '..';
import getPerfectSize from '../../Utilities/DimensionHandler';
import Theme from '../../Config/Theme';
import AppVisibilityToggle from '../Shared/AppVisibilityToggle';
import {useSelector} from 'react-redux';

function RoundedButton({
  onPress,
  next,
  title,
  notRound,
  dark,
  smallTitle,
  style,
  leftIcon,
  leftIconStyle,
  showLeftIcon,
}) {
  const appState = useSelector(state => state);
  const {appLanguage} = appState;

  const styles = StyleSheet.create({
    viewStyles: {
      height: getPerfectSize(100),

      backgroundColor: dark ? Theme.shade : Theme.primary,
      borderRadius: notRound ? getPerfectSize(10) : getPerfectSize(50),
      ...style,
    },
    rowStyles: {
      paddingHorizontal: getPerfectSize(50),
      direction: appLanguage === 'ar' ? 'rtl' : 'ltr',
    },
    iconStyles: {color: Theme.light},
  });

  return (
    <AppClick onPress={onPress}>
      <View style={styles.viewStyles}>
        <Row style={styles.rowStyles}>
          <Left style={{flex: next ? 6 : 0}}>
            <AppVisibilityToggle visible={showLeftIcon}>
              <Icon name={leftIcon} style={leftIconStyle}></Icon>
            </AppVisibilityToggle>
            <AppVisibilityToggle visible={next}>
              <AppText inverted bold fontSize={34}>
                {title}
              </AppText>
            </AppVisibilityToggle>
          </Left>
          <Body style={{flex: !next ? 12 : 1}}>
            <AppVisibilityToggle visible={!next}>
              <AppText inverted bold fontSize={smallTitle ? 24 : 34}>
                {title}
              </AppText>
            </AppVisibilityToggle>
          </Body>
          <Right style={{flex: next ? 1 : 0}}>
            <AppVisibilityToggle visible={next}>
              <Icon
                name={appLanguage === 'ar' ? 'md-arrow-back' : 'arrow-forward'}
                style={styles.iconStyles}
              />
            </AppVisibilityToggle>
          </Right>
        </Row>
      </View>
    </AppClick>
  );
}

export default RoundedButton;
