import React from 'react';
import {Container, Content, Header} from 'native-base';
import useLanguageScreen from './useLanguageScreen';
import {AppSpacer, AppText, RoundedButton, Logo} from '../../Components';
import LanguageItem from '../../Components/Custom/LanguageItem';
import Theme from '../../Config/Theme';

function LanguageScreen(props) {
  const {styles, countryData, onChangeCountry, nextPage} = useLanguageScreen(
    props,
  );

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
      <Header
        androidStatusBarColor={Theme.black}
        iosBarStyle={'light-content'}
        transparent
      />
      <Content contentContainerStyle={styles.contentStyles}>
        <AppSpacer size={10} />
        <Logo />
        <AppSpacer size={70} />
        <AppText bold inverted fontSize={38}>
          Choose Your Preferred Language
        </AppText>
        <AppSpacer size={25} />
        <AppSpacer size={40} />
        {countryData.map(languageItem)}
        <AppSpacer size={20} />
        <RoundedButton onPress={nextPage} next title={'NEXT'} />
      </Content>
    </Container>
  );
}

export default LanguageScreen;
