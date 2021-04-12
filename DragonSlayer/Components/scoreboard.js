import React from 'react'
import {Modal, View, Image, StyleSheet, ImageBackground, Text, TouchableOpacity }from 'react-native' 
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
const scoreboard = (props) => {
    return (
        <Modal transparent={true} visible = {props.visible}>
        <View style={styles.container}>
            <View style={styles.modalBgContainer}>
            <ImageBackground
              source={require('../Assets/Images/bgmodal_victory.png')}
              style={styles.modalBackgroundImage}>
              <View style={styles.modalInside}>
                <View style={styles.modalDices}>
                  <View style={styles.modalDiceSpace}>
                    <Image
                      source={props.dice1}
                      style={styles.modalDiceSize}
                    />
                    <Image
                      source={props.dice2}
                      style={styles.modalDiceSize}
                    />
                    <Image
                      source={props.dice3}
                      style={styles.modalDiceSize}
                    />
                  </View>

                  <View style={styles.modalDiceTextSpace}>
                    <View style={styles.modalDiceTextSpaceEach}>
                      <Text style={styles.modalDiceText}>
                        {props.score1}
                      </Text>
                    </View>
                    <View style={styles.modalDiceTextSpaceEach}>
                      <Text style={styles.modalDiceText}>
                        {props.score2}
                      </Text>
                    </View>
                    <View style={styles.modalDiceTextSpaceEach}>
                      <Text style={styles.modalDiceText}>
                        {props.score3}
                      </Text>
                    </View>
                  </View>
                </View>
                {/* -------- */}
                <View style = {styles.modalScoreYS}>
                  <Text style = {[styles.modalScoreText,styles.modalScoreText1]}>C O N G R A T S</Text>
                </View>
                  <View style = {styles.modalScoreNum}>      
                      <Text style = {[styles.modalScoreText,styles.modalScoreText2]}>{this.state.roundCoins}</Text>
                      <Image source = {require('../Assets/Images/chest.gif')}/>
                  </View>

                <View style={styles.modalScoreYS}>
                  <Text
                    style={[styles.modalScoreText, styles.modalScoreText1]}>
                    Your Score:
                  </Text>
                </View>
                <View style={styles.modalScoreNum}>
                  <Text
                    style={[styles.modalScoreText, styles.modalScoreText2]}>
                    {props.totalScore}
                  </Text>
                </View>
                {/* ------------- */}
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
                      onPress={() => navigation.navigate('DS_Homescreen')}>
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
      </Modal>
    )
}
export default scoreboard;

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  modalBackgroundImage: {
      flex: 1,
      resizeMode: 'contain',
    },
  modalBgContainer: {
    flex: 1,
    margin: wp('7.5%'),
    paddingVertical: wp('7.5%'),
  },
  modalInside: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalDices: {
    flex: 1.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalDiceSpace: {
    flex: 1.4,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  modalDiceTextSpace: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: hp('4%'),
    left: hp('0%'),
    right: hp('0%'),
  },
  modalDiceTextSpaceEach: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalDiceSize: {
    height: hp('11.2%'),
    width: hp('11.2%'),
    resizeMode: 'contain',
  },
  modalDiceText: {
    fontFamily: 'TitanOne-Regular',
    color: '#fff',
    fontSize: hp('2%'),
  },
  modalScoreYS: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalScoreText: {
    fontFamily: 'Bombardment',
    textShadowColor: 'rgb(191,104,80)',
    textShadowOffset: {width: hp('-0.3%'), height: hp('0.4%')},
    textShadowRadius: hp('0.2%'),
    color: '#f0a66e',
  },
  modalScoreText1: {
    fontSize: hp('5%'),
  },
  modalScoreNum: {
    flex: 0.55,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  modalScoreText2: {
    fontSize: hp('12%'),
  },
  modalButtonSpace: {
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: hp('2%'),
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
})

