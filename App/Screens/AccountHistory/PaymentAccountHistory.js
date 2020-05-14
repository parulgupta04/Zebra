import React from 'react';
import {Container, Content, Row, Col, View, Icon, Card} from 'native-base';
import Screenheader from '../../Components/Custom/Screenheader';
import {
  AppCenter,
  AppText,
  AppVisibilityToggle,
  AppSpacer,
  AppClick,
} from '../../Components';
import Theme from '../../Config/Theme';
import getPerfectSize from '../../Utilities/DimensionHandler';
import InvoiceCard from '../../Components/Custom/InvoiceCard';

function PaymentAccountHistory(props) {
  return (
    <Container>
      <Content style={{padding: 10}}>
        <AppCenter>
          <View
            style={{
              width: '98%',
              backgroundColor: Theme.shadeGrey,
              borderRadius: 5,
            }}>
            <AppSpacer size={8} />
            <Row style={{flex: 0, padding: 8}}>
              <Col>
                <AppText fontSize={25} bold inverted>
                  Invoice Detail
                </AppText>
              </Col>
              <AppText fontSize={25} bold inverted>
                15-08-2019
              </AppText>
            </Row>
            <AppSpacer size={8} />
            <View
              style={{
                borderBottomWidth: 0.5,
                borderColor: Theme.white,
                width: '95%',
                alignSelf: 'center',
              }}></View>
            <AppSpacer size={12} />
            <InvoiceCard name={'Amount'} value={'Value'} />
            <AppSpacer size={8} />
            <InvoiceCard
              name={'Promo Discount'}
              value={'Value'}
              discount={'10%'}
            />

            <AppSpacer size={8} />
            <InvoiceCard name={'Due Date'} value={'Value'} />
            <AppSpacer size={8} />
            <InvoiceCard name={'Invoice Number'} value={'Value'} />
            <AppSpacer size={30} />
            <Row style={{flex: 0, padding: 8}}>
              <Col>
                <AppText fontSize={25} bold inverted>
                  Payment Detail
                </AppText>
              </Col>
              <AppText fontSize={25} bold inverted>
                Paypal
              </AppText>
            </Row>
            <AppSpacer size={8} />
            <View
              style={{
                borderBottomWidth: 0.5,
                borderColor: Theme.white,
                width: '98%',
                alignSelf: 'center',
              }}></View>
            <AppSpacer size={12} />
            <InvoiceCard name={'Account Detail'} value={'Value'} />
            <AppSpacer size={8} />
            <InvoiceCard name={'Business Detail'} value={'Value'} />
            <AppSpacer size={20} />
            <Row
              style={{
                flex: 0,
                backgroundColor: Theme.primary,
                height: 45,
                //   width: '98%',
                padding: 10,
              }}>
              <Col>
                <AppText fontSize={25} bold inverted>
                  Payment Detail : $359
                </AppText>
              </Col>

              <AppText fontSize={25} bold inverted>
                Download :
              </AppText>
              <Icon
                name={'download'}
                fontSize={5}
                style={{color: Theme.white, paddingLeft: 5}}></Icon>
            </Row>
          </View>
        </AppCenter>
        <AppSpacer size={50} />
      </Content>
    </Container>
  );
}

export default PaymentAccountHistory;
