import React from 'react';
import { Container, Content, Header, Left, Icon, Body } from 'native-base';
import useChangeLanguageScreen from './useChangeLanguageScreen';
import { AppSpacer, AppText, RoundedButton, Logo } from '../../Components';
import LanguageItem from '../../Components/Custom/LanguageItem';
import Theme from '../../Config/Theme';
import Screenheader from '../../Components/Custom/Screenheader';

function ChangeLanguageScreen(props) {
  const {
    styles,
    countryData,
    onChangeCountry,
    nextPage,
  } = useChangeLanguageScreen(props);
  const { navigation } = props;

  const goBack = () => {
    navigation.goBack();
  };

  function languageItem(country, index) {
    return (
      <LanguageItem
        key={index}
        image={country.image}
        title={country.title}
        on={country.on}
        onChange={onChangeCountry.bind(null, index)}
      />
    );
  }

  return (
    <Container>
      <Screenheader
        title={'Change Language'}
        goBack={goBack}
      />
      <Content contentContainerStyle={styles.contentStyles}>
        <AppSpacer size={80} />
        <AppText bold inverted fontSize={38}>
          Choose Your Preferred Language
        </AppText>
        <AppSpacer size={25} />
        {/* <AppText inverted fontSize={30}>
          Please select your language
        </AppText> */}
        <AppSpacer size={40} />
        {countryData.map(languageItem)}
        <AppSpacer size={20} />
        <RoundedButton onPress={goBack} title={'SELECT LANGUAGE '} />
      </Content>
    </Container>
  );
}

export default ChangeLanguageScreen;
