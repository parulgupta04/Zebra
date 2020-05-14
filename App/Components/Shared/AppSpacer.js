import React from 'react';
import {View} from 'react-native';
import getPerfectSize from '../../Utilities/DimensionHandler';

function AppSpacer({size, horizontal}) {
  const styles = {
    [horizontal ? 'width' : 'height']: getPerfectSize(size),
  };
  return <View style={styles} />;
}

export default AppSpacer;
