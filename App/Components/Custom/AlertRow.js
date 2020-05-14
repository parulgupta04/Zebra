import React, {Fragment} from 'react';
import {Icon, Row, Col} from 'native-base';
import Theme from '../../Config/Theme';
import {AppCenter, AppSpacer, AppText} from '../../Components';
import {TouchableOpacity} from 'react-native';
import AppPadding from '../../Components/Shared/AppPadding';
import {useSelector} from 'react-redux';
import {Switch} from 'react-native-switch';
import getPerfectSize from '../../Utilities/DimensionHandler';

function AlertRow({title, action, value}) {
  const appState = useSelector(state => state);
  const {appLanguage} = appState;
  return (
    <Fragment>
      <Row
        style={{
          height: getPerfectSize(90),
          backgroundColor: Theme.shade,
          borderRadius: 5,
          marginHorizontal: 10,
          marginVertical: 4,
          direction: appLanguage === 'ar' ? 'rtl' : 'ltr',
        }}>
        <Col size={70} style={{justifyContent: 'center'}}>
          <AppPadding horizontal size={20}>
            <AppText inverted fontSize={28}>
              {title}
            </AppText>
          </AppPadding>
        </Col>
        <Col size={30}>
          <AppCenter allAxis>
            <Switch
              value={value}
              onValueChange={action}
              disabled={false}
              activeText={'On'}
              inActiveText={'Off'}
              circleSize={30}
              barHeight={20}
              circleBorderWidth={2}
              backgroundActive={Theme.primary}
              backgroundInactive={Theme.grey}
              circleActiveColor={Theme.primary}
              circleInActiveColor={Theme.light}
            />
          </AppCenter>
        </Col>
      </Row>

      <AppSpacer size={20} />
    </Fragment>
  );
}

export default AlertRow;
