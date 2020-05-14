import React from 'react';
import {StyleSheet, View} from 'react-native';
import getPerfectSize from '../../Utilities/DimensionHandler';

function AppCircle({size, children, backgroundColor, style}) {
  const styles = StyleSheet.create({
    circleStyles: {
      height: getPerfectSize(size),
      width: getPerfectSize(size),
      borderRadius: getPerfectSize(size / 2),
      backgroundColor,
      overflow: 'hidden',
      ...style,
    },
  });
  return <View style={styles.circleStyles}>{children}</View>;
}

export default AppCircle;
