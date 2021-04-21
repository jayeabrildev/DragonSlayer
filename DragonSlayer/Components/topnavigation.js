import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const topnavigation = props => {
  return (
    <View style={styles.upperSpace}>
      <TouchableOpacity onPress={() => props.nav.navigate('DS_Homescreen')}>
        <Image
          source={require('../Assets/Images/back.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  upperSpace: {
    flex: hp('7%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backIcon: {
    height: hp('3.5%'),
    width: hp('4%'),
    resizeMode: 'contain',
  },

  upperScoreText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: hp('2.5%'),
  },
});

export default topnavigation;
