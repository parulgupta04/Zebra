import React, { Fragment, useCallback } from 'react';
import {
  Content,
  Container,
  Header,
  Body,
  Icon,
  Right,
  Row,
  Col,
  Left,
} from 'native-base';
import Theme from '../../Config/Theme';
import { AppText, AppCenter, AppSpacer, ListBuilder } from '../../Components';
import AppPadding from '../../Components/Shared/AppPadding';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationService from '../../Utilities/NavigationService';
import { useSelector } from 'react-redux';
import useBackHandler from '../../Hooks/Shared/useBackHandler';
import LifecycleEventsHandler from '../../Utilities/LifecycleEventsHandler';
import { useDispatch } from 'react-redux';
import { updateAppState } from '../../Redux/appAction';
import Screenheader from '../../Components/Custom/Screenheader';

function ProfileScreen({ navigation }) {
  const appState = useSelector(state => state);
  const { userData, appLanguage } = appState;
  const { user_details, devices } = userData;
  useBackHandler(navigation, true);
  const dispatch = useDispatch()

  console.log(user_details, "user_details")

  function componentDidMount() {
    dispatch(updateAppState('popUpTitle', 'test'))
  }

  LifecycleEventsHandler(componentDidMount)

  const goBack = () => {
    navigation.goBack();
  };

  const listData = [
    'Authorized Person Data',
    { name: 'First Name', value: user_details.first_name },
    { name: 'Middle Name', value: user_details.middle_name },
    { name: 'Family Name', value: user_details.family_name },
    { name: 'Gender', value: user_details.gender },
    { name: 'Place of birth', value: user_details.city },

    {
      name: 'Date of Birth',
      value: new Date(user_details.date_of_birth).toLocaleDateString(),
    },

    { name: 'Fiscal code', value: user_details.fiscal_code },
    { name: 'National', value: user_details.nation },

    { name: 'Email', value: userData.email },
    { name: 'Phone Number', value: user_details.fixed_phone },
    // {name: 'Company Name', value: },
    { name: 'Address', value: user_details.address },
    { name: 'City', value: user_details.city },
    { name: 'Postal Zip Code', value: user_details.postal_zip_code },
    { name: 'Province', value: user_details.province },

    { name: 'Municipality', value: user_details.municipality },
    'Device Details',
    { name: 'Device', values: [...devices.map(d => d.device_name)] },
  ];

  const gotoEditProfile = useCallback(
    () => {
      navigation.navigate("editProfile")
    },
    [],
  )
  return (
    <Container>
      <Screenheader
        title={'View Profile'}
        goBack={goBack}
      />
      <Content>
        <AppPadding size={40} horizontal>
          <AppSpacer size={40} />
          <View
            style={{
              height: 90,
              backgroundColor: Theme.shade,
              borderRadius: 5,
            }}>
            <Row style={{ direction: appLanguage === 'ar' ? 'rtl' : 'ltr' }}>
              <Col size={30}>
                <AppCenter allAxis>
                  <Image
                    source={{
                      uri: user_details.picture,
                    }}
                    style={{ height: 70, width: 70, borderRadius: 35 }}
                  />
                </AppCenter>
              </Col>
              <Col size={60} style={{ justifyContent: 'center' }}>
                <AppText bold fontSize={30} inverted>
                  {user_details.first_name + ' ' + user_details.family_name}
                </AppText>
                <AppText bold fontSize={28} color={Theme.grey}>
                  {userData.email}
                </AppText>
              </Col>
              <Col size={10}>
                <Icon
                  name="md-create"
                  fontSize={32}
                  onPress={gotoEditProfile}
                  style={{ color: Theme.white, transform: [{ rotate: appLanguage === 'ar' ? '270deg' : '0deg' }] }}></Icon>
              </Col>
            </Row>
          </View>
          <AppSpacer size={20} />
          <ListBuilder listData={listData} />
          <AppSpacer size={80} />
        </AppPadding>
      </Content>
    </Container>
  );
}

export default ProfileScreen;
