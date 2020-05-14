import React from 'react';
import {Content} from 'native-base';
import {View, Image} from 'react-native';
import images from '../../Assets';
import Theme from '../../Config/Theme';
import {
  AppSpacer,
  AppClick,
  AppCenter,
  AppText,
  SelectionView,
} from '../../Components';

function SignUpPage3(props) {
  let {
    styles,
    saveAndProceedView,
    customerIDImageDataFront,
    customerIDImageDataBack,
  } = props;
  function takeIDPictures() {
    if (customerIDImageDataFront.imageUrl) {
      customerIDImageDataBack.imageUpload();
    } else {
      customerIDImageDataFront.imageUpload();
    }
  }

  return (
    <Content contentContainerStyle={styles.swiperContentStyles}>
      <AppSpacer size={60} />
      <AppClick onPress={takeIDPictures}>
        <View style={styles.idPickerViewStyles}>
          <AppCenter allAxis>
            <View>
              <Image
                source={images.grey_camera}
                style={styles.cameraIDIconStyle}
                resizeMode={'contain'}
              />
              <AppSpacer size={20} />
            </View>
            <AppText
              color={Theme.grey}
              fontSize={30}
              style={{textAlign: 'center'}}>
              Tap here to take
            </AppText>
            <AppText
              color={Theme.grey}
              fontSize={30}
              style={{textAlign: 'center'}}>
              customer official ID Pictures
            </AppText>
          </AppCenter>
        </View>
      </AppClick>
      <AppSpacer size={40} />
      <SelectionView
        leftImageData={customerIDImageDataFront}
        rightImageData={customerIDImageDataBack}
      />
      <AppSpacer size={200} />
      {saveAndProceedView('BACK')}
    </Content>
  );
}

export default SignUpPage3;
