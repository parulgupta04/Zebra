import React, { Fragment, useState } from 'react'
import useForm from '../../Hooks/Shared/useForm';
import { StyleSheet } from 'react-native';
import getPerfectSize  from '../../Utilities/DimensionHandler';
import { Content, CardItem, Col, Row, Icon } from 'native-base';
import { AppSpacer, RoundedButton, AppText, AppVisibilityToggle, TextInputItem } from '../../Components';
import Theme from '../../Config/Theme';
import { View, } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateBulkAppState, updateAppState } from '../../Redux/appAction';
import ToastHandler from '../../Utilities/ToastHandler';


function useEditProfile({ navigation }) {
    console.log("navigation", navigation)
    const [deviceDetailArray, setDeviceDetailArray] = useState([]);
    const dispatch = useDispatch();
    const { form, updateForm, fillForm } = useForm({
        // email: 'ABweqwewqeCd@gmail.com',
        // password: 12345678,
        first_name: 'Parul',
        middle_name: '',
        family_name: 'gupta',
        // gender: 'female',
        // place_of_birth: 'abc',
        // date_of_birth: 'abc',
        // phone_number: '8967543214',
        // fixed_phone: '66766787877',
        // address: 'abcdabcd',
        // city: 'abcd',
        // postal_zip_code: '123456',
        // province: 'abcd',
        // municipality: 'abcd',
        // codeice_email: 'test@test.com',
        // fiscal_code: '1231231',
        // id_type: 'passport',
        // id_number: '2342342342434',
        // date_of_issue: '22/3/2010',
        // expried_date: '22/3/2010',
        // place_of_issue: 'abcd',
        // user_type: 'personal',
        // nation: 'abcd',

    });
    const formBuilderDataPersonal = [
        'Personal Information',
        [
            {
                inputType: 'text',
                label: 'First Name',
                placeholder: 'Enter First Name',
                value: "Information",
                keyName: 'firstName',
                lightLabel: true,
                validationTypes: ['required'],
            },
            {
                inputType: 'text',
                label: 'Middle Name',
                placeholder: 'Enter Middle Name',
                keyName: 'middleName',
                lightLabel: true,
                validationTypes: ['required'],
            },
        ],
        [
            {
                inputType: 'text',
                label: 'Family Name',
                placeholder: 'Enter Family Name',
                keyName: 'familyName',
                lightLabel: true,
                validationTypes: ['required'],
            },
            {
                inputType: 'picker',
                label: 'Gender',
                placeholder: 'Select Gender',
                keyName: 'gender',
                lightLabel: true,
                options: [
                    { value: 'Male', display: 'Male' },
                    { value: 'Female', display: 'Female' },
                ],
                validationTypes: ['picker'],
            },
        ],
        [
            {
                inputType: 'text',
                label: 'Place of Birth',
                placeholder: 'Place of Birth',
                keyName: 'placeOfBirth',
                lightLabel: true,
                validationTypes: ['required'],
            },
            {
                inputType: 'date',
                label: 'Date of Birth',
                placeholder: 'Date of Birth',
                keyName: 'dateOfBirth',
                lightLabel: true,
                validationTypes: ['date'],
            },
        ],
        [
            {
                inputType: 'text',
                label: 'Fiscal Code',
                placeholder: 'Enter Fiscal Code',
                keyName: 'fiscalCode',
                lightLabel: true,
                validationTypes: ['required'],
            },
            {
                inputType: 'text',
                label: 'Nation',
                placeholder: 'Enter Nation',
                keyName: 'nation',
                lightLabel: true,
                validationTypes: ['required'],
            },
        ],
        {
            inputType: 'email',
            label: 'Email',
            placeholder: 'Enter Email',
            keyName: 'email',
            lightLabel: true,
            validationTypes: ['required', 'email'],
        },
        [
            {
                inputType: 'phone',
                label: 'Phone Number',
                placeholder: 'Enter Phone Number',
                keyName: 'phoneNumber',
                lightLabel: true,
                validationTypes: ['required'],
            },
            {
                inputType: 'phone',
                label: 'Fixed Phone',
                placeholder: 'Enter Fixed Phone',
                keyName: 'fixedPhone',
                lightLabel: true,
                validationTypes: ['required'],
            },
        ],
        {
            inputType: 'text',
            label: 'Address',
            placeholder: 'Enter Address',
            keyName: 'address',
            lightLabel: true,
            validationTypes: ['required'],
        },
        [
            {
                inputType: 'text',
                label: 'City',
                placeholder: 'Enter City',
                keyName: 'city',
                lightLabel: true,
                validationTypes: ['required'],
            },
            {
                inputType: 'text',
                label: 'Postal Zip Code',
                placeholder: 'Enter Zip Code',
                keyName: 'zipCode',
                lightLabel: true,
                validationTypes: ['required'],
            },
        ],
        [
            {
                inputType: 'text',
                label: 'Province',
                placeholder: 'Enter Province',
                keyName: 'province',
                lightLabel: true,
                validationTypes: ['required'],
            },
            {
                inputType: 'text',
                label: 'Muncipality',
                placeholder: 'Enter Municipality',
                keyName: 'muncipality',
                lightLabel: true,
                validationTypes: ['required'],
            },
        ],
    ];
    const formBuilderDataBusiness = [
        'Personal Information',
        [
            {
                inputType: 'text',
                label: 'First Name',
                placeholder: 'Enter First Name',
                keyName: 'firstName',
                lightLabel: true,
                hideIcon: true,
                validationTypes: ['required'],
            },
            {
                inputType: 'text',
                label: 'Middle Name',
                placeholder: 'Enter Middle Name',
                keyName: 'middleName',
                lightLabel: true,
                hideIcon: true,
                validationTypes: ['required'],
            },
        ],
        {
            inputType: 'text',
            label: 'Family Name',
            placeholder: 'Enter Family Name',
            keyName: 'familyName',
            lightLabel: true,
            hideIcon: true,
            validationTypes: ['required'],
        },
        'Company Data',
        {
            inputType: 'text',
            label: 'Business Name',
            placeholder: 'Enter Business Name',
            keyName: 'businessName',
            lightLabel: true,
            hideIcon: true,
            validationTypes: ['required'],
        },
        [
            {
                inputType: 'email',
                label: 'Email',
                placeholder: 'Enter Email',
                keyName: 'email',
                lightLabel: true,
                hideIcon: true,
                validationTypes: ['required', 'email'],
            },
            {
                inputType: 'text',
                label: 'VAT ID',
                placeholder: 'Enter VAT ID',
                keyName: 'vatID',
                lightLabel: true,
                hideIcon: true,
                validationTypes: ['required'],
            },
        ],
        [
            {
                inputType: 'text',
                label: 'Fiscal Code',
                placeholder: 'Enter Fiscal Code',
                keyName: 'fiscalCode',
                lightLabel: true,
                validationTypes: ['required'],
            },
            {
                inputType: 'text',
                label: 'Nation',
                placeholder: 'Enter Nation',
                keyName: 'nation',
                lightLabel: true,
                validationTypes: ['required'],
            },
        ],
        [
            {
                inputType: 'phone',
                label: 'Phone Number',
                placeholder: 'Enter Phone Number',
                keyName: 'phoneNumber',
                lightLabel: true,
                validationTypes: ['required'],
            },
            {
                inputType: 'phone',
                label: 'Fixed Phone',
                placeholder: 'Enter Fixed Phone',
                keyName: 'fixedPhone',
                lightLabel: true,
                validationTypes: ['required'],
            },
        ],
        {
            inputType: 'text',
            label: 'Address',
            placeholder: 'Enter Address',
            keyName: 'address',
            lightLabel: true,
            validationTypes: ['required'],
        },
        [
            {
                inputType: 'text',
                label: 'City',
                placeholder: 'Enter City',
                keyName: 'city',
                lightLabel: true,
                validationTypes: ['required'],
            },
            {
                inputType: 'text',
                label: 'Postal Zip Code',
                placeholder: 'Enter Zip Code',
                keyName: 'zipCode',
                lightLabel: true,
                validationTypes: ['required'],
            },
        ],
        [
            {
                inputType: 'text',
                label: 'Province',
                placeholder: 'Enter Province',
                keyName: 'province',
                lightLabel: true,
                validationTypes: ['required'],
            },
            {
                inputType: 'text',
                label: 'Muncipality',
                placeholder: 'Enter Municipality',
                keyName: 'muncipality',
                lightLabel: true,
                validationTypes: ['required'],
            },
        ],


    ];
    const styles = StyleSheet.create({

    })
    function showPopup() {
        dispatch(
            updateBulkAppState({
                popUpModal: true,
                popUpTitle: 'Add Device Detail',
                popUpContent: addDevicePopupContent,
            }),
        );
    }
    function goBack() {

        navigation.goBack()
    }
    const gotoPendingRequestScreen = ()=>{
        navigation.navigate("pendingRequest")
    }
    function addDevice(device) {

        if (!(device || '').trim()) {
            return ToastHandler.errorToast('Device ID is required.');
        }
        dispatch(updateAppState('popUpModal', false));
        const deviceDetailArrayTemp = [...deviceDetailArray];
        deviceDetailArrayTemp.push(device);
        setDeviceDetailArray(deviceDetailArrayTemp);
    }
    function removeDevice(index) {
        const deviceDetailArrayTemp = [...deviceDetailArray];
        deviceDetailArrayTemp.splice(index, 1);
        setDeviceDetailArray([]);
        setDeviceDetailArray(deviceDetailArrayTemp);
    }
    function addDevicePopupContent(popUpState, updatePopUpStateByKey) {
        function updateInput(text) {
            updatePopUpStateByKey('device', text);
        }

        function buttonClick() {
            addDevice(popUpState.device);
            updateInput('');
        }

        return (
            <Fragment>
                <AppSpacer size={50} />
                <AppText color={Theme.grey} fontSize={26}>
                    Please enter the details of Device
            </AppText>
                <AppSpacer size={60} />
                <TextInputItem
                    label={'Your Device Detail'}
                    placeholder={'Enter Device Detail'}
                    dark
                    value={popUpState.device}
                    onChangeText={updateInput}
                />
                <AppSpacer size={60} />
                <Row>
                    <Col size={25} />
                    <Col size={50}>
                        <RoundedButton
                            title={'SUBMIT'}
                            onPress={buttonClick}></RoundedButton>
                    </Col>
                    <Col size={25} />
                </Row>
                <AppSpacer size={40} backgroundColor={Theme.white} />
            </Fragment>
        );
    }
    return {
        form, updateForm, fillForm, formBuilderDataPersonal, formBuilderDataBusiness,
        styles, showPopup, deviceDetailArray, removeDevice, goBack,gotoPendingRequestScreen
    }
}

export default useEditProfile
