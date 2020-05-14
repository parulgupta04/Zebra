import React from 'react';
import {View, StyleSheet} from 'react-native';
import Theme from '../../Config/Theme';
import getPerfectSize from '../../Utilities/DimensionHandler';
import {Icon} from 'native-base';

function CheckBox({on, onChange}) {
  const styles = StyleSheet.create({
    checkBoxStyles: {
      backgroundColor: on ? Theme.primary : Theme.shade,
      height: getPerfectSize(40),
      width: getPerfectSize(40),
      borderRadius: getPerfectSize(20),
      padding: getPerfectSize(2),
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconStyles: {
      color: !on ? Theme.grey : Theme.light,
      fontSize: getPerfectSize(35),
    },
  });

  return (
    <View style={styles.checkBoxStyles}>
      <Icon name={'checkmark'} style={styles.iconStyles} onPress={onChange} />
    </View>
  );
}

export default CheckBox;
