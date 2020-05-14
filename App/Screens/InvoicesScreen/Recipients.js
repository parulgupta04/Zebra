import React from 'react';
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

function Recipients(props) {
const {addRecipients} = props;
    const renderRowWith3Col = (value1, value2, value3) => {
      return (
        <Row
          style={{
            height: 40,
            borderWidth: 1,
            borderColor: Theme.shadeGrey,
            backgroundColor: Theme.shade,
          }}>
          <Col style={{flex: 0.5}}>
            <AppCenter allAxis>
              <AppText fontSize={24} inverted>
                {value1}
              </AppText>
            </AppCenter>
          </Col>
          <View style={{width: 0.7, backgroundColor: Theme.shadeGrey}}></View>
          <Col style={{flex: 0.5}}>
            <AppCenter allAxis>
              <AppText fontSize={24} bold inverted>
                {value2}
              </AppText>
            </AppCenter>
          </Col>
          <View style={{width: 0.7, backgroundColor: Theme.shadeGrey}}></View>
          <Col style={{flex: 1}}>
            <AppCenter allAxis>
              <AppText fontSize={24} bold inverted>
                {value3}
              </AppText>
            </AppCenter>
          </Col>
        </Row>
      );
    };
    return (
      <Content>
          <Content style={{padding: 10}}>
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
      </Content>
      </Content>
    )
}

export default Recipients
