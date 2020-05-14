import React from 'react';
import {Content, Button, Text, Col, Row} from 'native-base';
import {
  AppSpacer,
  AppVisibilityToggle,
  AppText,
  AppCenter,
} from '../../Components';
import {View, Image, ScrollView} from 'react-native';
import SignatureView from 'react-native-signature-canvas';
import images from '../../Assets';
import Theme from '../../Config/Theme';

function SignUpPage4(props) {
  let {
    setScrollViewRef,
    styles,
    saveAndProceedView,
    agreed,
    signature,
    updateSignature,
    resetSignature,

    setAgreedFunction,
  } = props;
  return (
    <Content
      scrollEnabled={true}
      contentContainerStyle={styles.swiperContentStyles}>
      <AppSpacer size={20} />
      <AppVisibilityToggle visible={!agreed}>
        <ScrollView
          style={styles.readMeStyle}
          ref={ref => setScrollViewRef(ref)}>
          <AppText bold inverted fontSize={30}>
            Authorized Person Data
          </AppText>
          <AppSpacer size={30} />
          <AppText color={Theme.grey} fontSize={26}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </AppText>
          <AppSpacer size={15} />
          <AppText color={Theme.grey} fontSize={26}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </AppText>
          <AppSpacer size={60} />
          <AppCenter>
            <Button
              rounded
              small
              disabled={agreed}
              style={styles.agreedButtonStyles}
              onPress={setAgreedFunction}>
              <Text>Agreed</Text>
            </Button>
          </AppCenter>
          <AppSpacer size={60} />
        </ScrollView>
      </AppVisibilityToggle>
      <AppVisibilityToggle visible={agreed}>
        <AppSpacer size={25} />
        <Row>
          <Col size={90}>
            <AppText bold inverted fontSize={30}>
              Customer Signature
            </AppText>
          </Col>
          <Col size={10} style={{alignItems: 'flex-end'}}>
            {/* <Icon
                name={'close'}
                style={{color: Theme.primary}}
                onPress={resetSignature}
              /> */}
          </Col>
        </Row>
        <AppSpacer size={20} />
        <View style={styles.signatureStyles}>
          <SignatureView
            // handle when you click save button

            onOK={updateSignature}
            onEmpty={resetSignature}
            // description text for signature
            descriptionText="Sign Above"
            // clear button text
            clearText="Clear"
            // save button text
            confirmText="Save"
            // String, webview style for overwrite default style, all style: https://github.com/YanYuanFE/react-native-signature-canvas/blob/master/h5/css/signature-pad.css
            webStyle={`.m-signature-pad--footer
    .button {
      background-color: ${Theme.primary};
      color: #FFF;
      margin-top: 20px;
    }`}
          />
        </View>
        <AppVisibilityToggle visible={signature}>
          <AppSpacer size={20} />
          <AppText bold inverted fontSize={30}>
            Preview
          </AppText>
          <AppSpacer size={20} />
          <Image
            source={{uri: signature}}
            style={styles.signatureImageStyles}
            resizeMode={'contain'}
          />
        </AppVisibilityToggle>
        <AppSpacer size={50} />
        {saveAndProceedView('BACK')}
      </AppVisibilityToggle>
    </Content>
  );
}

export default SignUpPage4;
