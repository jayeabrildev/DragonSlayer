import React, {Component} from 'react';
import {
  ImageBackground,
  View,
  Image,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Logo from '../Assets/Images/dragonGIF1.gif';
import Sound from 'react-native-sound';
import dsls from '../Assets/Audio/bgmusic_loadingscreen.mp3';
Sound.setCategory('Playback');

var bgsound = new Sound(dsls, Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log(
    'duration in seconds: ' +
      bgsound.getDuration() +
      'number of channels: ' +
      bgsound.getNumberOfChannels(),
  );
});
bgsound.setNumberOfLoops(-1);
bgsound.release();

class DragonSlayer_Loadingscreen extends Component {
  state = {
    LogoAnimate: new Animated.Value(0),
    LogoText: new Animated.Value(0),
  };

  componentDidMount() {
    const {LogoAnimate, LogoText} = this.state;
    const navigation = this.props.navigation;
    Animated.parallel([
      Animated.spring(LogoAnimate, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 500,
        useNativeDriver: false,
      }).start(),

      Animated.timing(LogoText, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => navigation.navigate('DS_Homescreen'), 8000);
    });
  }

  render() {
    bgsound.setVolume(50);

    bgsound.play(success => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
    return (
      <ImageBackground
        source={require('../Assets/Images/bgload.png')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <Animated.View
            style={{
              opacity: this.state.LogoAnimate,
              top: this.state.LogoAnimate.interpolate({
                inputRange: [0, 1],
                outputRange: [80, 0],
              }),
            }}>
            <Image
              style={styles.dragonlogo}
              source={require('../Assets/Images/DS_NewLoading.gif')}
            />
          </Animated.View>
          <Animated.View style={{opacity: this.state.LogoText}}>
            <Text style={styles.logoText}> Loading . . . </Text>
          </Animated.View>
        </View>
      </ImageBackground>
    );
  }
}

export default DragonSlayer_Loadingscreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dragonlogo: {
    marginTop: hp('-20%'),
    height: hp('100%'),
    width: hp('200%'),
    resizeMode: 'contain',
  },
  logoText: {
    color: 'white',
    fontSize: hp('3%'),
    fontFamily: 'TitanOne-Regular',
    marginTop: hp('-10%'),
    fontWeight: '200',
  },
});
