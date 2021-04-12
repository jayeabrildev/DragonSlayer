import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const dragon = props => {
  return (
    <View>
      <View>
        <Image source={props.hpBar} style={styles.dragonHP} />
      </View>
      <View>
        <Image source={props.source} style={styles.dragon} />
      </View>
    </View>
  );
};
export default dragon;

const styles = StyleSheet.create({
  dragon: {
    height: hp('50%'),
    width: hp('50%'),
    resizeMode: 'contain',
  },
  dragonHP: {
    height: hp('10%'),
    width: hp('45%'),
    resizeMode: 'cover',
  },
});
