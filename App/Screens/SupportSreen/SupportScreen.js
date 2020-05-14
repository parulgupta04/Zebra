import React, {useState} from 'react';
import {
  Container,
  Content,
  Header,
  Left,
  Title,
  Right,
  Icon,
  Body,
  Row,
  Col,
} from 'native-base';
import Theme from '../../Config/Theme';
import {
  Logo,
  AppCenter,
  AppSpacer,
  ListBuilder,
  AppText,
  AppClick,
} from '../../Components';
import SupportCard from '../../Components/Custom/SupportCard';
import getPerfectSize from '../../Utilities/DimensionHandler';
import {View, Dimensions} from 'react-native';
import useSupportScreen from './useSupportScreen';
import TabHeader from '../../Components/Custom/TabHeader';
import AppPadding from '../../Components/Shared/AppPadding';

function SupportScreen(props) {
  const {styles, selectOption, selectedOption} = useSupportScreen();

  return (
    <Container>
      <TabHeader heading={'Support'} />
      <AppSpacer size={getPerfectSize(30)} />
      <View style={styles.rowStyle}>
        <AppClick
          style={{
            flex: 1,
          }}
          onPress={() => {
            selectOption('call');
          }}>
          <Col>
            <SupportCard
              title={'Call'}
              icon_name={'call'}
              selected={
                selectedOption === 'call' ? Theme.primary : Theme.shadeGrey
              }
            />
          </Col>
        </AppClick>
        <AppClick
          onPress={() => {
            selectOption('chat');
            props.navigation.navigate('chat');
          }}
          style={{
            flex: 1,
          }}>
          <Col>
            <SupportCard
              title={'Chat'}
              icon_name={'ios-chatbubbles'}
              selected={
                selectedOption === 'chat' ? Theme.primary : Theme.shadeGrey
              }
            />
          </Col>
        </AppClick>
      </View>

      {/* <AppSpacer size={getPerfectSize(60)} /> */}
      <View style={styles.rowStyle}>
        <AppClick
          style={{
            flex: 1,
          }}
          onPress={() => {
            selectOption('help');
            props.navigation.navigate('Help');
          }}>
          <SupportCard
            title={'Help Center'}
            icon_name={'ios-information-circle'}
            selected={
              selectedOption === 'help' ? Theme.primary : Theme.shadeGrey
            }
          />
        </AppClick>

        <View
          style={{
            height: Dimensions.get('screen').width / 2,
            width: Dimensions.get('screen').width / 2,
          }}></View>
      </View>
    </Container>
  );
}

export default SupportScreen;
