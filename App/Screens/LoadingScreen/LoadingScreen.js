import React from 'react';
import {Container, Header} from 'native-base';
import Theme from '../../Config/Theme';
import {AppCenter} from '../../Components';
import {ActivityIndicator} from 'react-native';
import LifecycleEventsHandler from '../../Utilities/LifecycleEventsHandler';
import DataStore from '../../Utilities/DataStore';
import {useDispatch} from 'react-redux';
import {updateAppState} from '../../Redux/appAction';

function LoadingScreen(props) {
  const {navigation} = props;
  const dispatch = useDispatch();

  async function componentDidMount() {
    // await DataStore.clear();
    let route = 'RootStack';
    // let route = 'AuthStack';
    let params = {};
    const isLoggedIn = await DataStore.get('userData');

    if (isLoggedIn) {
      dispatch(updateAppState('userData', JSON.parse(isLoggedIn)));
      route = 'AuthStack';
    }
    navigation.navigate(route, params);
  }

  LifecycleEventsHandler(componentDidMount);

  return (
    <Container>
      <Header
        androidStatusBarColor={Theme.black}
        iosBarStyle={'light-content'}
        transparent
      />
      <AppCenter allAxis>
        <ActivityIndicator size={'large'} color={Theme.primary} />
      </AppCenter>
    </Container>
  );
}

export default LoadingScreen;
