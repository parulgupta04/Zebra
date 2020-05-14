import React from 'react';
import {Container, Content, Row, Col, View, Icon, Card} from 'native-base';
import Screenheader from '../../Components/Custom/Screenheader';
import useForm from '../../Hooks/Shared/useForm';
import {
  AppCenter,
  AppText,
  AppVisibilityToggle,
  AppSpacer,
  AppClick,
  FormBuilder,
  RoundedButton,
} from '../../Components';
import Theme from '../../Config/Theme';
import getPerfectSize from '../../Utilities/DimensionHandler';
import AppPadding from '../../Components/Shared/AppPadding';

function AddRecipients({navigation}) {
  const {form, updateForm, fillForm} = useForm({});
  const goBack = () => {
    navigation.goBack();
  };
  const formBuilderData = [
    {
      inputType: 'text',
      label: 'First Name',
      placeholder: ' Enter First Name',
      keyName: 'Fname',
      lightLabel: true,
      validationTypes: ['required'],
    },
    {
      inputType: 'text',
      label: 'Last Name',
      placeholder: ' Enter Last Name',
      keyName: 'Lname',
      lightLabel: true,
      validationTypes: ['required'],
    },
    {
      inputType: 'text',
      label: 'Email Address',
      placeholder: ' Enter Email Address',
      keyName: 'email',
      lightLabel: true,
      validationTypes: ['required'],
    },
  ];
  return (
    <Container>
      <Screenheader title={'Add Recipients'} goBack={goBack} />
      <Content style={{padding: 10}}>
        <AppSpacer size={40} />
        <FormBuilder
          formData={formBuilderData}
          updateForm={updateForm}
          form={form}
        />
        <AppSpacer size={40} />
        <AppPadding horizontal size={140}>
          <RoundedButton title={'SUBMIT'} />
        </AppPadding>
      </Content>
    </Container>
  );
}

export default AddRecipients;
