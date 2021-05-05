import React from 'react';
import {Modal, View, Image} from 'react-native';
import {StyleSheet, ImageBackground} from 'react-native';
import {Text, TouchableOpacity} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const scoreboard = props => {
  return (
    <Modal transparent={true} visible={props.visible}>
      {/* Background Blur */}
      <BlurView style={styles.absolute} blurType="light" blurAmount={10}>
        <View style={styles.container}>
          <View style={styles.modalBgContainer}>
            {/* Background Image */}
            <ImageBackground
              source={require('../Assets/Images/Background/BG_modal_victory.png')}
              style={styles.modalBackgroundImage}>
              <View style={styles.modalInside}>
                <Text style={styles.coinValue}>Rewards</Text>
                <View style={styles.rewardsArea}>
                  <Text style={[styles.rewardsHeader, {fontSize: 30}]}>
                    Coins
                  </Text>
                  <Image
                    source={require('../Assets/Images/coin_peso.png')}
                    style={styles.coinReward}
                  />
                  <Text style={styles.coinValue} thousandSeparator={true}>
                    {numberWithCommas(props.roundCoins)}
                  </Text>
                </View>

                <View style={styles.modalScoreYS}>
                  <Text style={[styles.modalScoreText, styles.modalScoreText1]}>
                    Total Damage:
                  </Text>
                </View>
                <View style={styles.modalScoreNum}>
                  <Text style={[styles.modalScoreText, styles.modalScoreText2]}>
                    {numberWithCommas(props.totalScore)}
                  </Text>
                </View>

                <View style={styles.modalButtonSpace}>
                  <View style={styles.modalButtonSpace1}>
                    <TouchableOpacity onPress={props.playAgain}>
                      <Image
                        source={require('../Assets/Images/playagainbutton.png')}
                        style={styles.modalButton}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.modalButtonSpace2}>
                    <TouchableOpacity
                      onPress={() => props.nav.navigate('DS_Homescreen')}>
                      <Image
                        source={require('../Assets/Images/quitbutton.png')}
                        style={styles.modalButton}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};

export default scoreboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalBackgroundImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  modalBgContainer: {
    flex: 1,
    paddingVertical: hp('10%'),
    paddingHorizontal: wp('7%'),
    backgroundColor: 'transparent',
  },
  modalInside: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 120,
  },

  // Coin Area
  coinReward: {
    width: 35,
    height: 35,
    resizeMode: 'cover',
  },

  coinValue: {
    fontSize: 40,
    fontFamily: 'Voltaire',
    textShadowRadius: 20,
    marginLeft: 10,
  },

  rewardsHeader: {
    fontFamily: 'Voltaire',
    textShadowRadius: hp('0.2%'),
    marginRight: 20,
  },

  rewardsArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
  },

  modalScoreYS: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  modalScoreText: {
    fontFamily: 'Voltaire',
    textShadowRadius: hp('0.2%'),
  },
  modalScoreText1: {
    fontSize: 20,
  },
  modalScoreNum: {
    flex: 0.55,
    alignItems: 'center',
    marginTop: -10,
  },
  modalScoreText2: {
    marginTop: 15,
    fontSize: 40,
  },
  modalButtonSpace: {
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  modalButtonSpace1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButtonSpace2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButton: {
    borderRadius: hp('0.3%'),
    resizeMode: 'contain',
    height: hp('6%'),
    width: hp('22%'),
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
