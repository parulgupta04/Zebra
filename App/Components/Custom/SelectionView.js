import React, {Fragment, memo} from 'react';
import {StyleSheet, Image, View, Dimensions} from 'react-native';
import {Col, Row} from 'native-base';
import AppClick from '../Shared/AppClick';
import Theme from '../../Config/Theme';
import getPerfectSize from '../../Utilities/DimensionHandler';
import AppSpacer from '../Shared/AppSpacer';
import AppCenter from '../Shared/AppCenter';
import AppText from '../Shared/AppText';
import images from '../../Assets';
import {AppVisibilityToggle, CloseIcon} from '..';

function SelectionView({leftImageData, rightImageData}) {
  function setLeftActive() {
    if (leftImageData.imageUrl) {
      leftImageData.setImageUrl(undefined);
    }
  }

  function setRightActive() {
    if (rightImageData.imageUrl) {
      rightImageData.setImageUrl(undefined);
    }
  }

  function chooseActive() {
    if (!leftImageData.imageUrl) {
      return 1;
    }
    if (!rightImageData.imageUrl) {
      return 2;
    }
    return 0;
  }

  const styles = StyleSheet.create({
    imageLeftStyles: {
      height: getPerfectSize(160),
      flex: 1,
      backgroundColor: Theme.shadeGrey,
      width: Dimensions.get('screen').width / 2 - 35,
      borderWidth: getPerfectSize(5),
      borderColor: chooseActive() === 1 ? Theme.primary : Theme.shade,
    },
    imageRightStyles: {
      height: getPerfectSize(160),
      flex: 1,
      backgroundColor: Theme.shadeGrey,
      width: Dimensions.get('screen').width / 2 - 35,
      borderWidth: getPerfectSize(5),
      borderColor: chooseActive() === 2 ? Theme.primary : Theme.shade,
    },
    rowStyles: {
      flexDirection: 'row',
    },
  });

  return (
    <Fragment>
      <View style={styles.rowStyles}>
        <AppVisibilityToggle visible={leftImageData.imageUrl}>
          <View>
            <CloseIcon onPress={setLeftActive} />
            <Image
              source={leftImageData.imageUrl}
              resizeMode={'cover'}
              style={styles.imageLeftStyles}></Image>
          </View>
        </AppVisibilityToggle>
        <AppVisibilityToggle visible={!leftImageData.imageUrl}>
          <View style={styles.imageLeftStyles}>
            <AppCenter allAxis>
              <Image
                source={images.id}
                resizeMode={'contain'}
                style={{
                  height: getPerfectSize(50),
                  width: getPerfectSize(60),
                }}></Image>
            </AppCenter>
          </View>
        </AppVisibilityToggle>

        <AppSpacer size={40} horizontal />

        <AppVisibilityToggle visible={rightImageData.imageUrl}>
          <View>
            <CloseIcon onPress={setRightActive} />
            <Image
              source={rightImageData.imageUrl}
              resizeMode={'cover'}
              style={styles.imageRightStyles}></Image>
          </View>
        </AppVisibilityToggle>
        <AppVisibilityToggle visible={!rightImageData.imageUrl}>
          <View style={styles.imageRightStyles}>
            <AppCenter allAxis>
              <Image
                source={images.id}
                resizeMode={'contain'}
                style={{
                  height: getPerfectSize(50),
                  width: getPerfectSize(60),
                }}></Image>
            </AppCenter>
          </View>
        </AppVisibilityToggle>
      </View>
      <AppSpacer size={15} />
      <Row>
        <Col>
          <AppCenter>
            <AppText inverted bold fontSize={26}>
              Front ID Photo
            </AppText>
          </AppCenter>
        </Col>
        <AppSpacer size={40} horizontal />
        <Col>
          <AppCenter>
            <AppText inverted bold fontSize={26}>
              Back ID Photo
            </AppText>
          </AppCenter>
        </Col>
      </Row>
    </Fragment>
  );
}

export default memo(SelectionView);
