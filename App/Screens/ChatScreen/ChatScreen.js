import React from 'react';
import { WebView } from 'react-native-webview';
import { SafeAreaView, Text, View } from 'react-native';
import Screenheader from '../../Components/Custom/Screenheader';
import { Container, Content } from 'native-base';

function ChatScreen({ navigation }) {
    const goBack = () => {
        navigation.goBack();
    };
    return (
        <View style={{ flex: 1 }}>
            <Screenheader
                title={'Chat'}
                goBack={goBack}
            />
            <SafeAreaView style={{ flex: 1 }}>

                <WebView
                    style={{ flex: 1, }}
                    originWhitelist={['*']}
                    source={{
                        html: `<script
           id="ze-snippet"
           src="https://static.zdassets.com/ekr/snippet.js?key=cf13f8f8-44bf-4762-899b-95543682e3e0"
        ></script>`
                    }}
                    style={{ marginTop: 20 }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                /></SafeAreaView></View>

    );
}

export default ChatScreen;
