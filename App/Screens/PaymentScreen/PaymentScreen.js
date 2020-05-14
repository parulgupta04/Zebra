import React, {useState} from 'react';
import {
  AppText,
  AppSpacer,
  FormBuilder,
  RoundedButton,
  CheckBox,
  AppClick,
} from '../../Components';
import {
  Container,
  Content,
  Header,
  Left,
  Title,
  Right,
  Icon,
  Body,
  Radio,
  Row,
  Col,
} from 'native-base';
import useForm from '../../Hooks/Shared/useForm';

import Theme from '../../Config/Theme';
import getPerfectSize from '../../Utilities/DimensionHandler';
import AppPadding from '../../Components/Shared/AppPadding';
import {View} from 'react-native';
import usePaymentScreen from './useapymentScreen';
import Screenheader from '../../Components/Custom/Screenheader';

// import stripe, {PaymentCardTextField} from 'tipsi-stripe'
import LifecycleEventsHandler from '../../Utilities/LifecycleEventsHandler';

function PaymentScreen(props) {
  const {form, updateForm} = useForm();

  const {
    formBuilderData,
    changeCardType,
    cardType,
    styles,
    payNow,
  } = usePaymentScreen({});

  LifecycleEventsHandler(componentDidMount);
  async function componentDidMount() {
    // stripe.setOptions({
    //     publishableKey: 'pk_test_K1tSyl7qvEGmiUrJ7EtHoVyq00J6h5CQrs',
    //     merchantId: 'MERCHANT_ID', // Optional
    //     androidPayMode: 'test', // Android only
    // })
    // getToken()

    const options = {
      requiredBillingAddressFields: 'full',
      prefilledInformation: {
        billingAddress: {
          name: 'Gunilla Haugeh',
          line1: 'Canary Place',
          line2: '3',
          city: 'Macon',
          state: 'Georgia',
          country: 'US',
          postalCode: '31217',
        },
      },
    };

    //   const token = await stripe.paymentRequestWithCardForm(options)
    //   console.log("token", token)
  }

  async function getToken() {
    const params = {
      // mandatory
      number: '4242424242424242',
      expMonth: 11,
      expYear: 22,
      cvc: '223',
      // optional
      name: 'Test User',
      currency: 'usd',
    };

    // const token = await stripe.createTokenWithCard(params);
    console.log('token', token);
  }

  const {navigation} = props;
  const goBack = () => {
    navigation.goBack();
  };
  const handleFieldParamsChange = (valid, params) => {
    console.log(`
          Valid: ${valid}
          Number: ${params.number || '-'}
          Month: ${params.expMonth || '-'}
          Year: ${params.expYear || '-'}
          CVC: ${params.cvc || '-'}
        `);
  };

  //    const   isPaymentCardTextFieldFocused = () => paymentCardInput.isFocused()

  //    const  focusPaymentCardTextField = () =>paymentCardInput.focus()

  //    const   blurPaymentCardTextField = () => paymentCardInput.blur()

  //    const  resetPaymentCardTextField = () => paymentCardInput.setParams({number: "3123", expMonth:"we", expYear: "2323", cvc:"232", })
  return (
    <Container>
      <Screenheader title={'Payment Method'} goBack={goBack} />
      <Content style={{padding: 10}}>
        <AppSpacer size={getPerfectSize(80)}></AppSpacer>
        <AppPadding allaxis size={getPerfectSize(35)}>
          <AppText fontSize={35} bold style={{color: Theme.light}}>
            Payment Type
          </AppText>
        </AppPadding>
        <View style={styles.line}></View>
        <AppSpacer size={getPerfectSize(80)}></AppSpacer>
        <Row>
          <AppSpacer horizontal size={getPerfectSize(90)} />
          <CheckBox
            on={cardType === 'Debit' ? true : false}
            onChange={() => changeCardType('Debit')}
          />
          <AppClick onPress={() => changeCardType('Debit')}>
            <AppText
              bold
              fontSize={30}
              inverted
              style={{paddingLeft: getPerfectSize(20)}}>
              Debit Card
            </AppText>
          </AppClick>
          <AppSpacer horizontal size={getPerfectSize(90)} />
          <CheckBox
            on={cardType === 'Credit' ? true : false}
            onChange={() => changeCardType('Credit')}
          />
          <AppClick onPress={() => changeCardType('Credit')}>
            <AppText
              bold
              fontSize={30}
              inverted
              style={{paddingLeft: getPerfectSize(20)}}>
              Credit Card
            </AppText>
          </AppClick>
        </Row>
        <AppSpacer size={getPerfectSize(80)}></AppSpacer>
        <AppPadding allaxis size={getPerfectSize(35)}>
          <AppText fontSize={35} bold style={{color: Theme.light}}>
            Card Details
          </AppText>
        </AppPadding>
        <View style={styles.line}></View>
        <AppSpacer size={getPerfectSize(30)}></AppSpacer>
        <AppPadding allaxis size={getPerfectSize(30)}>
          {/* <AppText fontSize={30} bold style={{ color: Theme.light }}>Card Holder's Name</AppText> */}
          <AppSpacer size={getPerfectSize(30)}></AppSpacer>
          <FormBuilder
            formData={formBuilderData}
            updateForm={updateForm}
            form={form}
          />
          {/* <PaymentCardTextField
        ref={ (ref) => {
            paymentCardInput = ref;
        }}
        
        style={styles.field}
        cursorColor={"red"}
        textErrorColor={"red"}
        placeholderColor={Theme.primary}
        numberPlaceholder={"xxxx-xxxx-xxxx-xxxx"}
        expirationPlaceholder={"exp"}
        cvcPlaceholder={"cvv"}
        disabled={false}
        onParamsChange={handleFieldParamsChange}
      /> */}
        </AppPadding>
        <AppSpacer size={getPerfectSize(80)}></AppSpacer>
        <AppPadding horizontal size={140}>
          <RoundedButton title={'PAY'} onPress={() => payNow(form)} />
        </AppPadding>
        <AppSpacer size={getPerfectSize(80)}></AppSpacer>
      </Content>
    </Container>
  );
}

export default PaymentScreen;
