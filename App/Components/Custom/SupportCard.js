import React from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Icon,
  Row,
} from 'native-base';
import getPerfectSize from '../../Utilities/DimensionHandler';
import {AppSpacer, AppCenter} from '..';
import AppPadding from '../Shared/AppPadding';
import {Dimensions, View} from 'react-native';
import AppText from '../Shared/AppText';
let height = Dimensions.get('screen').height;
let width = Dimensions.get('screen').width;
import Theme from '../../Config/Theme';

function SupportCard(props) {
  const {title, icon_name, selected} = props;

  return (
    <Card
      transparent
      style={{
        width: width / 2,
        height: width / 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <CardItem
        style={{
          height: width / 2.2,
          width: width / 2.2,
          borderRadius: 20,
          backgroundColor: selected,
        }}>
        <Body>
          <AppPadding size={getPerfectSize(10)}></AppPadding>
          <Row>
            <Icon
              name={icon_name}
              style={{fontSize: getPerfectSize(100), color: Theme.light}}
            />
            {icon_name === 'ios-chatbubbles' && (
              <View
                style={{
                  height: getPerfectSize(40),
                  width: getPerfectSize(40),
                  backgroundColor: 'red',
                  borderRadius: getPerfectSize(20),
                  right: getPerfectSize(10),
                }}>
                <AppCenter>
                  <AppText fontSize={30} bold style={{color: Theme.white}}>
                    0
                  </AppText>
                </AppCenter>
              </View>
            )}
          </Row>

          <AppText fontSize={30} bold style={{color: Theme.light}}>
            {title}
          </AppText>
          <AppPadding left size={width / 1.3}>
            <Icon
              name="ios-arrow-forward"
              style={{fontSize: getPerfectSize(35), color: Theme.light}}
            />
          </AppPadding>
        </Body>
      </CardItem>
    </Card>
  );
}

export default SupportCard;
