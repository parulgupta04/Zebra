import React, { useEffect } from 'react';
import { Root } from 'native-base';
import { AppLoader, AppPopup, AppConfirm } from '../Components';
import LifecycleEventsHandler from '../Utilities/LifecycleEventsHandler';
import SplashScreen from 'react-native-splash-screen';
import SwitchNavigator from './SwitchNavigator';
import NavigationService from '../Utilities/NavigationService';
import { PowerTranslator, ProviderTypes, TranslatorConfiguration, TranslatorFactory } from 'react-native-power-translator';
import { useSelector, useDispatch } from 'react-redux';
import { updateAppState } from '../Redux/appAction';
import DataStore from '../Utilities/DataStore';

function AppRouter() {
  const appState = useSelector(state => state);
  const { appLanguage } = appState;
  const dispatch = useDispatch();

  async function componentDidMount() {
    const savedLanguage = await DataStore.get('savedLanguage');
    console.log("savedLanguage", savedLanguage)
    if (savedLanguage) {
      TranslatorConfiguration.setConfig(ProviderTypes.Google, 'AIzaSyA_09AoY9KqOiuK_owO9dpgb6hsB8HFlQs', JSON.parse(savedLanguage));
      dispatch(updateAppState('appLanguage', JSON.parse(savedLanguage)));
    } else {
      TranslatorConfiguration.setConfig(ProviderTypes.Google, 'AIzaSyA_09AoY9KqOiuK_owO9dpgb6hsB8HFlQs', 'en');
    }

    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }

  async function componentDidUpdate() {

    const savedLanguage = await DataStore.get('savedLanguage');
    console.log('componentDidUpdate>>>>>', savedLanguage)
    // if (savedLanguage) {
    if (savedLanguage !== appLanguage)
      DataStore.store('savedLanguage', JSON.stringify(appLanguage));
    // }

  }

  LifecycleEventsHandler(componentDidMount, componentDidUpdate, null, [appLanguage]);

  function navigationRefCreator(navigatorRef) {
    return NavigationService.setTopLevelNavigator(navigatorRef);
  }

  return (
    <Root>
      <SwitchNavigator ref={navigationRefCreator} />
      <AppLoader />
      <AppPopup />
      <AppConfirm />
    </Root>
  );
}

export default AppRouter;
