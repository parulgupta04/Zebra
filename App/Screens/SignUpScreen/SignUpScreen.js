import React, {Fragment} from 'react';
import {View, Image, ScrollView} from 'react-native';
import {
  Container,
  Content,
  Header,
  Row,
  Col,
  Icon,
  Button,
  CardItem,
  Text,
} from 'native-base';
import Theme from '../../Config/Theme';
import useSignUpScreen from './useSignUpScreen';
import {
  AppText,
  AppSpacer,
  ProgressCounter,
  RoundedButton,
  FormBuilder,
  AppCenter,
  AppCircle,
  AppClick,
  SelectionView,
  AppVisibilityToggle,
  TextInputItem,
  ListBuilder,
  CloseIcon,
  AnimatedImage,
} from '../../Components';
import {useDispatch} from 'react-redux';
import Swiper from 'react-native-swiper';
// import SignaturePad from 'react-native-signature-pad';
import Signature from 'react-native-signature-canvas';
import {updateBulkAppState} from '../../Redux/appAction';
import images from '../../Assets';
import getPerfectSize from '../../Utilities/DimensionHandler';
import SignUpPage1 from './SignUpPage1';
import SignUpPage2 from './SignUpPage2';
import SignUpPage3 from './SignUpPage3';
import SignUpPage4 from './SignUpPage4';
import SignUpPage5 from './SignUpPage5';
import SignUpPage6 from './SignUpPage6';

function SignUpScreen(props) {
  let {
    styles,
    currentForm,
    setProgress,
    formBuilderData,
    updateForm,
    pageType,
    saveAndProceed,
    profileImageData,
    customerIDImageDataFront,
    customerIDImageDataBack,
    signature,
    updateSignature,
    resetSignature,
    keySignature,
    clearSignature,
    setAgreedFunction,
    agreed,
    addDevice,
    removeDevice,
    deviceDetailArray,
    listData,
    document1,
    document2,
    setSliderRef,
    back,
    subHeadingArray,
    removeDocumentOne,
    removeDocumentTwo,
    form,
    setScrollViewRef,
  } = useSignUpScreen(props);

  const dispatch = useDispatch();

  // function addDevicePopupContent(popUpState, updatePopUpStateByKey) {
  //   function updateInput(text) {
  //     updatePopUpStateByKey('device', text);
  //   }

  //   function buttonClick() {
  //     // console.log("popUpState.device============", popUpState.device)
  //     addDevice(popUpState.device);
  //     updateInput('');
  //   }

  //   return (
  //     <Fragment>
  //       <AppSpacer size={50} />
  //       <AppText color={Theme.grey} fontSize={26}>
  //         Please enter the details of Device
  //       </AppText>
  //       <AppSpacer size={60} />
  //       <TextInputItem
  //         label={'Your Device Detail'}
  //         placeholder={'Enter Device Detail'}
  //         dark
  //         value={popUpState.device}
  //         onChangeText={updateInput}
  //       />
  //       <AppSpacer size={60} />
  //       <Row>
  //         <Col size={25} />
  //         <Col size={50}>
  //           <RoundedButton
  //             title={'SUBMIT'}
  //             onPress={buttonClick}></RoundedButton>
  //         </Col>
  //         <Col size={25} />
  //       </Row>
  //       <AppSpacer size={40} backgroundColor={Theme.white} />
  //     </Fragment>
  //   );
  // }

  function saveAndProceedView(backButtonText, registerButtonText) {
    return (
      <Fragment>
        <AppSpacer size={40} />
        <Row>
          <Col size={40}>
            <RoundedButton
              title={backButtonText || 'CANCEL'}
              dark
              smallTitle
              onPress={back}
            />
          </Col>
          <Col size={3} />
          <Col size={57}>
            <RoundedButton
              title={registerButtonText || 'SAVE & PROCEED'}
              smallTitle
              onPress={saveAndProceed}
            />
          </Col>
        </Row>
        <AppSpacer size={80} />
      </Fragment>
    );
  }
  return (
    <Container>
      <Header
        androidStatusBarColor={Theme.black}
        iosBarStyle={'light-content'}
        transparent
        style={styles.headerStyles}>
        <AppSpacer size={20} />
        <AppText bold inverted fontSize={38}>
          {`Register for ${pageType === 'personal' ? 'Personal' : 'Business'}`}
        </AppText>
      </Header>
      <View style={styles.headerExpansionStyle}>
        <AppText inverted fontSize={30}>
          {subHeadingArray[currentForm - 1]}
        </AppText>
        <AppSpacer size={20} />
        <Row style={styles.rowPadding}>
          <ProgressCounter currentStep={currentForm} />
        </Row>
      </View>
      <AppSpacer size={50} />
      <Swiper
        ref={swiperRef => setSliderRef(swiperRef)}
        index={currentForm - 1}
        // index={1}
        scrollEnabled={false}
        onIndexChanged={setProgress}
        showsButtons={false}
        showsPagination={false}
        loadMinimal={true}
        loadMinimalSize={1}
        loop={false}>
        <SignUpPage1
          styles={styles}
          formBuilderData={formBuilderData}
          updateForm={updateForm}
          form={form}
          back={back}
          saveAndProceed={saveAndProceed}
          saveAndProceedView={saveAndProceedView}
        />
        <SignUpPage2
          saveAndProceed={saveAndProceed}
          styles={styles}
          profileImageData={profileImageData}
          saveAndProceedView={saveAndProceedView}
        />
        <SignUpPage3
          back={back}
          saveAndProceed={saveAndProceed}
          styles={styles}
          saveAndProceedView={saveAndProceedView}
          customerIDImageDataFront={customerIDImageDataFront}
          customerIDImageDataBack={customerIDImageDataBack}
        />
        <SignUpPage4
          styles={styles}
          saveAndProceedView={saveAndProceedView}
          agreed={agreed}
          signature={signature}
          updateSignature={updateSignature}
          resetSignature={resetSignature}
          setAgreedFunction={setAgreedFunction}
          setScrollViewRef={setScrollViewRef}
        />
        <SignUpPage5
          back={back}
          saveAndProceed={saveAndProceed}
          styles={styles}
          back={back}
          saveAndProceed={saveAndProceed}
          styles={styles}
          saveAndProceedView={saveAndProceedView}
          deviceDetailArray={deviceDetailArray}
          addDevice={addDevice}
          removeDevice={removeDevice}
        />
        <SignUpPage6
          styles={styles}
          saveAndProceedView={saveAndProceedView}
          profileImageData={profileImageData}
          customerIDImageDataFront={customerIDImageDataFront}
          customerIDImageDataBack={customerIDImageDataBack}
          document1={document1}
          signature={signature}
          document2={document2}
          removeDocumentOne={removeDocumentOne}
          removeDocumentTwo={removeDocumentTwo}
          listData={listData}
        />
      </Swiper>
    </Container>
  );
}

export default SignUpScreen;
