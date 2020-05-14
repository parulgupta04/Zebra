import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Row} from 'native-base';
import getPerfectSize from '../../Utilities/DimensionHandler';
import Theme from '../../Config/Theme';
import {AppText} from '..';

function ProgressCounter({currentStep}) {
  const styles = StyleSheet.create({
    circleStyles: num => {
      return {
        height: getPerfectSize(60),
        width: getPerfectSize(60),
        borderRadius: getPerfectSize(30),
        borderWidth: 2,
        borderColor: num <= currentStep ? Theme.primary : Theme.grey,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: num < currentStep ? Theme.primary : 'transparent',
      };
    },
    lineStyles: num => {
      return {
        flex: 1,
        height: getPerfectSize(5),
        backgroundColor: num < currentStep ? Theme.primary : Theme.grey,
      };
    },
    rowStyles: {alignItems: 'center'},
  });

  function circle(num) {
    return (
      <View style={styles.circleStyles(num)}>
        <AppText
          color={num == currentStep ? Theme.primary : Theme.white}
          inverted
          bold
          fontSize={30}>
          {num}
        </AppText>
      </View>
    );
  }

  function line(num) {
    return <View style={styles.lineStyles(num)} />;
  }

  return (
    <Row style={styles.rowStyles}>
      {circle(1)}
      {line(1)}
      {circle(2)}
      {line(2)}
      {circle(3)}
      {line(3)}
      {circle(4)}
      {line(4)}
      {circle(5)}
      {line(5)}
      {circle(6)}
    </Row>
  );
}

export default ProgressCounter;
