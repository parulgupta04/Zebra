import React, { Fragment } from 'react';
import {
    Icon,
    Row,
    Col,
} from 'native-base';
import Theme from '../../Config/Theme';
import {
    AppCenter,
    AppSpacer,
    AppText,
} from '../../Components';
import { TouchableOpacity } from 'react-native';
import AppPadding from '../../Components/Shared/AppPadding';
import { useSelector, } from 'react-redux';

function RowItem(props) {
    const { icon, title, action } = props
    const appState = useSelector(state => state);
    const { appLanguage } = appState;
    return (
        <Fragment>
            <TouchableOpacity onPress={action}>
                <Row
                    style={{
                        height: 50,
                        backgroundColor: Theme.shade,
                        borderRadius: 5,
                        direction: appLanguage === 'ar' ? 'rtl' : 'ltr'
                    }}>
                    <Col
                        size={15}
                        style={{
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                        }}>
                        <Icon
                            type={'MaterialIcons'}
                            name={icon}
                            fontSize={32}
                            style={{ color: Theme.white }}></Icon>
                    </Col>
                    <Col size={70} style={{ justifyContent: 'center' }}>
                        <AppPadding horizontal size={20}>
                            <AppText inverted fontSize={28}>
                                {title}
                            </AppText>
                        </AppPadding>
                    </Col>
                    <Col size={15}>
                        <AppCenter allAxis>
                            <Icon
                                name={appLanguage === 'ar' ? 'ios-arrow-back' : "ios-arrow-forward"}
                                fontSize={32}
                                style={{ color: Theme.white }}></Icon>
                        </AppCenter>
                    </Col>
                </Row>
            </TouchableOpacity>
            <AppSpacer size={20} />
        </Fragment>
    )
}

export default RowItem
