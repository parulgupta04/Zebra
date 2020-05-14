import React, {Fragment} from 'react';
import {
  Content,
  Container,
  Header,
  Body,
  Icon,
  Right,
  Row,
  Col,
} from 'native-base';
import Theme from '../../Config/Theme';
import {AppText, AppCenter, AppSpacer} from '../../Components';
import AppPadding from '../../Components/Shared/AppPadding';
import {View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import NavigationService from '../../Utilities/NavigationService';
import DataStore from '../../Utilities/DataStore';
import {useSelector} from 'react-redux';
import TabHeader from '../../Components/Custom/TabHeader';
import RowItem from '../../Components/Custom/RowItem';

function AccountScreen() {
  const appState = useSelector(state => state);
  const {userData, appLanguage} = appState;
  return (
    <Container>
      <TabHeader heading={'My Account'} />
      <Content>
        <AppPadding size={40} horizontal>
          <AppSpacer size={40} />
          <View
            style={{
              height: 90,
              backgroundColor: Theme.shade,
              borderRadius: 5,
            }}>
            <Row style={{direction: appLanguage === 'ar' ? 'rtl' : 'ltr'}}>
              <Col size={30}>
                <AppCenter allAxis>
                  <Image
                    source={{
                      uri: userData.user_details.picture,
                    }}
                    style={{height: 70, width: 70, borderRadius: 35}}
                  />
                </AppCenter>
              </Col>
              <Col size={60} style={{justifyContent: 'center'}}>
                <AppText bold fontSize={30} inverted>
                  {userData.user_details.first_name +
                    ' ' +
                    userData.user_details.family_name}
                </AppText>
                <AppText bold fontSize={28} color={Theme.grey}>
                  {userData.email}
                </AppText>
              </Col>
              {/* <Col size={10}>
                <Icon
                  name="md-create"
                  fontSize={32}
                  onPress={() => {
                    NavigationService.navigate('Profile');
                  }}
                  style={{ color: Theme.white, transform: [{ rotate: appLanguage === 'ar' ? '270deg' : '0deg' }] }}></Icon>
              </Col> */}
            </Row>
          </View>
          <AppSpacer size={20} />

          <RowItem
            icon={'contact-phone'}
            title={'Profile'}
            action={() => {
              NavigationService.navigate('Profile');
            }}
          />

          <RowItem
            icon={'settings-applications'}
            title={'Settings'}
            action={() => {
              NavigationService.navigate('Settings');
            }}
          />

          <RowItem
            icon={'credit-card'}
            title={'Payment'}
            action={() => {
              NavigationService.navigate('Payment');
            }}
          />

          <RowItem
            icon={'history'}
            title={'Account History'}
            action={() => {
              NavigationService.navigate('AccountHistory');
            }}
          />

          <RowItem
            icon={'chrome-reader-mode'}
            title={'Privacy Policy'}
            action={() => {
              NavigationService.navigate('Privacy');
            }}
          />

          <RowItem
            icon={'help-outline'}
            title={'Help'}
            action={() => {
              NavigationService.navigate('Help');
            }}
          />

          <RowItem
            icon={'exit-to-app'}
            title={'Logout'}
            action={() => {
              DataStore.clear();
              NavigationService.navigate('Loading');
            }}
          />
        </AppPadding>
      </Content>
    </Container>
  );
}

export default AccountScreen;
