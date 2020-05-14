import React from 'react';
import {Image, StyleSheet} from 'react-native';
import images from '../../Assets';
import getPerfectSize from '../../Utilities/DimensionHandler';

function Logo() {
  const styles = StyleSheet.create({
    imageStyles: {
      width: getPerfectSize(400),
      height: getPerfectSize(98),
    },
  });

  return (
    <Image
      source={images.logo}
      resizeMode={'contain'}
      style={styles.imageStyles}
    />
  );
}

export default Logo;
