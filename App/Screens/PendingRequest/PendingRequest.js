import React, {useState} from 'react';
import {View, Text, Container, Content, Icon, Row, Col} from 'native-base';
import Screenheader from '../../Components/Custom/Screenheader';
import {
  AppVisibilityToggle,
  AppText,
  AppCenter,
  AppSpacer,
} from '../../Components';
import Theme from '../../Config/Theme';
import getPerfectSize  from '../../Utilities/DimensionHandler';

function PendingRequest({navigation}) {
  const [pendingRequest, setpendingRequest] = useState(true);
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <Container>
      <Screenheader title={'Pending Request'} goBack={goBack} />
      <Content>
        <AppVisibilityToggle visible={pendingRequest}>
          <AppSpacer size={30} />
          <Row style={{padding: 10}}>
            <AppText fontSize={30} bold inverted>
              View Pending Request List
            </AppText>
          </Row>
          <View
            style={{
              borderBottomWidth: 0.45,
              borderColor: Theme.white,
              width: '95%',
              alignSelf: 'center',
            }}></View>
          <AppSpacer size={30} />

          <Row
            style={{
              flex: 0,
              backgroundColor: Theme.primary,
              height: 45,
              width: '95%',
              padding: 10,
              alignSelf: 'center',
            }}>
            <Col>
              <AppText fontSize={25} bold inverted >
                Field Name
              </AppText>
            </Col>
<Col><AppText fontSize={25} bold inverted >
              Change Value
            </AppText>
</Col>
            
          </Row>
          <AppCenter >
              <Row style={{backgroundColor: Theme.shadeGrey, height:35,
                  width: '95%',paddingTop:8,paddingBottom:10}}> 
              
              <Col size={45} style={{paddingHorizontal: getPerfectSize(20)}}>
                <AppText inverted fontSize={25}>
                  Business Detail
                </AppText>
              </Col>
              <AppText inverted bold fontSize={25}>
                -
              </AppText>
              <Col size={55} style={{paddingHorizontal: getPerfectSize(20)}}>
                <AppText color={Theme.grey} fontSize={25}>
                  value
                </AppText>
              </Col>
            </Row>
            <View
            style={{
              borderBottomWidth: 0.45,
              borderColor: Theme.white,
              width: '95%',
              alignSelf: 'center',
              
            }}></View>
            <View style={{backgroundColor: Theme.shadeGrey, height:100,  width: '95%',
            paddingTop:30, }}>
            <Col style={{ alignItems: "flex-end", flex:0,paddingRight:10}}>
                <AppText color={Theme.white} fontSize={25}>
                  Status : Waiting
                </AppText></Col>
                <Col style={{ alignItems: "flex-end",paddingRight:10,paddingTop:10}}>
                <AppText color={Theme.white} fontSize={25}>
                  Modification Date : 20-11-19
                </AppText></Col>
            </View>
           
            </AppCenter>
           
        </AppVisibilityToggle>
        <AppVisibilityToggle visible={!pendingRequest}>
          <AppSpacer size={100} />
          <AppCenter>
            <View
              style={{
                height: 300,
                width: '92%',
                backgroundColor: Theme.shadeGrey,
                borderRadius: 10,
              }}>
              <AppCenter allAxis>
                <Icon
                  name={'search'}
                  fontSize={40}
                  style={{color: Theme.white, paddingLeft: 5}}></Icon>
                <AppText fontSize={30} bold inverted>
                  Pending Request Not Found !!
                </AppText>
              </AppCenter>
            </View>
          </AppCenter>
        </AppVisibilityToggle>
      </Content>
    </Container>
  );
}

export default PendingRequest;
