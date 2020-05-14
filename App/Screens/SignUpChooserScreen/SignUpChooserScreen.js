import React from 'react';
import { View } from 'react-native';
import {
  Container,
  Content,
  Header,
  Left,
  Icon,
  Body,
  Right,
  Row,
} from 'native-base';
import Theme from '../../Config/Theme';
import useSignUpChooserScreen from './useSignUpChooserScreen';
import {
  AppCenter,
  Logo,
  AppSpacer,
  AppText,
  RoundedButton,
} from '../../Components';
import { useSelector } from "react-redux";

function SignUpChooserScreen(props) {
  const {
    styles,
    goBack,
    goToLogin,
    nextPagePersonal,
    nextPageBusiness,
  } = useSignUpChooserScreen(props);
  const appState = useSelector(state => state)
  const { appLanguage } = appState
  return (
    <Container>
      <Header
        androidStatusBarColor={Theme.black}
        iosBarStyle={'light-content'}
        style={{ direction: appLanguage === 'ar' ? 'rtl' : 'ltr' }}
        transparent>
        <Left style={styles.backArrowStyle}>
          <Icon
            onPress={goBack}
            name={appLanguage !== 'ar' ? 'md-arrow-back' : 'arrow-forward'}
            style={{ color: Theme.light }}
          />
        </Left>
        <Body />
        <Right />
      </Header>
      <Content contentContainerStyle={styles.contentStyles}>
        <AppCenter>
          <Logo />
        </AppCenter>
        <AppSpacer size={80} />
        <AppText bold inverted fontSize={38}>
          Register User
        </AppText>
        <AppSpacer size={25} />
        <AppText inverted fontSize={30}>
          What type of user are you? Registration is free and does not imply any
          commitment.
        </AppText>
        <AppSpacer size={50} />
        <View style={styles.rowEnd}>
          <Row>
            <AppText color={Theme.light} bold fontSize={28}>
              Add Promotion Code
            </AppText>
            <AppSpacer size={10} horizontal />
            <AppText
              color={Theme.primary}
              inverted
              bold
              fontSize={28}
              onPress={() => { }}>
              Apply
            </AppText>
          </Row>
        </View>
        <AppSpacer size={30} />
        <RoundedButton
          notRound
          next
          title={'Register as Personal'}
          onPress={nextPagePersonal}
        />
        <AppSpacer size={45} />
        <RoundedButton
          notRound
          dark
          next
          title={'Register as Business'}
          onPress={nextPageBusiness}
        />
        <AppSpacer size={100} />
        <AppCenter>
          <Row style={styles.rowVerticalCenter}>
            <AppText color={Theme.grey} fontSize={26}>
              Already have an Account?
            </AppText>
            <AppSpacer size={10} horizontal />
            <AppText
              color={Theme.primary}
              inverted
              bold
              fontSize={28}
              onPress={goToLogin}>
              LOG IN
            </AppText>
          </Row>
        </AppCenter>
      </Content>
    </Container>
  );
}

export default SignUpChooserScreen;
