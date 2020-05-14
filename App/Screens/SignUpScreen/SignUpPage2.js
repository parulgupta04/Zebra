import React, { Fragment } from 'react'
import { Content, Row, Col } from 'native-base'
import { View, Image, } from 'react-native';
import images from '../../Assets';
import Theme from '../../Config/Theme';
import { AppSpacer, AppCenter, AppVisibilityToggle, CloseIcon, AnimatedImage, AppClick, AppCircle, AppText, RoundedButton } from '../../Components'

function SignUpPage2(props) {
    let { styles, formBuilderData, updateForm, form, profileImageData, saveAndProceed, saveAndProceedView } = props
    function deleteImage() {
        profileImageData.setImageUrl(undefined);
    }

    return (
        <Content contentContainerStyle={styles.swiperContentStyles}>
            <AppSpacer size={20} />
            <AppCenter>
                <View style={styles.userImageStyles}>
                    <AppVisibilityToggle visible={profileImageData.imageUrl}>
                        <CloseIcon onPress={deleteImage} />
                    </AppVisibilityToggle>
                    <AnimatedImage
                        source={profileImageData.imageUrl || images.userPhoto}
                        style={styles.userImageStyles}
                        resizeMode={'cover'}
                    />
                </View>
            </AppCenter>
            <View style={styles.overlapStyles}>
                <AppCenter>
                    <AppClick
                        style={styles.clickStyles}
                        onPress={profileImageData.imageUpload}>
                        <AppCircle
                            size={125}
                            backgroundColor={Theme.shade}
                            style={styles.centeredStyles}>
                            <AppCenter allAxis>
                                <Image
                                    source={images.camera}
                                    style={{ flex: 1 }}
                                    resizeMode={'contain'}
                                />
                            </AppCenter>
                        </AppCircle>
                    </AppClick>
                </AppCenter>
                <AppSpacer size={20} />
                <AppCenter>
                    <AppText inverted bold fontSize={26}>
                        Upload Photo
            </AppText>
                </AppCenter>
            </View>
            <AppSpacer size={110} />
            {saveAndProceedView('BACK')}
        </Content>
    )
}

export default SignUpPage2
