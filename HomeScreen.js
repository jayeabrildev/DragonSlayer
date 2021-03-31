import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  BackHandler,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Orientation from 'react-native-orientation-locker';

class HomeScreen extends Component {
  render() {
    Orientation.lockToPortrait();
    const navigation = this.props.navigation;

    return (
      <ImageBackground
        source={require('./images/mainbg.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={[styles.title, styles.align]}>
            <Image
              source={require('./images/InstantPanaloLogo.gif')}
              style={styles.logoImage}
            />
          </View>
          <View style={[styles.boxes, styles.align]}>
            <View style={styles.boxesRow}>
              <View style={styles.boxesSpace}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DS_Loadingscreen')}>
                  <Image
                    source={require('./images/DragonSlayerIcon.png')}
                    style={styles.buttonImage}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.boxesSpace}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('MainScreen')}>
                  <Image
                    source={require('./images/KareraIcon.png')}
                    style={styles.buttonImage}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.boxesSpace}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('PDLoadingScreen')}>
                  <Image
                    source={require('./images/PearlDiverIcon.png')}
                    style={styles.buttonImage}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.boxesRow}>
              <View style={styles.boxesSpace}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('UFHomeScreen')}>
                  <Image
                    source={require('./images/UlamFinderIcon.png')}
                    style={styles.buttonImage}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.boxesSpace}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('JRLoadingScreen')}>
                  <Image
                    source={require('./images/RizalIcon.png')}
                    style={styles.buttonImage}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.container} />
        </View>
      </ImageBackground>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
  },
  title: {
    flex: 1,
  },
  align: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoImage: {
    resizeMode: 'contain',
    height: hp('40%'),
    width: wp('70%'),
  },
  boxes: {
    flex: 1,
  },
  boxesRow: {
    flexDirection: 'row',
  },
  boxesSpace: {
    paddingHorizontal: wp('0.2%'),
    paddingVertical: hp('0.2%'),
  },
  buttonImage: {
    resizeMode: 'contain',
    width: wp('33%'),
    height: hp('17%'),
    alignSelf: 'center',
  },
  exitButton: {
    textAlign: 'center',
    justifyContent: 'center',
    height: hp('8%'),
    width: hp('20%'),
    borderRadius: hp('2.5%'),
    borderWidth: hp('0.15%'),
    borderColor: '#f7db26',
    backgroundColor: '#e87305',
  },
  exitText: {
    fontSize: hp('5%'),
  },
});
