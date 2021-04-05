import React, {Component} from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
  Modal,
  BackHandler,
} from 'react-native';
import {interpolate} from 'react-native-reanimated';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Sound from 'react-native-sound';
import spin from '../Assets/Audio/sfx_rolldice.mp3';
import dspg from '../Assets/Audio/bgmusic_gameplay.mp3';
Sound.setCategory('Playback');

var bgsound = new Sound(dspg, Sound.MAIN_BUNDLE, error => {
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

var spineffect = new Sound(spin, Sound.MAIN_BUNDLE, error => {
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

export class DSPlayGame extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    {
      this.props.navigation.navigate('HomeScreen') + bgsound.stop();
    }
    return true;
  };

  constructor() {
    super();
    this.state = {
      dragon: this.getDragonImage(this.getRandomDragon()),
      disabled: false,
      dice1anim1: new Animated.Value(0),
      dice1anim2: new Animated.ValueXY({x: 0, y: 0}),
      dice2anim1: new Animated.Value(0),
      dice2anim2: new Animated.ValueXY({x: 0, y: 0}),
      dice3anim1: new Animated.Value(0),
      dice3anim2: new Animated.ValueXY({x: 0, y: 0}),
      dice1Line: new Animated.ValueXY({x: hp('-15%'), y: hp('50%')}),
      dice2Line: new Animated.ValueXY({x: hp('0%'), y: hp('50%')}),
      dice3Line: new Animated.ValueXY({x: hp('15%'), y: hp('50%')}),
      showDice3: null,
      showDice2: null,
      showDice1: require('../Assets/Images/dice1empty.png'),
      score1: '',
      score2: '',
      score3: '',
      screenScore: '',
      showExplosion: null,
      sword: require('../Assets/Images/attackbutton.png'),
      totalScore: 0,
      coins: 0,
      totalCoins: 0,
      scoreBoard: false,
      click: 1,
      dragonHP: 1000000,
    };
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    {
      this.props.navigation.navigate('DS_Homescreen');
    }
    return true;
  };

  getRandomDragon = () => {
    let randomDragon = Math.floor(Math.random() * 3) + 1;
    return randomDragon;
  };
  getDragonImage = dragonRandom => {
    switch (dragonRandom) {
      case 1:
        return require('../Assets/Images/dragon1.gif');
        break;
      case 2:
        return require('../Assets/Images/dragon2.gif');
        break;
      case 3:
        return require('../Assets/Images/dragon3.gif');
        break;
      default:
        return require('../Assets/Images/dragon1.gif');
        break;
    }
  };

  getRandomScore = () => {
    let randomScore = Math.floor(Math.random() * 16) + 85;
    return randomScore;
  };

  //----------------------------------------------------------------------------------------------------
  firstAttact = () => {
    spineffect.stop();
    spineffect.play();
    this.setState({
      disabled: true,
      sword: require('../Assets/Images/attackbuttonclicked.png'),
    });

    const Animations = require('./DragonSlayer_Animation');

    Animations.diceAnim(
      this.state.dice1anim1,
      this.state.dice1anim2,
      this.state.dice2anim1,
      this.state.dice2anim2,
      this.state.dice3anim1,
      this.state.dice3anim2,
    );

    const randomScore1 = this.getRandomScore();

    setTimeout(() => {
      this.setState({
        score1: randomScore1,
        screenScore: randomScore1 + '!',
        totalScore: this.state.totalScore + randomScore1,

        showDice1: require('../Assets/Images/dice1empty.png'),
      });
    }, 1400);

    setTimeout(() => {
      this.setState({showExplosion: require('../Assets/Images/explosion.gif')});
    }, 1200);

    setTimeout(() => {
      this.setState({screenScore: '', showExplosion: null});
    }, 2200);

    this.setState({dice2anim1: new Animated.Value(0)});
    this.setState({dice2anim2: new Animated.ValueXY({x: 0, y: 0})});

    setTimeout(() => {
      this.setState({
        disabled: false,
        sword: require('../Assets/Images/attackbutton.png'),
      });
    }, 3000);
  };

  //----------------------------------------------------------------------------------------------------
  secondAttact = () => {
    spineffect.stop();
    spineffect.play();

    this.setState({
      disabled: true,
      sword: require('../Assets/Images/attackbuttonclicked.png'),
    });

    this.setState({showDice2: require('../Assets/Images/dice2empty.png')});

    const Animations = require('./DragonSlayer_Animation.js');

    Animations.diceAnim(
      this.state.dice1anim1,
      this.state.dice1anim2,
      this.state.dice2anim1,
      this.state.dice2anim2,
      this.state.dice3anim1,
      this.state.dice3anim2,
    );

    const randomScore2 = this.getRandomScore();

    setTimeout(() => {
      this.setState({
        score2: randomScore2,
        screenScore: randomScore2 + '!',
        totalScore: this.state.totalScore * randomScore2,
        showDice2: require('../Assets/Images/dice2empty.png'),
      });
    }, 1400);
    setTimeout(() => {
      this.setState({showExplosion: require('../Assets/Images/explosion.gif')});
    }, 1200);

    setTimeout(() => {
      this.setState({screenScore: '', showExplosion: null});
    }, 2200);

    this.setState({dice3anim1: new Animated.Value(0)});
    this.setState({dice3anim2: new Animated.ValueXY({x: 0, y: 0})});
    setTimeout(() => {
      this.setState({
        disabled: false,
        sword: require('../Assets/Images/attackbutton.png'),
      });
    }, 3000);
  };
  //----------------------------------------------------------------------------------------------------
  thirdAttact = () => {
    spineffect.stop();
    spineffect.play();

    this.setState({
      disabled: true,
      sword: require('../Assets/Images/attackbuttonclicked.png'),
    });

    this.setState({showDice3: require('../Assets/Images/dice3empty.png')});

    const Animations = require('./DragonSlayer_Animation.js');
    Animations.diceAnim(
      this.state.dice1anim1,
      this.state.dice1anim2,
      this.state.dice2anim1,
      this.state.dice2anim2,
      this.state.dice3anim1,
      this.state.dice3anim2,
    );

    const randomScore3 = this.getRandomScore();

    setTimeout(() => {
      this.setState({showExplosion: require('../Assets/Images/explosion.gif')});
    }, 1200);
    setTimeout(() => {
      this.setState({
        score3: randomScore3,
        screenScore: randomScore3 + '!',
        totalScore: this.state.totalScore * randomScore3,
        showDice3: require('../Assets/Images/dice3empty.png'),
      });
    }, 1400);

    setTimeout(() => {
      this.setState({showExplosion: require('../Assets/Images/explosion.gif')});
    }, 1200);

    setTimeout(() => {
      this.setState({screenScore: '', showExplosion: null});
    }, 2200);
    setTimeout(() => {
      this.setState({
        disabled: false,
        sword: require('../Assets/Images/attackbutton.png'),
      });
    }, 3000);

    setTimeout(() => {
      if (this.state.totalScore >= 650000 && this.state.totalScore <= 699999) {
        this.state.coins = this.state.totalCoins + 10;
      } else if (
        this.state.totalScore >= 700000 &&
        this.state.totalScore <= 749999
      ) {
        this.state.coins = this.state.totalCoins + 20;
      } else if (
        this.state.totalScore >= 750000 &&
        this.state.totalScore <= 799999
      ) {
        this.state.coins = this.state.totalCoins + 30;
      } else if (
        this.state.totalScore >= 800000 &&
        this.state.totalScore <= 849999
      ) {
        this.state.coins = this.state.totalCoins + 40;
      } else if (
        this.state.totalScore >= 850000 &&
        this.state.totalScore <= 899999
      ) {
        this.state.coins = this.state.totalCoins + 50;
      } else if (
        this.state.totalScore >= 900000 &&
        this.state.totalScore <= 1000000
      ) {
        this.state.coins = this.state.totalCoins + 100;
      } else {
        alert('talo');
      }
      this.state.coins = this.state.totalCoins + this.state.coins;
    }, 2000);

    setTimeout(() => {
      this.setState({scoreBoard: true, totalCoins: this.state.coins});
    }, 4000);
  };
  //----------------------------------------------------------------------------------------------------

  startAnimation = () => {
    if (this.state.click == 1) {
      this.firstAttact();
      this.state.click = 2;
    } else if (this.state.click == 2) {
      this.secondAttact();
      this.state.click = 3;
    } else if (this.state.click == 3) {
      this.thirdAttact();
      this.state.click = 1;
    }
  };

  playAgain = () => {
    this.setState({
      dragon: this.getDragonImage(this.getRandomDragon()),
      disabled: false,
      dice1anim1: new Animated.Value(0),
      dice1anim2: new Animated.ValueXY({x: 0, y: 0}),
      dice2anim1: new Animated.Value(0),
      dice2anim2: new Animated.ValueXY({x: 0, y: 0}),
      dice3anim1: new Animated.Value(0),
      dice3anim2: new Animated.ValueXY({x: 0, y: 0}),
      dice1Line: new Animated.ValueXY({x: hp('-15%'), y: hp('50%')}),
      dice2Line: new Animated.ValueXY({x: hp('0%'), y: hp('50%')}),
      dice3Line: new Animated.ValueXY({x: hp('15%'), y: hp('50%')}),
      showDice1: require('../Assets/Images/dice1.png'),
      showDice2: null,
      showDice3: null,
      score1: '',
      score2: '',
      score3: '',
      screenScore: '',
      showExplosion: null,
      sword: require('../Assets/Images/attackbutton.png'),
      totalScore: 0,
      scoreBoard: false,
    });
  };

  render() {
    // Play background music
    bgsound.play();
    bgsound.setNumberOfLoops(20);

    const rotateDice1 = this.state.dice1anim1.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '3960deg'],
    });

    const animatedStyle1 = {
      transform: [
        {rotate: rotateDice1},
        {translateX: this.state.dice1anim2.x},
        {translateY: this.state.dice1anim2.y},
      ],
    };
    const diceLinePlace1 = {
      transform: [
        {translateX: this.state.dice1Line.x},
        {translateY: this.state.dice1Line.y},
      ],
    };

    //=======================================================

    const rotateDice2 = this.state.dice2anim1.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '3960deg'],
    });
    const animatedStyle2 = {
      transform: [
        {rotate: rotateDice2},
        {translateX: this.state.dice2anim2.x},
        {translateY: this.state.dice2anim2.y},
      ],
    };

    const diceLinePlace2 = {
      transform: [
        {translateX: this.state.dice2Line.x},
        {translateY: this.state.dice2Line.y},
      ],
    };

    //=======================================================

    const rotateDice3 = this.state.dice3anim1.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '3960deg'],
    });

    const animatedStyle3 = {
      transform: [
        {rotate: rotateDice3},
        {translateX: this.state.dice3anim2.x},
        {translateY: this.state.dice3anim2.y},
      ],
    };

    const diceLinePlace3 = {
      transform: [
        {translateX: this.state.dice3Line.x},
        {translateY: this.state.dice3Line.y},
      ],
    };

    //=======================================================

    const navigation = this.props.navigation;
    return (
      <ImageBackground
        source={require('../Assets/Images/bgplay.png')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <Modal transparent={true} visible={this.state.scoreBoard}>
            <View style={styles.container}>
              <View style={styles.modalBgContainer}>
                <ImageBackground
                  source={require('../Assets/Images/bgmodal.png')}
                  style={styles.modalBackgroundImage}>
                  <View style={styles.modalInside}>
                    <View style={styles.modalDices}>
                      <View style={styles.modalDiceSpace}>
                        <Image
                          source={this.state.showDice1}
                          style={styles.modalDiceSize}
                        />
                        <Image
                          source={this.state.showDice2}
                          style={styles.modalDiceSize}
                        />
                        <Image
                          source={this.state.showDice3}
                          style={styles.modalDiceSize}
                        />
                      </View>

                      <View style={styles.modalDiceTextSpace}>
                        <View style={styles.modalDiceTextSpaceEach}>
                          <Text style={styles.modalDiceText}>
                            {this.state.score1}
                          </Text>
                        </View>
                        <View style={styles.modalDiceTextSpaceEach}>
                          <Text style={styles.modalDiceText}>
                            {this.state.score2}
                          </Text>
                        </View>
                        <View style={styles.modalDiceTextSpaceEach}>
                          <Text style={styles.modalDiceText}>
                            {this.state.score3}
                          </Text>
                        </View>
                      </View>
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
                        {this.state.dragonHP}
                      </Text>
                    </View>
                    <View style={styles.modalButtonSpace}>
                      <View style={styles.modalButtonSpace1}>
                        <TouchableOpacity onPress={this.playAgain}>
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
          <View style={styles.firstHalfSpace}>
            <View style={styles.upperSpace}>
              <TouchableOpacity
                onPress={() => navigation.navigate('DS_Homescreen')}>
                <Image
                  source={require('../Assets/Images/back.png')}
                  style={styles.backIcon}
                />
              </TouchableOpacity>
              <View style={styles.scoreSpace}>
                <Image
                  source={require('../Assets/Images/coin.png')}
                  style={styles.coinIcon}
                />
                <Text style={styles.upperScoreText}>
                  {this.state.totalCoins}
                </Text>
              </View>
            </View>
            <View style={styles.topSpace} />
            <View style={styles.dragonSpace}>
              <Image source={this.state.dragon} style={styles.dragon} />
              <View style={styles.diceSpace}>
                <Animated.Image
                  source={this.state.showDice3}
                  style={[styles.dice, animatedStyle3]}
                  fadeDuration={0}
                />
              </View>
              <View style={styles.diceSpace}>
                <Animated.Image
                  source={this.state.showDice2}
                  style={[styles.dice, animatedStyle2]}
                  fadeDuration={0}
                />
              </View>
              <View style={styles.diceSpace}>
                <Animated.Image
                  source={this.state.showDice1}
                  style={[styles.dice, animatedStyle1]}
                  fadeDuration={0}
                />
              </View>

              <View style={styles.diceSpace}>
                <Animated.Image
                  source={require('../Assets/Images/dice_line.png')}
                  style={[styles.diceLine, diceLinePlace1]}
                />
              </View>
              <View style={styles.diceSpace}>
                <Animated.Image
                  source={require('../Assets/Images/dice_line.png')}
                  style={[styles.diceLine, diceLinePlace2]}
                />
              </View>
              <View style={styles.diceSpace}>
                <Animated.Image
                  source={require('../Assets/Images/dice_line.png')}
                  style={[styles.diceLine, diceLinePlace3]}
                />
              </View>

              <Animated.Text style={[styles.diceText, animatedStyle1]}>
                {this.state.score1}
              </Animated.Text>
              <Animated.Text style={[styles.diceText, animatedStyle2]}>
                {this.state.score2}
              </Animated.Text>
              <Animated.Text style={[styles.diceText, animatedStyle3]}>
                {this.state.score3}
              </Animated.Text>

              <Image
                source={this.state.showExplosion}
                style={styles.explosion}></Image>
              <View style={styles.diceScore}>
                <Text style={styles.diceScoreText} />
                <Text style={styles.diceScoreText}>
                  {this.state.screenScore}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.secondHalfSpace}>
            <View style={styles.secondHalfSpace1} />
            <View style={styles.secondHalfSpace2}>
              <TouchableOpacity
                disabled={this.state.disabled}
                onPress={this.startAnimation}
                activeOpacity={1}>
                <Image source={this.state.sword} style={styles.attackButton} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default DSPlayGame;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
  },
  firstHalfSpace: {
    flex: hp('100%'),
  },
  upperSpace: {
    flex: hp('7%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  scoreSpace: {
    flexDirection: 'row',
  },
  upperScoreText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: hp('2.5%'),
  },
  coinIcon: {
    height: hp('3.5%'),
    width: hp('2.5%'),
    resizeMode: 'contain',
  },
  backIcon: {
    height: hp('3.5%'),
    width: hp('4%'),
    resizeMode: 'contain',
  },
  topSpace: {
    flex: hp('15%'),
  },
  dragonSpace: {
    flex: hp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: hp('3%'),
  },
  dragon: {
    height: hp('50%'),
    width: hp('50%'),
    resizeMode: 'contain',
  },
  diceSpace: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: hp('0.8%'),
  },
  dice: {
    height: hp('15%'),
    width: hp('15%'),
    resizeMode: 'contain',
  },
  diceLine: {
    height: hp('15%'),
    width: hp('15%'),
    resizeMode: 'contain',
  },
  diceText: {
    position: 'absolute',
    fontFamily: 'TitanOne-Regular',
    color: '#fff',
    fontSize: hp('3%'),
    top: hp('7%'),
  },
  diceScore: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceScoreText: {
    fontFamily: 'TitanOne-Regular',
    fontSize: hp('10%'),
    color: 'rgb(255,201,14)',
    textShadowColor: 'rgb(255,179,8)',
    textShadowOffset: {width: hp('0.4%'), height: hp('0.4%')},
    textShadowRadius: hp('0.2%'),
  },
  explosion: {
    position: 'absolute',
    top: hp('5%'),
    height: hp('50%'),
    width: hp('50%'),
  },

  secondHalfSpace: {
    flex: hp('70%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondHalfSpace1: {
    flex: hp('100%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondHalfSpace2: {
    flex: hp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  attackButton: {
    resizeMode: 'contain',
    height: hp('7.5%'),
    width: hp('45%'),
  },
  // MODAL ==============================================================================================
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
    fontSize: hp('2.5%'),
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
});
