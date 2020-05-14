import React, {Fragment} from 'react';
import {Image, StyleSheet} from 'react-native';
import getPerfectSize from '../../Utilities/DimensionHandler';
import {Left, Body, Right, Icon, Row} from 'native-base';
import AppText from '../Shared/AppText';
import AppVisibilityToggle from '../Shared/AppVisibilityToggle';
import Theme from '../../Config/Theme';
import images from '../../Assets';
import {AppSpacer, AppClick} from '..';

function LanguageItem({image, on, title, onChange}) {
  const styles = StyleSheet.create({
    rowStyles: {
      height: getPerfectSize(100),
      backgroundColor: Theme.shade,
      paddingHorizontal: getPerfectSize(30),
    },
    flex1: {flex: 1},
    flagStyles: {height: getPerfectSize(50), width: getPerfectSize(75)},
    bodyStyles: {alignItems: 'flex-start', flex: 2},
    checkMarkStyles: {color: Theme.primary},
  });

  return (
    <Fragment>
      <AppClick onPress={onChange ? onChange : () => {}}>
        <Row style={styles.rowStyles}>
          <Left style={styles.flex1}>
            <Image
              source={image || images.english}
              style={styles.flagStyles}
              resizeMode={'contain'}
            />
          </Left>
          <Body style={styles.bodyStyles}>
            <AppText inverted fontSize={34} noTranslate={true}>
              {title}
            </AppText>
          </Body>
          <Right style={styles.flex1}>
            <AppVisibilityToggle visible={on}>
              <Icon name={'checkmark'} style={styles.checkMarkStyles} />
            </AppVisibilityToggle>
          </Right>
        </Row>
      </AppClick>
      <AppSpacer size={20} />
    </Fragment>
  );
}

export default LanguageItem;
