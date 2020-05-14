import React from 'react';
import {View, Text, Row, Col} from 'native-base';
import AppText from '../Shared/AppText';
import getPerfectSize from '../../Utilities/DimensionHandler';
import Theme from '../../Config/Theme';
import AppSpacer from '../Shared/AppSpacer';

function InvoiceCard(props) {
  const {name, value, discount} = props;
  return (
    <Row>
      <Col size={45} style={{paddingHorizontal: getPerfectSize(20)}}>
        <AppText inverted fontSize={25}>
          {name}
        </AppText>
      </Col>
      <AppSpacer size={36} horizontal />
      <AppText inverted bold fontSize={25} style={{left: discount ? 17 : 0}}>
        -
      </AppText>
      <Col size={55} style={{paddingHorizontal: getPerfectSize(20)}}>
        <AppText
          color={Theme.grey}
          fontSize={25}
          style={{left: discount ? 17 : 0}}>
          {value}
        </AppText>
      </Col>
      <AppText
        color={Theme.white}
        bold
        fontSize={25}
        style={{paddingRight: discount ? 5 : 0}}>
        {discount}
      </AppText>
    </Row>
  );
}

export default InvoiceCard;
