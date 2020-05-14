import React, {Fragment, useMemo} from 'react';
import AppText from '../Shared/AppText';
import {AppSpacer} from '..';
import Theme from '../../Config/Theme';
import {Row, Col} from 'native-base';
import getPerfectSize from '../../Utilities/DimensionHandler';
import AppVisibilityToggle from '../Shared/AppVisibilityToggle';
function LIstBuilderItem({data, index, uniqueKey, listData}) {
  return useMemo(() => {
    return (
      <Row
        key={uniqueKey || index}
        style={{
          minHeight: getPerfectSize(50),
          alignItems: 'center',
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderTopWidth: 1,
          borderBottomWidth:
            typeof listData[index + 1] === 'string' ||
            listData.length === index + 1
              ? 1
              : 0,
          borderColor: Theme.grey,
        }}>
        <Col size={45} style={{paddingHorizontal: getPerfectSize(20)}}>
          <AppText inverted fontSize={28}>
            {data.name}
          </AppText>
        </Col>
        <AppText inverted bold fontSize={28}>
          -
        </AppText>
        <Col size={55} style={{paddingHorizontal: getPerfectSize(20)}}>
          <AppText color={Theme.grey} fontSize={28}>
            {data.value}
          </AppText>
        </Col>
      </Row>
    );
  }, [data.name, data.value]);
}

export default LIstBuilderItem;
