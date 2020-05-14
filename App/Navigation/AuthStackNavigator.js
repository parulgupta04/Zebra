import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeTabNavigator from './HomeTabNavigator';
import OffersScreen from '../Screens/OffersScreen/OffersScreen';
import SettingsScreen from '../Screens/SettingsScreen/SettingsScreen';
import ChangeLanguageScreen from '../Screens/ChangeLanguageScreen/ChangeLanguageScreen';
import ChangePasswordScreen from '../Screens/ChangePasswordScreen/ChangePasswordScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import AccountHistory from '../Screens/AccountHistory/AccountHistory';
import PaymentScreen from '../Screens/PaymentScreen/PaymentScreen';
import HelpScreen from '../Screens/HelpScreen/HelpScreen';
import PrivacyPolicyScreen from '../Screens/PrivacyPolicyScreen/PrivacyPolicyScreen';
import EditProfileScreen from '../Screens/EditProfileScreen/EditProfileScreen';
import InvoicesScreen from '../Screens/InvoicesScreen/InvoicesScreen';
import SubscriptionScreen from '../Screens/SubscriptionScreen/SubscriptionScreen';
import PaymentAccountHistory from '../Screens/AccountHistory/PaymentAccountHistory';
import ChatScreen from '../Screens/ChatScreen/ChatScreen';
import AddRecipients from '../Screens/AddRecipients/AddRecipients';
import PendingRequest from '../Screens/PendingRequest/PendingRequest';
import AlertSettingns from '../Screens/AlertSettings/AlertSettingns';

const AuthStackNavigator = createStackNavigator(
  {
    HomeTab: {
      screen: HomeTabNavigator,
    },
    Offers: {
      screen: OffersScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
    AccountHistory: {
      screen: AccountHistory,
    },
    Payment: {
      screen: PaymentScreen,
    },
    Help: {
      screen: HelpScreen,
    },
    Privacy: {
      screen: PrivacyPolicyScreen,
    },

    ChangeLanguage: {
      screen: ChangeLanguageScreen,
    },
    ChangePassword: {
      screen: ChangePasswordScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
    editProfile: {
      screen: EditProfileScreen,
    },
    invoice: {
      screen: InvoicesScreen,
    },
    recipients: {
      screen: AddRecipients,
    },
    pendingRequest: {
      screen: PendingRequest,
    },
    subscription: {
      screen: SubscriptionScreen,
    },
    paymentAccHistory: {
      screen: PaymentAccountHistory,
    },
    chat: {
      screen: ChatScreen,
    },
    Alert: {
      screen: AlertSettingns,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'HomeTab',
  },
);

export default createAppContainer(AuthStackNavigator);
