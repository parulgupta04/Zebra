import React, { useState } from 'react';
import {
  Container,
  Content,
  Header,
  Left,
  Title,
  Right,
  Icon,
  Body,
  Row,
  Col,
  View,
} from 'native-base';
import Theme from '../../Config/Theme';
import {
  Logo,
  AppCenter,
  AppSpacer,
  ListBuilder,
  AppText,
  AppVisibilityToggle,
  AppClick
} from '../../Components';

import AppPadding from '../../Components/Shared/AppPadding';
import DashBoardCard from '../../Components/Custom/DashBoardCard';
import TabHeader from '../../Components/Custom/TabHeader';
function HomeScreen() {
  const [selectedOffer, setselectedOffer] = useState('daily')
  function selectOffer(value) {
    setselectedOffer(value)
  }
  const renderRow = (value1, value2, value3, ) => {
    return (
      <Row
        style={{
          height: 40,
          borderWidth: 1,
          borderColor: Theme.shadeGrey,
          backgroundColor: Theme.shade,
        }}>
        <Col>
          <AppCenter allAxis>
            <AppText fontSize={28} inverted>
              {value1}
            </AppText>
          </AppCenter>
        </Col>
        <View style={{ width: 0.7, backgroundColor: Theme.shadeGrey }}></View>
        <Col>
          <AppCenter allAxis>
            <AppText fontSize={28} bold inverted>
              {value2}
            </AppText>
          </AppCenter>
        </Col>
        <View style={{ width: 0.7, backgroundColor: Theme.shadeGrey }}></View>
        <Col>
          <AppCenter allAxis>
            <AppText fontSize={28} bold inverted>
              {value3}
            </AppText>
          </AppCenter>
        </Col>
      </Row>
    );
  };
  const renderRowHeader = (header1, header2, header3, header4) => {
    return (
      <Row style={{ height: 40, backgroundColor: Theme.primary }}>
        <Col>
          <AppCenter allAxis>
            <AppText fontSize={28} bold inverted>
              {header1}
            </AppText>
          </AppCenter>
        </Col>
        <View style={{ width: 0.7, backgroundColor: Theme.shadeGrey }}></View>
        <Col>
          <AppCenter allAxis>
            <AppText fontSize={28} bold inverted>
              {header2}
            </AppText>
          </AppCenter>
        </Col>
        <View style={{ width: 0.7, backgroundColor: Theme.shadeGrey }}></View>
        <AppVisibilityToggle visible={header3}>
          <Col>
            <AppCenter allAxis>
              <AppText fontSize={28} bold inverted>
                {header3}
              </AppText>
            </AppCenter>
          </Col>
          <View style={{ width: 0.7, backgroundColor: Theme.shadeGrey }}></View>
        </AppVisibilityToggle>
        <Col>
          <AppCenter allAxis>
            <AppText fontSize={28} bold inverted>
              {header4}
            </AppText>
          </AppCenter>
        </Col>
      </Row>
    );
  };
  return (
    <Container>
      <TabHeader
        heading={'Dashboard'}

      />
      <Content>
        <AppSpacer size={50} />
        <AppCenter>
          <Logo />
        </AppCenter>
        <AppSpacer size={50} />

        <AppPadding size={20}>
          <AppText fontSize={30} bold inverted>
            Device Details
          </AppText>
          <AppSpacer size={30} />
          {renderRowHeader('Device ID', 'Active offer', null, 'Remaining')}
          {renderRow('ABCD123', 'Monthly L', '13,7 GB')}
          <AppSpacer size={50} />

          <AppText fontSize={30} bold inverted>
            Pricing
          </AppText>

          <AppSpacer size={10} />
          <View style={{ height: 1, width: "95%", backgroundColor: Theme.shadeGrey }}></View>
          <AppSpacer size={40} />

          <AppCenter><AppText fontSize={27} bold inverted>
            Select your personalized offer
</AppText></AppCenter>
          <AppSpacer size={20} />
          <AppCenter><Row>
            <Col><AppClick onPress={(() => { selectOffer('daily') })}>
              <DashBoardCard title={"Daily"} icon_name={'ios-chatbubbles'} selected={selectedOffer === 'daily' ? Theme.primary : Theme.shadeGrey} /></AppClick>
            </Col>
            <Col><AppClick onPress={(() => { selectOffer('monthly') })}>
              <DashBoardCard title={"Monthly"} icon_name={'ios-chatbubbles'} selected={selectedOffer === 'monthly' ? Theme.primary : Theme.shadeGrey} /></AppClick>
            </Col>
          </Row>
            <Row>
              <Col><AppClick onPress={(() => { selectOffer('payAsYouGo') })}><DashBoardCard title={"Pay As you Go"} icon_name={'ios-chatbubbles'} selected={selectedOffer === 'payAsYouGo' ? Theme.primary : Theme.shadeGrey} /></AppClick>
              </Col>
              <Col><AppClick onPress={(() => { selectOffer('free') })}><DashBoardCard title={"Free Access"} icon_name={'ios-chatbubbles'} selected={selectedOffer === 'free' ? Theme.primary : Theme.shadeGrey} /></AppClick>
              </Col>
            </Row></AppCenter>
        </AppPadding>
      </Content>
    </Container>
  );
}

export default HomeScreen;
