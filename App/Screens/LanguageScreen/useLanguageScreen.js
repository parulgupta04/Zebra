import { useState } from 'react';
import { StyleSheet } from 'react-native';
import images from '../../Assets';
import getPerfectSize  from '../../Utilities/DimensionHandler';
import useBackHandler from '../../Hooks/Shared/useBackHandler';
import LifecycleEventsHandler from '../../Utilities/LifecycleEventsHandler';
import DataStore from '../../Utilities/DataStore';
import { useDispatch } from 'react-redux';
import { updateAppState } from '../../Redux/appAction';
import { TranslatorConfiguration, ProviderTypes } from 'react-native-power-translator';
import { useSelector } from 'react-redux';

function useLanguageScreen({ navigation }) {
  const [countryData, setCountryData] = useState([]);
  const appState = useSelector(state => state);
  const { appLanguage } = appState;

  useBackHandler(navigation, false);
  const dispatch = useDispatch();

  function selectLanguage(lang) {
    TranslatorConfiguration.setConfig(ProviderTypes.Google, 'AIzaSyA_09AoY9KqOiuK_owO9dpgb6hsB8HFlQs', lang, 'en');
    dispatch(updateAppState('appLanguage', lang));

  }
  async function componentDidMount() {
    const savedLanguage = await DataStore.get('savedLanguage');
    let language = ''
    if (savedLanguage === null) {
      language = 'en'
    }
    else {
      language = JSON.parse(savedLanguage)
    }
    console.log(savedLanguage, "savedLanguage===== useLanguageScreen", language)
    setCountryData([
      {
        image: images.english,
        title: 'English',
        on: language === 'en' ? true : false,
        lang_code: 'en'
      },
      {
        image: images.spanish,
        title: 'Spanish',
        on: language === 'es' ? true : false,
        lang_code: 'es'
      },
      {
        image: images.italian,
        title: 'Italian',
        on: language === 'it' ? true : false,
        lang_code: 'it'
      },
      {
        image: images.arabic,
        title: 'Arabic',
        on: language === 'ar' ? true : false,
        lang_code: 'ar'
      },
      {
        image: images.french,
        title: 'French',
        on: language === 'fr' ? true : false,
        lang_code: 'fr'
      },
    ]);
    let params = {};
    const registrationFormPartiallyFilled = await DataStore.get(
      'Registration_DataArrayString',
    );
    if (registrationFormPartiallyFilled) {
      route = 'SignUp';
      const registrationPageType = await DataStore.get(
        'Registration_Page_Type',
      );
      params.page = registrationPageType;
      navigation.navigate(route, params);
    }
  }

  LifecycleEventsHandler(componentDidMount);

  function onChangeCountry(index) {
    const countryDataTemp = [...countryData];
    countryDataTemp.forEach((cT, i) => {
      if (index === i) {
        cT.on = true;
        selectLanguage(cT.lang_code)
      } else {
        cT.on = false;
      }
    });
    setCountryData(countryDataTemp);
  }

  function nextPage() {
    navigation.navigate('Login');

  }

  const styles = StyleSheet.create({
    contentStyles: {
      paddingHorizontal: getPerfectSize(40),
      direction: 'ltr'
    },
  });
  return { styles, countryData, onChangeCountry, nextPage };
}

export default useLanguageScreen;
