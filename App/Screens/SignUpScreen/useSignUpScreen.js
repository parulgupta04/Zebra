import {useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import getPerfectSize from '../../Utilities/DimensionHandler';
import useForm from '../../Hooks/Shared/useForm';
import useValidation from '../../Hooks/Shared/useValidation';
import Theme from '../../Config/Theme';
import useImageUpload from '../../Hooks/Shared/useImageUpload';
import ToastHandler from '../../Utilities/ToastHandler';
import {useDispatch} from 'react-redux';
import {updateAppState} from '../../Redux/appAction';
import LifecycleEventsHandler from '../../Utilities/LifecycleEventsHandler';
import DataStore from '../../Utilities/DataStore';
import useHTTP from '../../Hooks/Shared/useHTTP';
import BackButtonHandler from '../../Utilities/BackButtonHandler';

function useSignUpScreen({navigation}) {
  let sliderRefVar;
  const [currentForm, setCurrentForm] = useState(1);
  const pageType = navigation.getParam('page');
  const {form, updateForm, fillForm} = useForm({
    email: 'ABweqwewqeCd@gmail.com',
    password: 12345678,
    first_name: 'Parul',
    middle_name: '',
    family_name: 'gupta',
    gender: 'female',
    place_of_birth: 'abc',
    date_of_birth: 'abc',
    phone_number: '8967543214',
    fixed_phone: '66766787877',
    address: 'abcdabcd',
    city: 'abcd',
    postal_zip_code: '123456',
    province: 'abcd',
    municipality: 'abcd',
    codeice_email: 'test@test.com',
    fiscal_code: '1231231',
    id_type: 'passport',
    id_number: '2342342342434',
    date_of_issue: '22/3/2010',
    expried_date: '22/3/2010',
    place_of_issue: 'abcd',
    user_type: 'personal',
    nation: 'abcd',
  });
  // Image Upload
  const profileImageData = useImageUpload();
  const customerIDImageDataFront = useImageUpload();
  const customerIDImageDataBack = useImageUpload();
  const document1 = useImageUpload();
  const document2 = useImageUpload();
  const [agreed, setAgreed] = useState(false);
  const [signature, setSignature] = useState(null);
  const [deviceDetailArray, setDeviceDetailArray] = useState([]);
  const [sliderRef, setSliderRef] = useState(null);
  const [scrollViewRef, setScrollViewRef] = useState(null);
  const dispatch = useDispatch();
  const {initiateRequest} = useHTTP();

  async function componentDidMount() {
    // DataStore.clear();
    try {
      dispatch(updateAppState('loadingModal', true));
      const registrationDataArrayString = await DataStore.get(
        'Registration_DataArrayString',
      );
      const profileImageDataString = await DataStore.get(
        'Registration_ProfileImage',
      );
      const customerIDImageDataString = await DataStore.get(
        'Registration_CustomerIDImageData',
      );
      const signatureString = await DataStore.get(
        'Registration_SignatureString',
      );
      const deviceDetailArrayString = await DataStore.get(
        'Registration_DeviceDetailArray',
      );
      const documentString = await DataStore.get('Registration_Documents');
      if (registrationDataArrayString) {
        fillForm(JSON.parse(registrationDataArrayString));
      }
      if (profileImageDataString) {
        profileImageData.setImageUrl(JSON.parse(profileImageDataString));
      }
      if (customerIDImageDataString) {
        const imageObj = JSON.parse(customerIDImageDataString);
        customerIDImageDataFront.setImageUrl(imageObj.IDFront);
        customerIDImageDataBack.setImageUrl(imageObj.IDBack);
      }
      if (signatureString) {
        setAgreed(true);
        setSignature(JSON.parse(signatureString));
      }
      if (documentString) {
        const documentObj = JSON.parse(documentString);
        document1.setImageUrl(documentObj.one);
        document2.setImageUrl(documentObj.two);
      }
      if (deviceDetailArrayString) {
        setDeviceDetailArray(JSON.parse(deviceDetailArrayString));
      }
      dispatch(updateAppState('loadingModal', false));
    } catch (error) {
      dispatch(updateAppState('loadingModal', false));
    }
  }

  function componentDidUpdate() {
    if (!sliderRefVar) {
      if (sliderRef) {
        sliderRefVar = sliderRef;
        BackButtonHandler.mount(false, navigation, backHandlerCallback);
      }
    }
  }

  function componentWillUnmount() {
    BackButtonHandler.unmount();
  }

  LifecycleEventsHandler(
    componentDidMount,
    componentDidUpdate,
    componentWillUnmount,
    [sliderRef],
  );

  const subHeadingArrayPersonal = [
    'Registration Form',
    'Customer Photograph',
    'Customer ID Photographs',
    'Customer Signature',
    'Device Details',
    'Upload Data',
  ];
  const subHeadingArrayBusiness = [
    'Registration Form',
    'Customer Photograph',
    'Customer ID Photographs',
    'Customer Signature',
    'Device Details',
    'Upload Data',
  ];

  function apiCall() {
    const requestBody = {
      email: form.email,
      password: form.password,
      business_name: form.businessName,
      first_name: form.firstName,
      middle_name: form.middleName,
      family_name: form.familyName,
      gender: (form.gender || {}).value,
      place_of_birth: form.placeOfBirth,
      date_of_birth: form.dateOfBirth,
      phone_number: form.phoneNumber,
      fixed_phone: form.fixedPhone,
      address: form.address,
      city: form.city,
      postal_zip_code: form.zipCode,
      province: form.province,
      municipality: form.muncipality,
      codeice_email: form.codiceSDI || 'test@test.com',
      fiscal_code: form.fiscalCode,
      id_type: (form.idType || {}).value,
      id_number: form.idNumber,
      date_of_issue: form.dateOfIssue,
      expried_date: form.expDate,
      place_of_issue: form.placeOfIssue,
      picture: profileImageData.imageUrl.uri,
      id_picture_front: customerIDImageDataFront.imageUrl.uri,
      id_picture_back: customerIDImageDataBack.imageUrl.uri,
      signature_picture: signature,
      document_picture_first: document1.imageUrl.uri,
      document_picture_second: document2.imageUrl.uri,
      device_name: deviceDetailArray,
      user_type: pageType === 'personal' ? 1 : 2,
      nation: form.nation,
      vat_id: form.vatID,
    };

    function postSuccessFunction(responseData) {
      console.log(responseData, 'responseData');
      dispatch(updateAppState('userData', responseData));
    }

    initiateRequest(
      '/signup',
      'POST',
      requestBody,
      true,
      postSuccessFunction,
      1,
    );
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

  function removeDocumentOne(index) {
    document1.setImageUrl();
  }

  function removeDocumentTwo(index) {
    document2.setImageUrl();
  }

  function setAgreedFunction() {
    setAgreed(true);
  }

  function updateSignature(img) {
    setSignature(img);
  }

  function resetSignature() {
    setSignature(null);
  }

  const formBuilderDataPersonal = [
    'Document ID',
    [
      {
        inputType: 'picker',
        label: 'ID Type',
        placeholder: 'Select ID Type',
        keyName: 'idType',
        lightLabel: true,
        options: [
          {value: 'Driving License', display: 'Driving License'},
          {value: 'Passport', display: 'Passport'},
          {value: 'Identity Card', display: 'Identity Card'},
        ],
        validationTypes: ['picker'],
      },
      {
        inputType: 'text',
        label: 'ID Number',
        placeholder: 'Enter ID Number',
        keyName: 'idNumber',
        lightLabel: true,
        validationTypes: ['required'],
      },
    ],
    [
      {
        inputType: 'date',
        label: 'Date of Issue',
        placeholder: 'Issue Date',
        keyName: 'dateOfIssue',
        lightLabel: true,
        validationTypes: ['date'],
      },
      {
        inputType: 'date',
        label: 'Expired Date',
        placeholder: 'Expired Date',
        keyName: 'expDate',
        lightLabel: true,
        validationTypes: ['date'],
      },
    ],
    {
      inputType: 'text',
      label: 'Place of Issue',
      placeholder: 'Place of Issue',
      keyName: 'placeOfIssue',
      lightLabel: true,
      validationTypes: ['required'],
    },
    'Personal Information',
    [
      {
        inputType: 'text',
        label: 'First Name',
        placeholder: 'Enter First Name',
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
          {value: 'Male', display: 'Male'},
          {value: 'Female', display: 'Female'},
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
    {
      inputType: 'text',
      label: 'Codice SDI / Email PEC',
      placeholder: 'Enter Codice SDI / Email PEC',
      keyName: 'codiceSDI',
      lightLabel: true,
      note: 'For Italian Customers only to issue electronic invoices.',
      validationTypes: [],
    },
    'Password',
    [
      {
        inputType: 'password',
        label: 'Your Password',
        placeholder: 'Enter your Password',
        keyName: 'password',
        lightLabel: true,
        hideIcon: true,
        validationTypes: ['required', 'password'],
      },
      {
        inputType: 'password',
        label: 'Confirm Password',
        placeholder: 'Confirm Password',
        keyName: 'cnfPassword',
        lightLabel: true,
        hideIcon: true,
        validationTypes: ['required'],
      },
    ],
  ];
  const formBuilderDataBusiness = [
    'Authorized Person Data',
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
    {
      inputType: 'text',
      label: 'Codice SDI / Email PEC',
      placeholder: 'Enter Codice SDI / Email PEC',
      keyName: 'codiceSDI',
      lightLabel: true,
      note: 'For Italian Customers only to issue electronic invoices.',
      validationTypes: [],
    },
    'Password',
    [
      {
        inputType: 'password',
        label: 'Your Password',
        placeholder: 'Enter your Password',
        keyName: 'password',
        lightLabel: true,
        hideIcon: true,
        validationTypes: ['required', 'password'],
      },
      {
        inputType: 'password',
        label: 'Confirm Password',
        placeholder: 'Confirm Password',
        keyName: 'cnfPassword',
        lightLabel: true,
        hideIcon: true,
        validationTypes: ['required'],
      },
    ],
  ];
  const listData = [
    'Authorized Person Data',
    {name: 'First Name', value: form.firstName},
    {name: 'Middle Name', value: form.middleName},
    {name: 'Family Name', value: form.familyName},
    'Device Details',
    {name: 'Device', values: [...deviceDetailArray]},
    pageType === 'business' ? 'Company Data' : 'Personal Data',
    {name: 'Address', value: form.address},
    {name: 'Postal Zip Code', value: form.zipCode},
    {name: 'Province', value: form.province},
    {name: 'Municipality', value: form.muncipality},
    {name: 'City', value: form.city},
    {name: 'Phone Number', value: form.phoneNumber},
    {name: 'Fixed Phone', value: form.fixedPhone},
    {name: 'Fiscal Code', value: form.fiscalCode},
  ];

  function setProgress(index) {
    setCurrentForm(index + 1);
    // DataStore.store('Last_Form', index);
    if (index === 3) {
      setTimeout(() => {
        if (scrollViewRef) scrollViewRef.scrollToEnd({animated: true});
      }, 2000);
    }
  }

  function saveAndProceed() {
    DataStore.store('Registration_Page_Type', pageType);
    switch (currentForm) {
      case 1:
        const arr =
          pageType === 'business'
            ? formBuilderDataBusiness
            : formBuilderDataPersonal;
        const validationStatus = useValidation(arr, form);
        if (form.password !== form.cnfPassword) {
          return ToastHandler.errorToast('Passwords do not match');
        }
        if (validationStatus) {
          sliderRef.scrollBy(1);
          DataStore.store('Registration_DataArrayString', JSON.stringify(form));
        }
        break;
      case 2:
        if (profileImageData.imageUrl) {
          sliderRef.scrollBy(1);
          DataStore.store(
            'Registration_ProfileImage',
            JSON.stringify(profileImageData.imageUrl),
          );
        } else {
          ToastHandler.errorToast('Profile Photo is required.');
        }
        break;
      case 3:
        if (
          customerIDImageDataFront.imageUrl &&
          customerIDImageDataBack.imageUrl
        ) {
          sliderRef.scrollBy(1);
          DataStore.store(
            'Registration_CustomerIDImageData',
            JSON.stringify({
              IDFront: customerIDImageDataFront.imageUrl,
              IDBack: customerIDImageDataBack.imageUrl,
            }),
          );
        } else {
          ToastHandler.errorToast('Customer ID is required.');
        }
        break;
      case 4:
        if (agreed && signature) {
          sliderRef.scrollBy(1);
          console.log('object', signature);
          // DataStore.store(
          //   'Registration_SignatureString',
          //   JSON.stringify(signature),
          // );
        } else {
          ToastHandler.errorToast('Signature is required.');
        }
        break;
      case 5:
        if (deviceDetailArray.length !== 0) {
          sliderRef.scrollBy(1);
          DataStore.store(
            'Registration_DeviceDetailArray',
            JSON.stringify(deviceDetailArray),
          );
        } else {
          ToastHandler.errorToast('Device detail is required.');
        }
        break;
      case 6:
        if (document1.imageUrl && document2.imageUrl) {
          DataStore.store(
            'Registration_Documents',
            JSON.stringify({one: document1.imageUrl, two: document2.imageUrl}),
          );
          apiCall();
        } else {
          ToastHandler.errorToast('Documents is required.');
        }
        break;
    }
  }

  function back() {
    switch (currentForm) {
      case 1:
        navigation.goBack();
        break;
      default:
        sliderRef.scrollBy(-1);
    }
  }

  async function backHandlerCallback() {
    const currentFormString = await DataStore.get('Last_Form');
    const currentFormVar = parseInt(currentFormString || 0) + 1;
    switch (currentFormVar) {
      case 1:
        navigation.goBack();
        break;
      default:
        sliderRef.scrollBy(-1);
    }
  }

  const styles = StyleSheet.create({
    headerExpansionStyle: {
      paddingHorizontal: getPerfectSize(40),
      height: getPerfectSize(140),
    },
    headerStyles: {
      paddingLeft: getPerfectSize(40),
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    rowPadding: {
      paddingHorizontal: getPerfectSize(20),
    },
    rowPaddingButton: {
      paddingHorizontal: getPerfectSize(100),
    },
    swiperContentStyles: {
      width: Dimensions.get('screen').width,
      paddingHorizontal: getPerfectSize(40),
    },
    userImageStyles: {
      height: getPerfectSize(585),
      width: getPerfectSize(585),
    },
    userImagePreviewStyles: {
      height: getPerfectSize(130),
      width: getPerfectSize(130),
      borderRadius: getPerfectSize(130 / 2),
    },
    userImageIDPreviewStyles: {
      height: getPerfectSize(110),
      width: getPerfectSize(180),
    },
    clickStyles: {
      height: getPerfectSize(125),
      width: getPerfectSize(125),
      borderRadius: getPerfectSize(125 / 2),
    },
    cameraIconStyle: {
      color: Theme.light,
      height: getPerfectSize(70),
      width: getPerfectSize(70),
    },
    cameraIDIconStyle: {
      // color: Theme.light,
      // fontSize: getPerfectSize(80),
    },
    centeredStyles: {justifyContent: 'center', alignItems: 'center'},
    overlapStyles: {marginTop: -getPerfectSize(125 / 2)},
    idPickerViewStyles: {
      height: getPerfectSize(280),
      backgroundColor: Theme.shadeGrey,
      paddingHorizontal: getPerfectSize(50),
    },
    readMeStyle: {
      height: getPerfectSize(560),
      borderColor: Theme.grey,
      borderWidth: getPerfectSize(2),
      borderRadius: getPerfectSize(5),
      padding: getPerfectSize(20),
    },
    agreedButtonStyles: {
      width: getPerfectSize(230),
      height: getPerfectSize(65),
      alignItems: 'center',
    },
    signatureStyles: {
      minHeight: getPerfectSize(300),
      backgroundColor: Theme.white,
    },
    signatureImageStyles: {
      height: getPerfectSize(300),
      width: Dimensions.get('screen').width - getPerfectSize(80),
      backgroundColor: Theme.white,
    },
    cardHeaderStyles: {
      backgroundColor: Theme.white,
      height: getPerfectSize(70),
      justifyContent: 'center',
      paddingHorizontal: getPerfectSize(30),
      justifyContent: 'flex-start',
    },
    cardContentStyles: {
      backgroundColor: Theme.shade,
      height: getPerfectSize(100),
      justifyContent: 'center',
      paddingHorizontal: getPerfectSize(30),
      justifyContent: 'flex-start',
      width: Dimensions.get('screen').width - getPerfectSize(80),
      position: 'relative',
    },
  });

  return {
    styles,
    currentForm,
    setProgress,
    formBuilderData:
      pageType === 'business'
        ? formBuilderDataBusiness
        : formBuilderDataPersonal,
    updateForm,
    pageType,
    saveAndProceed,
    profileImageData,
    customerIDImageDataFront,
    customerIDImageDataBack,
    updateSignature,
    signature,
    resetSignature,
    agreed,
    setAgreedFunction,
    addDevice,
    removeDevice,
    deviceDetailArray,
    listData,
    document1,
    document2,
    setSliderRef,
    back,
    subHeadingArray:
      pageType === 'business'
        ? subHeadingArrayBusiness
        : subHeadingArrayPersonal,
    removeDocumentOne,
    removeDocumentTwo,
    form,
    setScrollViewRef,
  };
}

export default useSignUpScreen;
