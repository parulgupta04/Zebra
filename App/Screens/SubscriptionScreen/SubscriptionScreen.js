import React from 'react';
import { Container, Content, Row, Col, View, Icon } from 'native-base';
import Screenheader from '../../Components/Custom/Screenheader';
import {
    AppCenter,
    AppText,
    AppVisibilityToggle,
    AppSpacer,
    AppClick,
} from '../../Components';
import Theme from '../../Config/Theme';

function SubscriptionScreen({ navigation }) {
    const goBack = () => {
        navigation.goBack();
    };
    const renderRow = (value1, value2, value3, value4) => {
        return (
            <Row
                style={{
                    height: 40,
                    borderWidth: 1,
                    borderColor: Theme.shadeGrey,
                    backgroundColor: Theme.shade,
                }}>
                <Col style={{ flex: 0.2 }}>
                    <AppCenter allAxis>
                        <AppText fontSize={28} inverted noTranslate={true}>
                            {value1}
                        </AppText>
                    </AppCenter>
                </Col>
                <View style={{ width: 0.7, backgroundColor: Theme.shadeGrey }}></View>
                <Col style={{ flex: 0.3 }}>
                    <AppCenter allAxis>
                        <AppText fontSize={28} inverted>
                            {value2}
                        </AppText>
                    </AppCenter>
                </Col>
                <View style={{ width: 0.7, backgroundColor: Theme.shadeGrey }}></View>
                <Col style={{ flex: 0.3 }}>
                    <AppCenter allAxis>
                        <AppText fontSize={28} bold inverted>
                            {value3}
                        </AppText>
                    </AppCenter>
                </Col>
                <View style={{ width: 0.7, backgroundColor: Theme.shadeGrey }}></View>
                <Col style={{ flex: 0.2 }}>
                    <AppCenter allAxis>
                        <AppText fontSize={28} bold inverted>
                            {value4}
                        </AppText>
                    </AppCenter>
                </Col>
            </Row >
        );
    };
    const renderRowHeader = (header1, header2, header3, header4) => {
        return (
            <Row style={{ height: 40, backgroundColor: Theme.primary }}>
                <Col style={{ flex: 0.2 }}>
                    <AppCenter allAxis>
                        <AppText fontSize={28} bold inverted>
                            {header1}
                        </AppText>
                    </AppCenter>
                </Col>
                <View style={{ width: 0.7, backgroundColor: Theme.shadeGrey }}></View>
                <Col style={{ flex: 0.3 }}>
                    <AppCenter allAxis>
                        <AppText fontSize={28} bold inverted>
                            {header2}
                        </AppText>
                    </AppCenter>
                </Col>
                <View style={{ width: 0.7, backgroundColor: Theme.shadeGrey }}></View>
                <AppVisibilityToggle visible={header3}>
                    <Col style={{ flex: 0.3 }}>
                        <AppCenter allAxis>
                            <AppText fontSize={28} bold inverted>
                                {header3}
                            </AppText>
                        </AppCenter>
                    </Col>
                    <View style={{ width: 0.7, backgroundColor: Theme.shadeGrey }}></View>
                </AppVisibilityToggle>
                <Col style={{ flex: 0.2 }}>
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

            <Screenheader
                title={'Subscription'}
                goBack={goBack}
            />
            <Content style={{ padding: 10 }}>
                <AppSpacer size={50} />
                <AppText fontSize={30} bold inverted>
                    Daily Plan
        </AppText>
                <AppSpacer size={10} />
                <View
                    style={{
                        width: '99%',
                        height: 1,
                        backgroundColor: Theme.shadeGrey,
                    }}></View>
                <AppSpacer size={15} />
                {renderRowHeader('Duration', 'Start Date', 'End Date', 'Price')}
                {renderRow('1 Day', '14-08-2019', '15-08-2019', '3,99 $')}
                <AppSpacer size={50} />
                <AppText fontSize={30} bold inverted>
                    Weekly Plan
        </AppText>
                <AppSpacer size={10} />
                <View
                    style={{
                        width: '99%',
                        height: 1,
                        backgroundColor: Theme.shadeGrey,
                    }}></View>
                <AppSpacer size={15} />
                {renderRowHeader('Duration', 'Start Date', 'End Date', 'Price')}
                {renderRow('7 Day', '14-08-2019', '15-08-2019', '3,99 $')}
                <AppSpacer size={50} />
                <AppText fontSize={30} bold inverted>
                    Monthly Plan
        </AppText>
                <AppSpacer size={10} />
                <View
                    style={{
                        width: '99%',
                        height: 1,
                        backgroundColor: Theme.shadeGrey,
                    }}></View>
                <AppSpacer size={15} />
                {renderRowHeader('Duration', 'Start Date', 'End Date', 'Price')}
                {renderRow('28 Day', '14-08-2019', '15-08-2019', '3,99 $')}
                <AppSpacer size={50} />
                <AppText fontSize={30} bold inverted>
                    Pay as you go Plan
        </AppText>
                <AppSpacer size={10} />
                <View
                    style={{
                        width: '99%',
                        height: 1,
                        backgroundColor: Theme.shadeGrey,
                    }}></View>
                <AppSpacer size={15} />
                {renderRowHeader('Duration', 'Start Date', 'End Date', 'Price')}
                {renderRow('1 Day', '14-08-2019', '15-08-2019', '--')}
                <AppSpacer size={50} />
                <Row >
                    <AppText fontSize={30} bold inverted>Estimated Total Cost</AppText>
                    <AppText fontSize={30} bold inverted style={{ paddingLeft: 40, }}>43,97 $</AppText>
                </Row>
            </Content>
        </Container>
    )
}

export default SubscriptionScreen
