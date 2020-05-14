import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import LoadingScreen from '../Screens/LoadingScreen/LoadingScreen';
import RootStackNavigator from './RootStackNavigator';
import AuthStackNavigator from './AuthStackNavigator';

const AppSwitchNavigator = createSwitchNavigator(
  {
    Loading: {
      screen: LoadingScreen,
    },
    AuthStack: {
      screen: AuthStackNavigator,
    },
    RootStack: {
      screen: RootStackNavigator,
    },
  },
  {
    initialRouteName: 'Loading',
  },
);

export default createAppContainer(AppSwitchNavigator);
