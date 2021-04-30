import React from 'react';
import {
  Modal,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {BlurView} from '@react-native-community/blur';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
const loseboard = props => {
  return (
    <Modal transparent={true} visible={props.visible}>
      <BlurView style={styles.absolute} blurType="light" blurAmount={10}>
        <View style={styles.container}>
          <View style={styles.modalBgContainer}>
            {/* Background Image */}
            <ImageBackground
              source={require('../Assets/Images/Background/BG_modal_lose.png')}
              style={styles.modalBackgroundImage}>
              <View style={styles.modalInside}>
                <View style={styles.modalScoreNum}></View>

                {/* Text: Defeat */}
                <View style={styles.modalScoreYS}>
                  <Text style={[styles.modalScoreText, styles.modalScoreText1]}>
                    DEFEAT
                  </Text>
                </View>

                {/* Text: Damage */}
                <View style={styles.modalScoreNum2}>
                  <Text style={[styles.modalScoreText, styles.modalScoreText3]}>
                    Total Damage:
                  </Text>

                  {/* Text: Damage Value */}
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
export default loseboard;

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
  },
  chestGIF: {
    width: wp('50%'),
    resizeMode: 'contain',
    marginTop: 20,
  },

  modalScoreYS: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 75,
  },
  modalScoreText: {
    fontFamily: 'Voltaire',
    textShadowRadius: hp('0.2%'),
    paddingTop: hp('0%'),
  },
  modalScoreText1: {
    fontSize: hp('7%'),
  },
  modalScoreText3: {
    fontSize: hp('4%'),
    marginTop: 10,
  },
  modalScoreNum: {
    flex: 0.55,
    alignItems: 'center',
  },
  modalScoreNum2: {
    flex: 0.55,
    alignItems: 'center',
    paddingTop: hp('1'),
  },
  modalScoreText2: {
    fontSize: hp('5%'),
  },
  modalText: {
    fontFamily: 'Voltaire',
    textShadowRadius: hp('0.2%'),
    textAlign: 'center',
    paddingTop: hp('2%'),
    fontSize: hp('3%'),
  },
  modalButtonSpace: {
    marginTop: 10,
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: hp('5%'),
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
