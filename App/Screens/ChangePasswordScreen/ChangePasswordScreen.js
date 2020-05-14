import React, { Fragment } from 'react';
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
  FormBuilder,
} from '../../Components';
import { TouchableOpacity, View } from 'react-native';
import AppPadding from '../../Components/Shared/AppPadding';
import useChangePasswordScreen from './useChangePasswordScreen';
import getPerfectSize  from '../../Utilities/DimensionHandler';
import Screenheader from '../../Components/Custom/Screenheader';

function ChangePasswordScreen({ navigation }) {
  const {
    formBuilderData,
    form,
    updateForm,
    changePassword,
  } = useChangePasswordScreen({
    navigation,
  });

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Screenheader
        title={'Change Password'}
        goBack={goBack}
      />
      <Content>
        <AppPadding horizontal size={40}>
          <AppSpacer size={40} />
          <FormBuilder
            formData={formBuilderData}
            updateForm={updateForm}
            form={form}
          />
          <AppSpacer size={80} />
          <AppPadding horizontal size={80}>
            <RoundedButton title={'Change Password'} onPress={changePassword}
              style={{
                width: getPerfectSize(550),
                alignSelf: "center",
              }} />
          </AppPadding>
        </AppPadding>
      </Content>
    </Container>
  );
}

export default ChangePasswordScreen;
