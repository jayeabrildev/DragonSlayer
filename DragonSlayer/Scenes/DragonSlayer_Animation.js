import React, {Component} from 'react';
import {Animated} from 'react-native';
import {interpolate} from 'react-native-reanimated';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

var Animate = {
  diceAnim(
    dice1Animation1,
    dice1Animation2,
    dice2Animation1,
    dice2Animation2,
    dice3Animation1,
    dice3Animation2,
  ) {
    Animated.sequence([
      Animated.timing(dice1Animation1, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.delay(500),
      Animated.timing(dice1Animation2, {
        toValue: {x: hp('-15%'), y: hp('50%')},
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
    Animated.sequence([
      //---------------------------------
      Animated.timing(dice2Animation1, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.delay(500),
      Animated.timing(dice2Animation2, {
        toValue: {x: hp('0%'), y: hp('50%')},
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.sequence([
      //----------------------------------
      Animated.timing(dice3Animation1, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.delay(500),
      Animated.timing(dice3Animation2, {
        toValue: {x: hp('15%'), y: hp('50%')},
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  },
};

module.exports = Animate;
