import React, {useState} from 'react';
import {Content, Row, Col, Icon} from 'native-base';
import {
  AppSpacer,
  AppText,
  AppCenter,
  CloseIcon,
  AppVisibilityToggle,
  AnimatedImage,
  AppClick,
  ListBuilder,
} from '../../Components';
import {Image, View, Dimensions} from 'react-native';
import Theme from '../../Config/Theme';
import images from '../../Assets';
import getPerfectSize from '../../Utilities/DimensionHandler';
import LifecycleEventsHandler from '../../Utilities/LifecycleEventsHandler';
import DataStore from '../../Utilities/DataStore';
import Modal from 'react-native-modal';
import AppPadding from '../../Components/Shared/AppPadding';
import {ScrollView} from 'react-native-gesture-handler';

function SignUpPage6(props) {
  const [userdata, setuserdata] = useState({});
  const [showmodal, setshowmodal] = useState(false);
  let {
    styles,
    saveAndProceedView,
    profileImageData,
    customerIDImageDataFront,
    customerIDImageDataBack,
    document1,
    document2,
    removeDocumentOne,
    removeDocumentTwo,
    signature,
    listData,
  } = props;

  // async function componentDidMount() {

  //     const userDAta = await DataStore.get('Registration_DataArrayString');
  //     console.log("userdata",  JSON.parse(userDAta))
  //     setuserdata(userDAta)

  //   }

  //   LifecycleEventsHandler(componentDidMount)
  //     const listData = [
  //         'Authorized Personal Data',
  //     { name: 'Name', value: userdata.firstName },
  //     { name: 'Middle Name', value: '' },
  //     { name: 'Family Name', value: '' },
  //     'Device Details',
  //     { name: 'Name', value: '' },
  //     { name: 'Middle Name', value: '' },
  //     "Company Data",
  //     { name: 'Address', value: '' },
  //     { name: 'Postal Zip Code', value: '' },

  //     { name: 'Province', value: '' },

  //     { name: 'Municipality', value: '' },
  //     { name: 'City', value: ''},
  //     { name: 'Phone Number', value: '' },
  //     { name: 'Fixed Number', value: '' },
  // ];
  function showModal(Data) {
    setshowmodal(Data);
  }
  function documentView(documentData, number) {
    return (
      <View style={{position: 'relative'}}>
        <AppVisibilityToggle visible={documentData.imageUrl}>
          <CloseIcon
            onPress={number === 'one' ? removeDocumentOne : removeDocumentTwo}
          />
          <AnimatedImage
            source={documentData.imageUrl || images.userPhoto}
            style={{
              width: Dimensions.get('screen').width / 2 - getPerfectSize(80),
              height: getPerfectSize(260),
            }}
            resizeMode={'cover'}></AnimatedImage>
        </AppVisibilityToggle>
        <AppVisibilityToggle visible={!documentData.imageUrl}>
          <AppClick onPress={documentData.imageUpload}>
            <View
              style={{
                width: Dimensions.get('screen').width / 2 - getPerfectSize(80),
                height: getPerfectSize(260),
                backgroundColor: Theme.shadeGrey,
              }}>
              <AppCenter allAxis>
                <Icon
                  name="add-circle"
                  style={{
                    color: Theme.grey,
                    fontSize: getPerfectSize(50),
                  }}></Icon>
              </AppCenter>
            </View>
          </AppClick>
        </AppVisibilityToggle>
      </View>
    );
  }
  return (
    <Content contentContainerStyle={styles.swiperContentStyles}>
      <AppSpacer size={60} />
      <Row>
        <Col size={35}>
          <AppText bold inverted fontSize={24}>
            Profile Picture
          </AppText>
          <AppSpacer size={30} />
          <Image
            source={profileImageData.imageUrl || images.userPhoto}
            style={styles.userImagePreviewStyles}
            resizeMode={'cover'}></Image>
        </Col>
        <Col size={65}>
          <AppText bold inverted fontSize={24}>
            Attachments ID
          </AppText>
          <AppSpacer size={30} />
          <Row>
            <Col size={45}>
              <AppCenter>
                <Image
                  source={customerIDImageDataFront.imageUrl || images.id}
                  style={styles.userImageIDPreviewStyles}
                  resizeMode={'cover'}></Image>
                <AppSpacer size={10} />
                <AppText inverted fontSize={20}>
                  Front ID Photo
                </AppText>
              </AppCenter>
            </Col>
            <Col size={10}></Col>
            <Col size={45}>
              <AppCenter>
                <Image
                  source={customerIDImageDataBack.imageUrl || images.userPhoto}
                  style={styles.userImageIDPreviewStyles}
                  resizeMode={'cover'}></Image>
                <AppSpacer size={10} />
                <AppText inverted fontSize={20}>
                  Back ID Photo
                </AppText>
              </AppCenter>
            </Col>
          </Row>
        </Col>
      </Row>
      <ListBuilder listData={listData} />
      <AppSpacer size={40} />
      <Row>
        <Col>
          <AppText inverted bold fontSize={30}>
            Cusomer Signature
          </AppText>
        </Col>
        <AppClick onPress={() => showModal(true)}>
          <AppText fontSize={25} style={{color: Theme.primary}}>
            Read Agreed
          </AppText>
        </AppClick>
      </Row>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: Theme.shadeGrey,
          marginTop: 5,
        }}></View>
      <AppSpacer size={20} />
      <Image
        source={{uri: signature}}
        style={[styles.signatureImageStyles, {height: 100}]}
        resizeMode={'contain'}
      />
      <AppSpacer size={20} />
      <AppText inverted bold fontSize={30}>
        Extra Document Upload
      </AppText>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: Theme.shadeGrey,
          marginTop: 5,
        }}></View>
      <AppSpacer size={40} />
      <Row
        style={{
          justifyContent: 'space-between',
          paddingHorizontal: getPerfectSize(20),
        }}>
        {documentView(document1, 'one')}
        {documentView(document2, 'two')}
      </Row>
      <AppSpacer size={50} />
      {saveAndProceedView('BACK', 'REGISTER')}
      <Modal
        isVisible={showmodal}
        onBackdropPress={() => showModal(false)}
        onBackButtonPress={() => showModal(false)}>
        <View
          style={{
            padding: getPerfectSize(30),
            height: getPerfectSize(700),
            backgroundColor: Theme.white,
          }}>
          <CloseIcon onPress={() => showModal(false)} noConfirm />

          <ScrollView>
            <AppSpacer size={20} />
            <AppText fontSize={30} bold>
              Authorized Personal Data
            </AppText>
            <View
              style={{
                borderBottomWidth: 0.5,
                borderColor: Theme.shadeGrey,
                marginTop: 5,
              }}></View>
            <AppSpacer size={20} />
            <AppText color={Theme.grey} fontSize={26}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </AppText>
          </ScrollView>
        </View>
      </Modal>
    </Content>
  );
}

export default SignUpPage6;
