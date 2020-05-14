import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';

function AnimatedImage({source, style, resizeMode}) {
  const imageAnimated = new Animated.Value(0);

  const styles = StyleSheet.create({
    imageOverlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    },
    container: {
      backgroundColor: '#e1e4e8',
      ...style,
    },
  });

  function onImageLoad() {
    Animated.timing(imageAnimated, {
      toValue: 1,
    }).start();
  }

  return (
    <View style={styles.container}>
      <Animated.Image
        source={source}
        style={{...styles.imageOverlay, opacity: imageAnimated, ...style}}
        onLoad={onImageLoad}
        resizeMode={resizeMode}
      />
    </View>
  );
}

export default AnimatedImage;
