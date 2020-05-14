import React from 'react';
import {View, StyleSheet} from 'react-native';

function AppCenter({children, allAxis}) {
  const flexVerticalCenter = allAxis ? {flex: 1, justifyContent: 'center'} : {};

  const styles = StyleSheet.create({
    viewStyles: {alignItems: 'center', ...flexVerticalCenter},
  });

  return <View style={styles.viewStyles}>{children}</View>;
}

export default AppCenter;
