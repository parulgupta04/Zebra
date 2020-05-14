import React, { useState } from 'react'
import { Container, Content, Icon, Header, Left, Body, Row } from 'native-base'
import { AppText, AppSpacer, AppCenter, CheckBox, FormBuilder, RoundedButton, AppClick, AppVisibilityToggle } from '../../Components'
import Theme from '../../Config/Theme';
import getPerfectSize  from '../../Utilities/DimensionHandler';
import AppPadding from '../../Components/Shared/AppPadding';
import useForgetPasswordScreen from './useForgetPasswordScreen';
import useForm from '../../Hooks/Shared/useForm';

function ForgerPasswordScreen(props) {
    const [recovery_type, setrecovery_type] = useState('phone')
    const [showDetail, setshowDetail] = useState(false)
    const { form, updateForm } = useForm();

    const { navigation } = props;
    const goBack = () => {
        navigation.goBack();
    };
    function toggleOption(selected) {

        setrecovery_type(selected)

    }
    function showDeatilform() {
        setshowDetail(true)
    }
    const formBuilderData = [
        {
            inputType: 'text',
            label: recovery_type === 'phone' ? "Phone Number" : "Email Address",
            placeholder: recovery_type === 'phone' ? "Phone" : 'Email',
            keyName: recovery_type === 'phone' ? "Phone" : "Email",
            validationTypes: ['required'],
            customIcon: 'ios-checkmark-circle'
        },
    ];
    const detailformBuilderData = [
        {
            inputType: 'text',
            label: recovery_type === 'phone' ? "Phone Number" : "Email Address",
            placeholder: recovery_type === 'phone' ? "Phone" : 'Email',
            keyName: recovery_type === 'phone' ? "Phone" : "Email",
            validationTypes: ['required'],
            customIcon: 'ios-checkmark-circle'
        },
        {
            inputType: 'text',
            label: 'OTP Code',
            placeholder: 'OTP',
            keyName: 'otp',
            validationTypes: ['required'],
            customIcon: 'ios-checkmark-circle'
        },
        {
            inputType: 'password',
            label: 'New Password',
            placeholder: ' Enter New Password',
            keyName: 'newPassword',
            validationTypes: ['required'],
        },

        {
            inputType: 'password',
            label: 'Confirm Password',
            placeholder: ' Enter Confirm Password',
            keyName: 'confirmPassword',
            validationTypes: ['required'],
        },




    ];
    console.log("recovery_type", recovery_type, props)
    return (

        <Container>
            <Header
                androidStatusBarColor={Theme.primary}
                style={{ backgroundColor: Theme.primary }}>
                <Left style={{ flex: 1.5, paddingLeft: 10 }}>
                    <Icon
                        name="md-arrow-back"
                        fontSize={32}
                        onPress={goBack}
                        style={{ color: Theme.white }}></Icon>
                </Left>
                <Body style={{ flex: 10 }}>
                    <AppText bold fontSize={40} inverted>
                        Forgot Password
          </AppText>
                </Body>
            </Header>
            <Content>
                <AppSpacer size={40} />
                <AppCenter><AppText bold fontSize={35} inverted>Forgot Password</AppText>
                    <AppPadding allaxis size={60}><AppText bold fontSize={28} inverted style={{ textAlign: "center" }}>
                        Select which contact detail should we use to reset Your password.</AppText></AppPadding>
                    <Row>
                        <AppSpacer horizontal size={getPerfectSize(90)} />
                        <CheckBox on={recovery_type === "phone" ? true : false} onChange={(() => toggleOption('phone'))} />
                        <AppClick onPress={(() => toggleOption('phone'))}><AppText bold fontSize={30} inverted style={{ paddingLeft: getPerfectSize(20) }}>By Phone</AppText></AppClick>
                        <AppSpacer horizontal size={getPerfectSize(90)} />
                        <CheckBox on={recovery_type === "email" ? true : false} onChange={() => toggleOption('email')} />
                        <AppClick onPress={() => toggleOption('email')}><AppText bold fontSize={30} inverted style={{ paddingLeft: getPerfectSize(20) }}>By Email</AppText></AppClick>
                    </Row>
                </AppCenter>
                <AppPadding allaxis size={getPerfectSize(40)} >
                    <AppSpacer size={100} />
                    <AppVisibilityToggle visible={showDetail}>
                        <FormBuilder
                            formData={detailformBuilderData}
                            updateForm={updateForm}
                            form={form}
                        />
                    </AppVisibilityToggle>
                    <AppVisibilityToggle visible={!showDetail}>
                        <FormBuilder
                            formData={formBuilderData}
                            updateForm={updateForm}
                            form={form}
                        />
                    </AppVisibilityToggle>
                </AppPadding>
                <AppPadding horizontal size={140}>
                    <RoundedButton title={showDetail ? "SUBMIT" : 'Send OTP'}
                        onPress={showDeatilform}
                    />
                </AppPadding>
            </Content>
        </Container>
    )
}

export default ForgerPasswordScreen



