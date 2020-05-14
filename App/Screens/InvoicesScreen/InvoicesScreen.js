import React,{useState} from 'react';
import {Container, Content, Row, Col, View, Icon} from 'native-base';
import Screenheader from '../../Components/Custom/Screenheader';
import {
  AppCenter,
  AppText,
  AppVisibilityToggle,
  AppSpacer,
  AppClick,
} from '../../Components';
import Theme from '../../Config/Theme';
import Recipients from './Recipients';
import PaymentAccountHistory from '../AccountHistory/PaymentAccountHistory';

function InvoicesScreen({navigation}) {
  const [Invoice, setInvoice] = useState(false)
  const goBack = () => {
    navigation.goBack();
  };
  const changetab = () => {
   
    setInvoice(!Invoice)
  }
  const addRecipients = ()=>{
    navigation.navigate("recipients")
}

  return (
    <Container>
      <Screenheader title={'Invoices'} goBack={goBack} />
      <AppSpacer size={50} />
<Row style={{flex:0.06}} >
    <Col style={{borderColor:Invoice ?Theme.primary : Theme.shadeGrey, borderBottomWidth:3,marginLeft:20}}><AppCenter>
      <AppClick onPress={changetab}><AppText fontSize={30} bold inverted color={Invoice ?  Theme.primary : Theme.white}>
          Invoices
        </AppText></AppClick></AppCenter>
    </Col>
    <Col style={{borderColor:!Invoice ?Theme.primary : Theme.shadeGrey, borderBottomWidth:3,marginRight:20}}><AppCenter>
      <AppClick onPress={changetab}><AppText fontSize={30} bold inverted color={!Invoice ?  Theme.primary : Theme.white}>
          Recipients
        </AppText></AppClick></AppCenter>
    </Col>
</Row>
<AppVisibilityToggle visible={!Invoice}>
<Recipients
addRecipients={addRecipients}
/>
</AppVisibilityToggle>
<AppVisibilityToggle visible={Invoice}>
<PaymentAccountHistory

/>
</AppVisibilityToggle>
      {/* <Content style={{padding: 10}}>
        <AppSpacer size={50} />
        <Row>
            <Col><AppText fontSize={30} bold inverted>
          Recipients
        </AppText>
            </Col>
            <AppClick  onPress={addRecipients} style={{backgroundColor:Theme.primary,
                paddingHorizontal: 4,paddingVertical: 2,}}>
                <AppText fontSize={25} bold inverted>
                    Add
                </AppText>
            </AppClick>
        </Row>
        

        <AppSpacer size={10} />
        <View
          style={{
            width: '99%',
            height: 1,
            backgroundColor: Theme.shadeGrey,
          }}></View>
        <AppSpacer size={15} />

        <Row style={{height: 40, backgroundColor: Theme.primary}}>
          <View style={{width: 0.7, backgroundColor: Theme.shadeGrey}}></View>
          <Col style={{flex: 0.5}}>
            <AppCenter allAxis>
              <AppText fontSize={24} bold inverted>
                {'First Name'}
              </AppText>
            </AppCenter>
          </Col>
          <View style={{width: 0.7, backgroundColor: Theme.shadeGrey}}></View>
          <Col style={{flex: 0.5}}>
            <AppCenter allAxis>
              <AppText fontSize={24} bold inverted>
                {'Last Name'}
              </AppText>
            </AppCenter>
          </Col>
          <View style={{width: 0.7, backgroundColor: Theme.shadeGrey}}></View>
          <Col style={{flex: 1}}>
            <AppCenter allAxis>
              <AppText fontSize={24} bold inverted>
                {'Email'}
              </AppText>
            </AppCenter>
          </Col>
        </Row>
        {renderRowWith3Col('Finance', 'Dev', 'finance.zebra@gmail.com')}
      </Content> */}
    </Container>
  );
}

export default InvoicesScreen;
