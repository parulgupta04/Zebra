import React from 'react';
import {View} from 'react-native';
import getPerfectSize from '../../Utilities/DimensionHandler';

function AppPadding({
  size,
  horizontal,
  vertical,
  left,
  right,
  top,
  bottom,
  children,
  flex,
}) {
  const sizeCalc = getPerfectSize(size);

  function paddingCalculator(direction) {
    switch (direction) {
      case 'left':
        return !(vertical || right || top || bottom) ? sizeCalc : 0;
      case 'right':
        return !(vertical || left || top || bottom) ? sizeCalc : 0;
      case 'top':
        return !(horizontal || right || left || bottom) ? sizeCalc : 0;
      case 'bottom':
        return !(horizontal || right || top || left) ? sizeCalc : 0;
    }
  }

  return (
    <View
      style={{
        paddingLeft: paddingCalculator('left'),
        paddingRight: paddingCalculator('right'),
        paddingBottom: paddingCalculator('bottom'),
        paddingTop: paddingCalculator('top'),
        flex: flex ? flex : 0,
      }}>
      {children}
    </View>
  );
}

export default AppPadding;
