import React, { memo } from 'react';
import {
  View,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

function AppClick(props) {
  const {
    clickProps,
    style,
    children,
    onPress,
    noFeedback,
    iOSFeedback,
    onLongPress,
  } = props;

  const styles = StyleSheet.create({
    clickContentStyles: {
      ...style,
    },
    flex1: {
      flex: 1,
    },
  });

  function clickContent() {
    return <View style={styles.clickContentStyles}>{children}</View>;
  }

  function ios() {
    return (
      <TouchableOpacity
        style={styles.flex1}
        activeOpacity={0.5}
        onPress={onPress}
        onLongPress={onLongPress}
        {...clickProps}>
        {clickContent()}
      </TouchableOpacity>
    );
  }

  function android() {
    return (
      <TouchableNativeFeedback
        style={styles.flex1}
        useForeground
        background={TouchableNativeFeedback.Ripple('#ffffff')}
        onPress={onPress}
        onLongPress={onLongPress}
        {...clickProps}>
        {clickContent()}
      </TouchableNativeFeedback>
    );
  }

  function noFeedbackFunc() {
    return (
      <TouchableWithoutFeedback
        style={styles.flex1}
        onPress={onPress}
        {...clickProps}>
        {clickContent()}
      </TouchableWithoutFeedback>
    );
  }

  if (noFeedback) {
    return noFeedbackFunc();
  }

  if (iOSFeedback) {
    return ios();
  }

  return <View style={styles.clickContentStyles}>{Platform.OS === 'ios' ? ios() : android()}</View>;
}

export default memo(AppClick);
