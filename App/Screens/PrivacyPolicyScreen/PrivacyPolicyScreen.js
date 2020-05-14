import React from 'react'
import { Container, Left, Icon, Body, Header } from 'native-base'

import { AppText } from '../../Components'
import Theme from '../../Config/Theme'
import { WebView } from 'react-native-webview';
import Screenheader from '../../Components/Custom/Screenheader';

function PrivacyPolicyScreen(props) {
    function goBack() {
        props.navigation.goBack()
    }
    return (
        <Container>
            <Screenheader
                title={'Privacy'}
                goBack={goBack}
            />
            <WebView source={{ uri: 'https://support@zebra-connect.com/' }} />
        </Container>
    )
}

export default PrivacyPolicyScreen
