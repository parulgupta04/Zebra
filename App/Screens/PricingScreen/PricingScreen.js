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
  AppClick,
  AppVisibilityToggle,
} from '../../Components';
import AppPadding from '../../Components/Shared/AppPadding';
import NavigationService from '../../Utilities/NavigationService';
import getPerfectSize from '../../Utilities/DimensionHandler';
import TabHeader from '../../Components/Custom/TabHeader';

function PricingScreen() {
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
            <AppText fontSize={28} inverted noTranslate={true}>
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
        <Col>
          <AppCenter allAxis>
            <AppText fontSize={28} bold inverted>
              {value3}
            </AppText>
          </AppCenter>
        </Col>
        <View style={{width: 0.7, backgroundColor: Theme.shadeGrey}}></View>
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
  const renderRowWith3Col = (value1, value2, value3) => {
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
            <AppText fontSize={28} bold inverted>
              {value2}
            </AppText>
          </AppCenter>
        </Col>
        <View style={{width: 0.7, backgroundColor: Theme.shadeGrey}}></View>
        <Col>
          <AppCenter allAxis>
            <AppText fontSize={28} bold inverted>
              {value3}
            </AppText>
          </AppCenter>
        </Col>
      </Row>
    );
  };
  const [offersVisibility, setoffersVisibility] = useState(false);

  const openOffers = () => {
    // NavigationService.navigate('Offers');
    let currentState = offersVisibility;
    setoffersVisibility(!currentState);
  };

  return (
    <Container>
      <TabHeader heading={'Pricing'} />
      <Content>
        <AppPadding size={20}>
          <AppSpacer size={100} />

          <ListBuilder listData={listData} />

          <AppSpacer size={50} />

          <AppText fontSize={30} bold inverted>
            Daily Offers
          </AppText>
          <AppSpacer size={30} />
          {renderRowHeader('Data Type', 'Data Pack', 'Price', 'Active')}
          {renderRow('Small', '1 GB', '3,99 $', 'Activate')}
          {renderRow('Medium', '10 GB', '9,99 $', 'Activate')}
          {renderRow('Large', '30 GB', '29,99 $', 'Activate')}
          {renderRow('Extra Large', 'Unlimited', '69,99 $', 'Activate')}
          <AppSpacer size={100} />
          {/* <RoundedButton title={'View More Offers'} next onPress={openOffers} /> */}
          <AppClick onPress={openOffers}>
            <AppCenter>
              <Row>
                <AppPadding right size={getPerfectSize(30)}>
                  <AppText fontSize={40} bold inverted>
                    {offersVisibility ? 'Hide Details' : 'Show More Offers'}
                  </AppText>
                </AppPadding>
                <AppPadding allAxis size={getPerfectSize(10)}>
                  <Icon
                    name={offersVisibility ? 'ios-arrow-up' : 'ios-arrow-down'}
                    fontSize={32}
                    style={{color: Theme.white}}></Icon>
                </AppPadding>
              </Row>
            </AppCenter>
          </AppClick>
          {offersVisibility && (
            <View>
              <AppSpacer size={50} />

              <AppText fontSize={30} bold inverted>
                Monthly Offers
              </AppText>
              <AppSpacer size={30} />
              {renderRowHeader('Data Type', 'Data Pack', 'Price', 'Active')}
              {renderRow('Small', '5 GB', '4,99 $', 'Activate')}
              {renderRow('Medium', '50 GB', '29,99 $', 'Activate')}
              {renderRow('Large', '100 GB', '49,99 $', 'Activate')}
              {renderRow('Extra Large', 'Unlimited', '99,99 $', 'Activate')}
              <AppSpacer size={50} />

              <AppText fontSize={30} bold inverted>
                Pay As You Go
              </AppText>
              <AppSpacer size={30} />
              {renderRowHeader('Data Type', 'Data Pack', null, 'Active')}
              {renderRowWith3Col('MB', '3,99 $', 'Activate')}
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
            </View>
          )}
        </AppPadding>
      </Content>
    </Container>
  );
}

export default PricingScreen;
