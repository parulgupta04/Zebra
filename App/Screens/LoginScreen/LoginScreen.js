import React from 'react';
import {
  Container,
  Content,
  Header,
  Form,
  Left,
  Row,
  Body,
  Right,
  Footer,
} from 'native-base';
import {
  AppCenter,
  Logo,
  AppSpacer,
  CheckBox,
  AppText,
  RoundedButton,
  FormBuilder, AppClick
} from '../../Components';
import Theme from '../../Config/Theme';
import useLoginScreen from './useLoginScreen';

function LoginScreen(props) {
  const {
    styles,
    goToSignUp,
    rememberMe,
    toggleRememberMe,
    formBuilderData,
    updateForm,
    login,
    languagePage,
    form,
  } = useLoginScreen(props);
  const { navigation } = props;

  return (
    <Container>
      <Header
        androidStatusBarColor={Theme.black}
        iosBarStyle={'light-content'}
        transparent
      />
      <Content contentContainerStyle={styles.contentStyles}>
        <AppCenter>
          <Logo />
        </AppCenter>
        <AppSpacer size={100} />
        <Form>
          <FormBuilder
            formData={formBuilderData}
            updateForm={updateForm}
            form={form}
          />
          <Row>
            <Left style={styles.flex1}>
              <CheckBox on={rememberMe} onChange={toggleRememberMe} />
            </Left>
            <Body style={styles.rememberMe}>
              <AppText inverted bold fontSize={26}>
                Remember Me
              </AppText>
            </Body>
            <Right style={styles.forgetPassword}>
              <AppClick onPress={() => {
                navigation.navigate("ForgetPassword")

              }}><AppText inverted bold fontSize={26}>
                  Forget Password?
              </AppText></AppClick>
            </Right>
          </Row>
          <AppSpacer size={90} />
          <RoundedButton title={'SIGN IN'} onPress={login} />
          <AppSpacer size={75} />
          <AppCenter>
            <Row styles={styles.rowVerticalCenter}>
              <AppText color={Theme.grey} fontSize={26}>
                Don't have an Account yet?
              </AppText>
              <AppSpacer size={10} horizontal />
              <AppText
                color={Theme.primary}
                inverted
                bold
                fontSize={28}
                onPress={goToSignUp}>
                SIGN UP
              </AppText>
            </Row>
          </AppCenter>
        </Form>
      </Content>
      <Footer style={styles.transparentBg}>
        <AppCenter allAxis>
          <AppText
            color={Theme.light}
            fontSize={30}
            underline
            onPress={languagePage}>
            Change Language
          </AppText>
        </AppCenter>
      </Footer>
    </Container>
  );
}

export default LoginScreen;
