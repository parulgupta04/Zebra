import React from 'react';
import { Image } from 'react-native';
import { View, Text, Content, Row, Col, CardItem, Icon, Container } from 'native-base';
import {
    FormBuilder,
    AppCenter,
    AppText,
    RoundedButton,
    AppVisibilityToggle,
    AppClick,
} from '../../Components';
import useEditProfile from './useEditProfile';
import Theme from '../../Config/Theme';
import images from '../../Assets';
import { useSelector } from 'react-redux';
import getPerfectSize  from '../../Utilities/DimensionHandler';
import Screenheader from '../../Components/Custom/Screenheader';

function EditProfileScreen(props) {
    let {
        updateForm,
        formBuilderDataPersonal,
        formBuilderDataBusiness,
        styles,
        form,
        showPopup,
        deviceDetailArray,
        removeDevice, goBack,
         fillForm,
         gotoPendingRequestScreen
    } = useEditProfile(props);

    const appState = useSelector(state => state);
    const { userType, userData } = appState;
    console.log("userData", userData)

    return (
        <Container >
            <Screenheader
                title={userType === 'personal' ? 'Personal Edit Profile' : 'Business Edit Profile'}
                goBack={goBack}
            />

            <Content style={{ backgroundColor: Theme.black, padding: 16 }}>
                {/* <AppClick><Row style={{justifyContent : "flex-end"}}>
                <AppText bold color={Theme.primary} fontSize={25}>View Pending Request</AppText> 
                </Row></AppClick> */}
                <AppCenter>
                <Row>
                    <Image
                        source={{ uri: userData.user_details.picture }}
                        style={{
                            height: 120,
                            width: 120,
                            borderRadius: 60,
                            marginTop: 30,
                            marginBottom: 40,
                        }}
                        resizeMode={'cover'}
                    />
                    <Icon
                        name="md-create"
                        fontSize={52}
                        style={{
                            color: Theme.white,
                            transform: [{ rotate: '270deg' }],
                            left: 60,
                            top: 30,
                        }}
                    />
                </Row>
            </AppCenter>
            <AppClick onPress={gotoPendingRequestScreen}><Row style={{justifyContent : "flex-end", paddingTop:10,}}>
                <AppText bold color={Theme.primary} fontSize={25}>View Pending Request</AppText> 
                </Row></AppClick>
                <FormBuilder
                    formData={
                        userType === 'personal'
                            ? formBuilderDataPersonal
                            : formBuilderDataBusiness
                    }
                    updateForm={updateForm}
                    form={form}
                />

                <Row>
                    <Col style={{ marginTop: 20 }}>
                        <AppText bold color={Theme.white} fontSize={30}>
                            Device Detail
          </AppText>
                    </Col>
                    <Col>
                        <RoundedButton
                            smallTitle
                            title={'Add '}
                            onPress={showPopup}
                            showLeftIcon={true}
                            leftIcon={'add'}
                            leftIconStyle={{
                                color: Theme.white,
                                paddingLeft: 5,
                                fontSize: getPerfectSize(50),
                            }}
                            style={{ width: 140, height: 52, alignSelf: 'flex-end' }}
                        />
                    </Col>
                </Row>
                <View
                    style={{
                        borderBottomColor: Theme.white,
                        borderBottomWidth: 1,
                        marginTop: 5,
                        marginBottom: 10,
                    }}></View>
                <AppVisibilityToggle visible={deviceDetailArray.length > 0}>
                    {deviceDetailArray.map((d, i) => (
                        <CardItem
                            style={{
                                backgroundColor: Theme.black,
                                borderWidth: 1,
                                borderColor: Theme.shadeGrey,
                                marginBottom: 100,
                            }}
                            key={i}>
                            <Col size={90}>
                                <Row style={{ alignItems: 'center' }}>
                                    <AppText color={Theme.white} fontSize={30}>
                                        {i + 1 + '.'}
                                    </AppText>
                                    <AppText inverted fontSize={30} style={{ paddingLeft: 15 }}>
                                        {d}
                                    </AppText>
                                </Row>
                            </Col>
                            <Col size={10}>
                                <View
                                    style={{
                                        backgroundColor: Theme.danger,
                                        borderRadius: 16,
                                        height: 32,
                                        width: 32,
                                        position: 'relative',
                                    }}>
                                    <Icon
                                        name={'close'}
                                        onPress={() => {
                                            removeDevice(i);
                                        }}
                                        style={{
                                            color: Theme.white,
                                            textAlign: 'center',
                                            marginTop: 2,
                                        }}></Icon>
                                </View>
                            </Col>
                        </CardItem>
                    ))}
                </AppVisibilityToggle>
                <AppCenter>
                    <AppText style={{ color: Theme.white }} fontSize={30} bold>
                        Submit to get Approval from Admin
        </AppText>
                </AppCenter>
                <RoundedButton
                    smallTitle
                    title={'SEND TO ADMIN'}
                    style={{ width: 200, height: 52, alignSelf: 'center', marginTop: 38 }}
                />
                <View style={{ height: 50 }}></View></Content>
        </Container>
    );
}

export default EditProfileScreen;
