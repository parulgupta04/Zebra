import React from 'react';
import {Container, Content, Header, Button, Text, View} from 'native-base';
import Theme from '../../Config/Theme';
import DataStore from '../../Utilities/DataStore';
import NavigationService from '../../Utilities/NavigationService';
import useDemoScreen from './useDemoScreen';

function DemoScreen(props) {
  const {} = useDemoScreen(props);
  return (
    <Container>
      <Header
        androidStatusBarColor={Theme.black}
        iosBarStyle={'light-content'}
        transparent
      />
      <Content>
        <View style={{paddingHorizontal: 100}}>
          <Button
            rounded
            textStyle={{justifyContent: 'center'}}
            onPress={async () => {
              DataStore.clear();
              NavigationService.navigate('Loading');
            }}>
            <Text>Logout</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}

export default DemoScreen;
