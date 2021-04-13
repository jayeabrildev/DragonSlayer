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
        source={require('../Assets/Images/Background/Background_default.png')}
        blurRadius={3}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <ImageBackground
            source={require('../Assets/Images/Background/BG_modal_howtoplay.png')}
            style={styles.bg_howtoplay}>
            <Text style={styles.text_howtoplay}>
              Slay the dragon! player has 3 rolls, each roll values from one to
              a hundred. total damage is equal to the result of the three dice
              rolls
            </Text>

            <View style={styles.container_prizes}>
              <Text style={styles.text_howtoplay}>
                Player gets to win an equivalent prize depending on the total
                damage dealt to the dragon:
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.text_howtoplay}>
                  Loss – less than 650,000 damage
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../Assets/Images/coin.png')}
                  style={styles.coin}
                />
                <Text style={styles.text_howtoplay}>
                  Php 10.00 – 650,000 – 699,999 damage
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../Assets/Images/coin.png')}
                  style={styles.coin}
                />
                <Text style={styles.text_howtoplay}>
                  Php 20.00 – 700,000 – 749,999 damage
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../Assets/Images/coin.png')}
                  style={styles.coin}
                />
                <Text style={styles.text_howtoplay}>
                  Php 30.00 –750,000 – 799,999 damage
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../Assets/Images/coin.png')}
                  style={styles.coin}
                />
                <Text style={styles.text_howtoplay}>
                  Php 40.00 – 800,000 – 849,999 damage
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../Assets/Images/coin.png')}
                  style={styles.coin}
                />
                <Text style={styles.text_howtoplay}>
                  Php 50.00 – 850,000 – 899,999 damage
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={require('../Assets/Images/coin.png')}
                  style={styles.coin}
                />
                <Text style={styles.text_howtoplay}>
                  Php 100.00 – 900,000 - 1,000,000 damage
                </Text>
              </View>
            </View>
          </ImageBackground>
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
    marginTop: 30,
  },

  bg_howtoplay: {
    width: wp('100%'),
    height: hp('90%'),
    paddingTop: 120,
    paddingHorizontal: 60,
    resizeMode: 'cover',
  },

  text_howtoplay: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
    fontFamily: 'Voltaire',
  },

  container_prizes: {
    alignItems: 'flex-start',
  },

  coin: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginRight: 10,
    marginTop: 10,
  },
});
