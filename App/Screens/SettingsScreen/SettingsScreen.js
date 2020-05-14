import React, {Fragment} from 'react';
import {
  Container,
  Content,
  Header,
  Left,
  Title,
  Right,
  Icon,
  Body,
  Row,
  Col,
} from 'native-base';
import Theme from '../../Config/Theme';
import {
  Logo,
  AppCenter,
  AppSpacer,
  ListBuilder,
  AppText,
  RoundedButton,
  AppVisibilityToggle,
} from '../../Components';
import {TouchableOpacity} from 'react-native';
import AppPadding from '../../Components/Shared/AppPadding';
import useBackHandler from '../../Hooks/Shared/useBackHandler';
import RowItem from '../../Components/Custom/RowItem';
import Screenheader from '../../Components/Custom/Screenheader';

function SettingsScreen({navigation}) {
  useBackHandler(navigation, true);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Screenheader title={'Settings'} goBack={goBack} />
      <Content>
        <AppPadding horizontal size={40}>
          <AppSpacer size={40} />

          <RowItem
            icon={'settings'}
            title={'Alert Setting'}
            action={() => {
              navigation.navigate('Alert');
            }}
          />
          <RowItem
            icon={'payment'}
            title={'Payment'}
            action={() => {
              navigation.navigate('Payment');
            }}
          />
          <RowItem
            icon={'vpn-key'}
            title={'Change Password'}
            action={() => {
              navigation.navigate('ChangePassword');
            }}
          />
          <RowItem
            icon={'g-translate'}
            title={'Change Language'}
            action={() => {
              navigation.navigate('ChangeLanguage');
            }}
          />
        </AppPadding>
      </Content>
    </Container>
  );
}

export default SettingsScreen;
