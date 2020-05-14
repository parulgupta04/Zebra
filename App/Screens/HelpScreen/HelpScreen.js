import React from 'react';
import {Container, Left, Icon, Body, Header} from 'native-base';

import {AppText} from '../../Components';
import Theme from '../../Config/Theme';
import {WebView} from 'react-native-webview';
import Screenheader from '../../Components/Custom/Screenheader';

function HelpScreen(props) {
  function goBack() {
    props.navigation.goBack();
  }
  return (
    <Container>
      <Screenheader title={'Help'} goBack={goBack} />
      <WebView
        source={{
          uri:
            'http://spicaworks.com.md-94.webhostbox.net/StripePaymentCorePhp/index.php',
          // 'https://support.zebra-connect.com',
        }}
      />
    </Container>
  );
}

export default HelpScreen;
