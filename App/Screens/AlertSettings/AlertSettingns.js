import React from 'react';
import Screenheader from '../../Components/Custom/Screenheader';
import AlertRow from '../../Components/Custom/AlertRow';
import {Container} from 'native-base';
import {AppSpacer} from '../../Components';
import getPerfectSize from '../../Utilities/DimensionHandler';
import useAlertSettings from './useAlertSettings';

function AlertSettingns(props) {
  const {
    balanceSwitch,
    setbalanceSwitch,
    usageSwitch,
    setusageSwitch,
    newConnectionSwitch,
    setnewConnectionSwitch,
    barredDeviceSwitch,
    setbarredDeviceSwitch,
    goBack,
  } = useAlertSettings(props);
  return (
    <Container>
      <Screenheader title={'Alert Setting'} goBack={goBack} />
      <AppSpacer size={getPerfectSize(80)} />
      <AlertRow
        title={'Balance Notification'}
        value={balanceSwitch}
        action={() => setbalanceSwitch(!balanceSwitch)}></AlertRow>
      <AlertRow
        title={'Usage Utilization'}
        value={usageSwitch}
        action={() => setusageSwitch(!usageSwitch)}></AlertRow>
      <AlertRow
        title={'New Device Connected'}
        value={newConnectionSwitch}
        action={() => setnewConnectionSwitch(!newConnectionSwitch)}></AlertRow>
      <AlertRow
        title={'Barred Devices'}
        value={barredDeviceSwitch}
        action={() => setbarredDeviceSwitch(!barredDeviceSwitch)}></AlertRow>
    </Container>
  );
}

export default AlertSettingns;
