import React, {Fragment} from 'react';
import {Content, CardItem, Col, Row, Icon} from 'native-base';
import {
  AppSpacer,
  RoundedButton,
  AppText,
  AppVisibilityToggle,
  TextInputItem,
} from '../../Components';
import Theme from '../../Config/Theme';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {updateBulkAppState} from '../../Redux/appAction';
import getPerfectSize from '../../Utilities/DimensionHandler';

function SignUpPage5(props) {
  let {
    styles,
    saveAndProceedView,
    deviceDetailArray,
    addDevice,
    removeDevice,
  } = props;
  const dispatch = useDispatch();
  function showPopup() {
    dispatch(
      updateBulkAppState({
        popUpModal: true,
        popUpTitle: 'Add Device Detail',
        popUpContent: addDevicePopupContent,
      }),
    );
  }
  function addDevicePopupContent(popUpState, updatePopUpStateByKey) {
    function updateInput(text) {
      updatePopUpStateByKey('device', text);
    }

    function buttonClick() {
      addDevice(popUpState.device);
      updateInput('');
    }

    return (
      <Fragment>
        <AppSpacer size={50} />
        <AppText color={Theme.grey} fontSize={26}>
          Please enter the details of Device
        </AppText>
        <AppSpacer size={60} />
        <TextInputItem
          label={'Your Device Detail'}
          placeholder={'Enter Device Detail'}
          dark
          value={popUpState.device}
          onChangeText={updateInput}
        />
        <AppSpacer size={60} />
        <Row>
          <Col size={25} />
          <Col size={50}>
            <RoundedButton
              title={'SUBMIT'}
              onPress={buttonClick}></RoundedButton>
          </Col>
          <Col size={25} />
        </Row>
        <AppSpacer size={40} backgroundColor={Theme.white} />
      </Fragment>
    );
  }
  return (
    <Content contentContainerStyle={styles.swiperContentStyles}>
      <AppSpacer size={60} />
      <View
        style={[
          styles.rowPaddingButton,
          {alignItems: 'center', height: getPerfectSize(100)},
        ]}>
        <RoundedButton
          smallTitle
          title={'Add Device Detail'}
          onPress={showPopup}
          showLeftIcon={true}
          leftIcon={'ios-add-circle'}
          leftIconStyle={{
            color: Theme.white,
            paddingLeft: 5,
            fontSize: getPerfectSize(70),
          }}
          style={{width: getPerfectSize(450)}}
        />
      </View>
      <AppSpacer size={60} />
      <View>
        <CardItem style={styles.cardHeaderStyles}>
          <AppText bold color={Theme.primary} fontSize={30}>
            Device Detail
          </AppText>
        </CardItem>
        <AppVisibilityToggle visible={deviceDetailArray.length > 0}>
          {deviceDetailArray.map((d, i) => (
            <CardItem style={styles.cardContentStyles} key={i}>
              <Col size={90}>
                <Row style={{alignItems: 'center'}}>
                  <AppText color={Theme.white} fontSize={30}>
                    {i + 1 + '.'}
                  </AppText>
                  <AppText inverted fontSize={30}>
                    {d}
                  </AppText>
                </Row>
              </Col>
              <Col size={10}>
                <View
                  style={{
                    backgroundColor: Theme.danger,
                    borderRadius: 16,
                    height: 32,
                    width: 32,
                    position: 'relative',
                  }}>
                  <Icon
                    name={'close'}
                    onPress={() => {
                      removeDevice(i);
                    }}
                    style={{
                      color: Theme.white,
                      textAlign: 'center',
                      marginTop: 2,
                    }}></Icon>
                </View>
              </Col>
            </CardItem>
          ))}
        </AppVisibilityToggle>
      </View>
      <AppSpacer size={50} />
      {saveAndProceedView('BACK')}
    </Content>
  );
}

export default SignUpPage5;
