import React, {useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import Theme from '../../Config/Theme';
import getPerfectSize from '../../Utilities/DimensionHandler';
import {useSelector, useDispatch} from 'react-redux';

function useSupportScreen() {
  const [selectedOption, setselectedOption] = useState('chat');
  const appState = useSelector(state => state);
  const {appLanguage} = appState;
  function selectOption(value) {
    setselectedOption(value);
  }
  const styles = StyleSheet.create({
    headerStyle: {
      backgroundColor: Theme.primary,
    },
    iconStyle: {color: Theme.white},
    rowStyle: {
      flexDirection: appLanguage === 'ar' ? 'row-reverse' : 'row',
      minHeight: Dimensions.get('screen').width / 2,
      justifyContent: 'space-around',
    },
  });
  return {
    styles,
    selectOption,
    selectedOption,
  };
}

export default useSupportScreen;
