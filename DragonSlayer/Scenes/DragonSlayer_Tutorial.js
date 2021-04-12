import React, {Component} from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  ViewComponent,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export class DragonSlayer_Tutorial extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        source={require('../Assets/Images/bg_default.png')}
        blurRadius={3}
        style={styles.backgroundImage}>
        <View style={styles.container}></View>
      </ImageBackground>
    );
  }
}

export default DragonSlayer_Tutorial;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  container: {
    flex: 1,
  },
});
