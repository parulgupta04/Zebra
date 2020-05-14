import React from 'react';
import { Platform } from "react-native";
import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import Theme from '../Config/Theme';
import { Icon, View } from 'native-base';
import PricingScreen from '../Screens/PricingScreen/PricingScreen';
import AccountScreen from '../Screens/AccountScreen/AccountScreen';
import SupportScreen from '../Screens/SupportSreen/SupportScreen';
import { AppText } from '../Components';


const HomeTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Pricing: {
      screen: PricingScreen,
    },
    Support: {
      screen: SupportScreen,
    },
    Account: {
      screen: AccountScreen,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    order: ['Home', 'Pricing', 'Support', 'Account'],
    tabBarOptions: {
      labelStyle: {
        fontSize: 14,
      },
      activeTintColor: Theme.primary,
      inactiveTintColor: Theme.shade,
    },
    // tabBarComponent: () => <View style={{ height: 50, backgroundColor: 'red' }}>

    // </View>,
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = `md-home`;
            break;
          case 'Pricing':
            iconName = `md-pricetags`;
            break;
          case 'Support':
            iconName = `md-help-buoy`;
            break;
          case 'Account':
            iconName = `md-person`;
            break;
        }
        return (
          <Icon
            // type={'MaterialIcons'}
            name={iconName}
            fontSize={22}
            style={{ color: tintColor }}
          />
        );
      },

      tabBarLabel: (({ tintColor }) => {
        const { routeName } = navigation.state;

        let label = routeName;
        return (
          <AppText
            fontSize={22}
            style={{ color: tintColor, left: Platform.OS === 'android' ? 30 : 0, paddingBottom: Platform.OS === 'android' ? 8 : 0, }}
          >
            {label}
          </AppText>
        );
      })
    }),
  },
);

export default HomeTabNavigator;
