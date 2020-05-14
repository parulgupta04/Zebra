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
  Col,
} from 'native-base';
import getPerfectSize from '../../Utilities/DimensionHandler';
import {AppSpacer, AppCenter} from '..';
import AppPadding from '../Shared/AppPadding';
import {Dimensions, View} from 'react-native';
import AppText from '../Shared/AppText';
let height = Dimensions.get('screen').height;
let width = Dimensions.get('screen').width;
import Theme from '../../Config/Theme';

function DashBoardCard(props) {
  const {title, icon_name, selected} = props;

  return (
    <Card transparent>
      <AppSpacer size={getPerfectSize(10)} />
      <AppPadding left size={getPerfectSize(0)}>
        <CardItem
          style={{
            width: width / 2.35,
            height: width / 2.35,
            borderRadius: 10,
            backgroundColor: selected,
          }}>
          <Body style={{alignItems: 'center'}}>
            <AppSpacer size={getPerfectSize(80)} />
            <Icon
              name={icon_name}
              style={{fontSize: getPerfectSize(80), color: Theme.light}}
            />
            <AppSpacer size={getPerfectSize(30)} />
            <AppText fontSize={30} bold style={{color: Theme.light, flex: 1}}>
              {title}
            </AppText>
          </Body>
        </CardItem>
      </AppPadding>
    </Card>
  );
}

export default DashBoardCard;
