import React, { Fragment } from 'react'
import { AppText, AppCenter, AppSpacer } from '../../Components'
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

} from 'native-base';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Theme from '../../Config/Theme';
import AppPadding from '../../Components/Shared/AppPadding';
import getPerfectSize  from '../../Utilities/DimensionHandler';
import RowItem from '../../Components/Custom/RowItem';
import Screenheader from '../../Components/Custom/Screenheader';
function AccountHistory(props) {
    const { navigation } = props;
    const goBack = () => {
        navigation.goBack();
    };

    const gotoInvoices = () => {

        navigation.navigate("invoice")
    }
    const gotoSubscription = () => {

        navigation.navigate("subscription")
    }

    const gotoPaymentHistory = () => {

        navigation.navigate("paymentAccHistory")
    }
    return (
        <Container>

            <Screenheader
                title={'Account history'}
                goBack={goBack}
            />
            <Content>
                <AppPadding size={40} horizontal>
                    <AppSpacer size={80} />

                    <RowItem
                        icon={'settings-applications'}
                        title={'Subscription'}
                        action={gotoSubscription}
                    />
                    <RowItem
                        icon={'contact-phone'}
                        title={'My Invoices'}
                        action={gotoInvoices}
                    />
                    {/* <RowItem
                        icon={'settings-applications'}
                        title={'Payments'}
                        action={gotoPaymentHistory}
                    /> */}
                </AppPadding>
            </Content>
        </Container>
    )
}

export default AccountHistory
