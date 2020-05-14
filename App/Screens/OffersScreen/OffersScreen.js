import React from 'react';
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
  View,
} from 'native-base';
import Theme from '../../Config/Theme';
import {
  Logo,
  AppCenter,
  AppSpacer,
  ListBuilder,
  AppText,
  RoundedButton,
  AppVisibilityToggle,
} from '../../Components';
import AppPadding from '../../Components/Shared/AppPadding';

function OffersScreen({navigation}) {
  const listData = ['Selected Country', {name: 'Country', value: 'India'}];
  const renderRow = (value1, value2, value3, value4) => {
    return (
      <Row
        style={{
          height: 40,
          borderWidth: 1,
          borderColor: Theme.shadeGrey,
          backgroundColor: Theme.shade,
        }}>
        <Col>
          <AppCenter allAxis>
            <AppText fontSize={28} inverted>
              {value1}
            </AppText>
          </AppCenter>
        </Col>
        <View style={{width: 0.7, backgroundColor: Theme.shadeGrey}}></View>
        <Col>
          <AppCenter allAxis>
            <AppText fontSize={28} inverted>
              {value2}
            </AppText>
          </AppCenter>
        </Col>
        <View style={{width: 0.7, backgroundColor: Theme.shadeGrey}}></View>
        <AppVisibilityToggle visible={value3}>
          <Col>
            <AppCenter allAxis>
              <AppText fontSize={28} bold inverted>
                {value3}
              </AppText>
            </AppCenter>
          </Col>
          <View style={{width: 0.7, backgroundColor: Theme.shadeGrey}}></View>
        </AppVisibilityToggle>

        <Col>
          <AppCenter allAxis>
            <AppText fontSize={28} bold color={Theme.danger}>
              {value4}
            </AppText>
          </AppCenter>
        </Col>
      </Row>
    );
  };

  const renderRowHeader = (header1, header2, header3, header4) => {
    return (
      <Row style={{height: 40, backgroundColor: Theme.primary}}>
        <Col>
          <AppCenter allAxis>
            <AppText fontSize={28} bold inverted>
              {header1}
            </AppText>
          </AppCenter>
        </Col>
        <View style={{width: 0.7, backgroundColor: Theme.shadeGrey}}></View>
        <Col>
          <AppCenter allAxis>
            <AppText fontSize={28} bold inverted>
              {header2}
            </AppText>
          </AppCenter>
        </Col>
        <View style={{width: 0.7, backgroundColor: Theme.shadeGrey}}></View>
        <AppVisibilityToggle visible={header3}>
          <Col>
            <AppCenter allAxis>
              <AppText fontSize={28} bold inverted>
                {header3}
              </AppText>
            </AppCenter>
          </Col>
          <View style={{width: 0.7, backgroundColor: Theme.shadeGrey}}></View>
        </AppVisibilityToggle>
        <Col>
          <AppCenter allAxis>
            <AppText fontSize={28} bold inverted>
              {header4}
            </AppText>
          </AppCenter>
        </Col>
      </Row>
    );
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Header
        androidStatusBarColor={Theme.primary}
        style={{backgroundColor: Theme.primary}}>
        <Left style={{flex: 1.5, paddingLeft: 10}}>
          <Icon
            name="md-arrow-back"
            fontSize={32}
            onPress={goBack}
            style={{color: Theme.white}}></Icon>
        </Left>
        <Body style={{flex: 10}}>
          <AppText bold fontSize={40} inverted>
            Pricing - More offers
          </AppText>
        </Body>
      </Header>
      <Content>
        <AppPadding size={20}>
          <AppSpacer size={50} />

          <AppText fontSize={30} bold inverted>
            Monthly Offers
          </AppText>
          <AppSpacer size={30} />
          {renderRowHeader('Data Type', 'Data Pack', 'Price', 'Active')}
          {renderRow('Small', '1 GB', '3,99 $', 'Activate')}
          {renderRow('Medium', '10 GB', '9,99 $', 'Activate')}
          {renderRow('Large', '30 GB', '29,99 $', 'Activate')}
          {renderRow('Extra Large', 'Unlimited', '69,99 $', 'Activate')}
          <AppSpacer size={50} />

          <AppText fontSize={30} bold inverted>
            Pay as you Go
          </AppText>
          {renderRowHeader('Data Type', 'Data Pack', null, 'Active')}
          {renderRow('MB', '3,99 $', null, 'Activate')}
          <AppSpacer size={100} />
          <AppPadding horizontal size={140}>
            <RoundedButton title={'Free Access'} onPress={() => {}} />
          </AppPadding>
          <AppSpacer size={30} />
          <AppCenter>
            <AppText
              style={{textAlign: 'center'}}
              fontSize={24}
              bold
              color={Theme.grey}>
              {`Free WiFi can be activated when your \n Data Pack has expired!`}
            </AppText>
          </AppCenter>
        </AppPadding>
      </Content>
    </Container>
  );
}

export default OffersScreen;
