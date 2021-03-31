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
        source={require('../Assets/Images/bgplay.png')}
        blurRadius={2}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <Modal transparent={true}>
            <View style={styles.container}>
              <View style={styles.modalBgContainer}>
                <ImageBackground
                  source={require('../Assets/Images/bgmodal2.png')}
                  style={styles.modalBackgroundImage}>
                  <View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('DS_Homescreen')}
                      style={styles.exitBorder}>
                      <Text style={[styles.stepStyle, styles.exitStyle]}>
                        x
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.modalInside}>
                    <View style={styles.stepSpace}>
                      <View style={styles.step}>
                        <Text style={styles.stepStyle}>1) Press</Text>
                        <Image
                          source={require('../Assets/Images/attackbutton.png')}
                          style={styles.attackButton}
                        />
                      </View>
                      <View style={styles.step}>
                        <Text style={styles.stepStyle}>
                          2) Watch the Dice!{' '}
                        </Text>
                      </View>
                      <View style={styles.step}>
                        <Text style={styles.stepStyle}>3) See Your Score </Text>
                      </View>
                      <View style={styles.step}>
                        <Text style={styles.stepStyle}>4) Play Again! </Text>
                      </View>
                      <View style={styles.step}>
                        <Text style={styles.stepStyle2}> Enjoy the Game! </Text>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </Modal>
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBackgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    height: hp('75%'),
  },
  modalBgContainer: {
    flex: 1,
    margin: wp('5%'),
    marginTop: '20%',
  },
  modalInside: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: hp('0%'),
    marginTop: hp('-30%'),
  },
  stepSpace: {
    flex: 0.5,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    marginTop: hp('20%'),
  },
  step: {
    flexDirection: 'row',
  },
  stepStyle: {
    fontSize: hp('4%'),
    textShadowRadius: hp('0.2%'),
    color: '#7E53AF',
  },
  stepStyle2: {
    fontSize: hp('4%'),
    textShadowRadius: hp('0.2%'),
    fontWeight: 'bold',
    color: '#7E53AF',
  },
  stepOneStyle: {
    color: '#fbb11b',
  },
  attackButton: {
    height: hp('3%'),
    width: hp('20%'),
  },
  modalExitSpace: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  exitBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 280,
    height: hp('8%'),
    width: wp('13%'),
    backgroundColor: '#58467f',
    borderColor: '#ffc90e',
    borderWidth: hp('0.2%'),
    borderRadius: hp('100%'),
  },
  exitStyle: {
    marginTop: '-10%',
    fontSize: hp('5%'),
    fontWeight: 'bold',
    color: '#ffc90e',
  },
});
