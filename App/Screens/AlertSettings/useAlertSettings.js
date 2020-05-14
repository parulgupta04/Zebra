import React, {useState, useMemo} from 'react';
import {NavigationActions} from 'react-navigation';

function useAlertSettings({navigation}) {
  const [balanceSwitch, setbalanceSwitch] = useState(false);
  const [usageSwitch, setusageSwitch] = useState(false);
  const [newConnectionSwitch, setnewConnectionSwitch] = useState(false);
  const [barredDeviceSwitch, setbarredDeviceSwitch] = useState(false);
  const goBack = () => {
    navigation.goBack();
  };
  return {
    balanceSwitch,
    setbalanceSwitch,
    usageSwitch,
    setusageSwitch,
    newConnectionSwitch,
    setnewConnectionSwitch,
    barredDeviceSwitch,
    setbarredDeviceSwitch,
    goBack,
  };
}

export default useAlertSettings;
