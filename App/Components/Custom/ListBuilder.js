import React, {Fragment, useMemo} from 'react';
import AppText from '../Shared/AppText';
import {AppSpacer} from '..';
import Theme from '../../Config/Theme';
import {Row, Col} from 'native-base';
import getPerfectSize from '../../Utilities/DimensionHandler';
import AppVisibilityToggle from '../Shared/AppVisibilityToggle';
import LIstBuilderItem from './LIstBuilderItem';

function ListBuilder({listData}) {
  // function row(data, index, uniqueKey) {
  //   return useMemo(() => {
  //     return (
  //       <Row
  //         key={uniqueKey || index}
  //         style={{
  //           minHeight: getPerfectSize(50),
  //           alignItems: 'center',
  //           borderLeftWidth: 1,
  //           borderRightWidth: 1,
  //           borderTopWidth: 1,
  //           borderBottomWidth:
  //             typeof listData[index + 1] === 'string' ||
  //             listData.length === index + 1
  //               ? 1
  //               : 0,
  //           borderColor: Theme.grey,
  //         }}>
  //         <Col size={45} style={{paddingHorizontal: getPerfectSize(20)}}>
  //           <AppText inverted fontSize={28}>
  //             {data.name}
  //           </AppText>
  //         </Col>
  //         <AppText inverted bold fontSize={28}>
  //           -
  //         </AppText>
  //         <Col size={55} style={{paddingHorizontal: getPerfectSize(20)}}>
  //           <AppText color={Theme.grey} fontSize={28}>
  //             {data.value}
  //           </AppText>
  //         </Col>
  //       </Row>
  //     );
  //   }, [data.name, data.value]);
  // }

  function renderList(data, index) {
    if (typeof data === 'string') {
      const headingFlag = listData[index + 1]
        ? listData[index + 1].values
          ? listData[index + 1].values.length === 0
            ? false
            : true
          : true
        : true;
      return (
        <AppVisibilityToggle key={index} visible={headingFlag}>
          <Fragment>
            <AppSpacer size={40} />
            <AppText inverted bold fontSize={30}>
              {data}
            </AppText>
            <AppSpacer size={40} />
          </Fragment>
        </AppVisibilityToggle>
      );
    } else {
      if (data.values) {
        return data.values.map((item, i) => (
          // row({name: data.name + (i + 1), value: item}, index, i + '' + item),
          <LIstBuilderItem
            data={{name: data.name + (i + 1), value: item}}
            index={index}
            uniqueKey={i + '' + item}
            listData={listData}
          />
        ));
      } else {
        // return row(data, index);
        return (
          <LIstBuilderItem data={data} index={index} listData={listData} />
        );
      }
    }
  }

  return listData.map(renderList);
}

export default ListBuilder;
