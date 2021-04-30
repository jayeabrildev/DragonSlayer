import React, {Component} from 'react';
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Sound from 'react-native-sound';
import spin from '../Assets/Audio/sfx_rolldice.mp3';
import dspg from '../Assets/Audio/bgmusic_gameplay.mp3';
import slsh from '../Assets/Audio/sfx_slash.mp3';
import sln from '../Assets/Audio/slain_dragon.mp3';
import slainB from '../Assets/Audio/bonus_slain.mp3';
import defeat from '../Assets/Audio/defeat.mp3';

// Imported Components
import TopNavigation from '../Components/topnavigation';
import DragonGIF from '../Components/dragon';
import Scoreboard from '../Components/scoreboard';
import Loseboard from '../Components/modal_loseboard';

Sound.setCategory('Playback');

// Variable: Background music
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

// Variable: Spin SFX
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

// Variable: Slash SFX
var slash = new Sound(slsh, Sound.MAIN_BUNDLE, error => {
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

// Variable: Slash SFX
var bslain = new Sound(slainB, Sound.MAIN_BUNDLE, error => {
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


// Variable: Slash SFX
var slain = new Sound(sln, Sound.MAIN_BUNDLE, error => {
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

// Variable: Slash SFX
var lose = new Sound(defeat, Sound.MAIN_BUNDLE, error => {
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
    const navigation = this.props.navigation;
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    {
      this.navigation.navigate('HomeScreen') + bgsound.stop();
    }
    return true;
  };
  constructor() {
    super();

    // Score limiter
    getRandomLogic = () => {
      let randomNumber = Math.floor(Math.random() * 7 ) ;
      switch (randomNumber) {
        case 0:
          console.log('Limiter: ' + randomNumber);
          console.log('Expected damage: Less than 650K');
          break;
        case 1:
          console.log('Limiter: ' + randomNumber);
          console.log('Expected damage: 650K - 699K');
          console.log('Expected rewards: PHP 10.00');
          break;
        case 2:
          console.log('Limiter: ' + randomNumber);
          console.log('Expected damage: 700K - 749K');
          console.log('Expected rewards: PHP 20.00');
          break;
        case 3:
          console.log('Limiter: ' + randomNumber);
          console.log('Expected damage: 750K - 799K');
          console.log('Expected rewards: PHP 30.00');
          break;
        case 4:
          console.log('Limiter: ' + randomNumber);
          console.log('Expected damage: 800K - 849K');
          console.log('Expected rewards: PHP 40.00');
          break;
        case 5:
          console.log('Limiter: ' + randomNumber);
          console.log('Expected damage: 850K - 899K');
          console.log('Expected rewards: PHP 50.00');
          break;
        case 6:
          console.log('Limiter: ' + randomNumber);
          console.log('Expected damage: 900K - 1M');
          console.log('Expected rewards: PHP 100.00');
          break;
      }
      return randomNumber;
    
    };

    // Generate a random dragon
    getRandomDragon = () => {
      let randomDragon = Math.floor(Math.random() * 3) + 1;
      return randomDragon;
    };
    

    // Get the image of dragon
    getDragonImage = dragonRandom => {
      switch (dragonRandom) {
        case 1:
          return require('../Assets/Images/Dragon/dragon1.gif');

        case 2:
          return require('../Assets/Images/Dragon/dragon2.gif');

        case 3:
          return require('../Assets/Images/Dragon/dragon3.gif');
      }
    };

    var randomDragon = getRandomDragon();

    // States
    this.state = {
      Logic: getRandomLogic(),
      dragoncount: randomDragon,
      dragon: getDragonImage(randomDragon),
      disabled: false,
      chestE: true,
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
      showDice1: null,
      screenScore: '',
      showExplosion: null,
      showChest: null,
      sword: require('../Assets/Images/attackbutton.png'),
      totalScore: 0,
      roundCoins: 0,
      bonusCoins: 0,
      coins: 0,
      totalCoins: 0,
      loseBoard: false,
      scoreBoard: false,
      treasureBox: false,
      click: 1,
      hpbar: require('../Assets/Images/Dragon/dragonhp_1.png'),
    };
  }

  //Attack
  Attack = attackSequence => {
    spineffect.stop();

    // Play Spin Sound Effect
    spineffect.play();

    // Dice Animator
    const Animations = require('./DragonSlayer_Animation');
    Animations.diceAnim(
      this.state.dice1anim1,
      this.state.dice1anim2,
      this.state.dice2anim1,
      this.state.dice2anim2,
      this.state.dice3anim1,
      this.state.dice3anim2,
    );

    let randomScore;
    // Generate Score according to limiter
    switch (attackSequence) {
      // First Attack
      case 1:
        switch (this.state.Logic){
          case 0:
            randomScore = Math.floor(Math.random() * 2) + 85;
            break;
          case 1:
            randomScore = Math.floor(Math.random() * 2) + 87;
            break;
          case 4:
           randomScore = Math.floor(Math.random() * 8) + 89;
            break;
          case 5:
            randomScore = Math.floor(Math.random() * 9) + 91;
            break;
          case 6:
            randomScore = Math.floor(Math.random() * 4) + 97;
            break;
          default:
            randomScore = Math.floor(Math.random() * 16) + 85;
            break;
        }

        this.setState({
          showDice1: require('../Assets/Images/Dice/dice1empty.png'),
          dice2anim1: new Animated.Value(0),
          dice2anim2: new Animated.ValueXY({x: 0, y: 0}),
          totalScore: this.state.totalScore + randomScore,
        });
        break;
      // Second Attack
      case 2:
        switch (this.state.Logic) {
          case 0:
            randomScore = Math.floor(Math.random() * 2) + 85;
            break;
          case 1:
            randomScore = Math.floor(Math.random() * 2) + 87;
            break;
          case 2:
            randomScore = Math.floor(Math.random() * 2) + 89;
            break;
          case 3:
            randomScore = Math.floor(Math.random() * 2) + 91;
            break;
          case 4:
            randomScore = Math.floor(Math.random() * 2) + 93;
            break;
          case 5:
            randomScore = Math.floor(Math.random() * 2) + 95;
            break;
          case 6:
            randomScore = Math.floor(Math.random() * 4) + 97;
            break;
        }
        this.setState({
          showDice2: require('../Assets/Images/Dice/dice2empty.png'),
          dice3anim1: new Animated.Value(0),
          dice3anim2: new Animated.ValueXY({x: 0, y: 0}),
          totalScore: this.state.totalScore * randomScore,
        });
        break;
      // Third Attack
      case 3:
        switch (this.state.Logic) {
          case 0:
            randomScore = Math.floor(Math.random() * 2) + 85;
            break;
          case 1:
            randomScore = Math.floor(Math.random() * 2) + 87;
            break;

          default:
            let dice = 85;
            let minscore;
            let score = this.state.totalScore;
            let total = 0;

            switch (this.state.Logic) {
              case 2:
                minscore = 700000;
                break;
              case 3:
                minscore = 750000;
                break;
              case 4:
                minscore = 800000;
                break;
              case 5:
                minscore = 850000;
                break;
            }

            do {
              total = 0;
              total = score * dice;
              dice++;
            } while (total <= minscore);
            randomScore = dice;
            break;
          case 6:
            randomScore = Math.floor(Math.random() * 4) + 97;

            let bonus = Math.floor(Math.random() * 100) + 1;

            if (bonus >= 0 && bonus <= 50) {
              this.setState({bonusCoins: 100});
                setTimeout(() => {
                this.setState({
                scoreBoard: false,
                });}, 4000);
                setTimeout(() => {
                  bgsound.stop();
                  slain.play();
                  },3200);
                  break;
            } else if (bonus >= 51 && bonus <= 75) {
              this.setState({bonusCoins: 1000});
                setTimeout(() => {
                this.setState({
                chestE: false,
                showChest: 
                require('..//Assets/Images/chestcoin.gif')})},3500);
                setTimeout(() => {
                  bgsound.stop();
                  bslain.play();
                  },3300);
                  break;
            } else if (bonus >= 76 && bonus <= 90) {
              this.setState({bonusCoins: 10000});
                setTimeout(() => {
                this.setState({
                chestE: false,
                showChest: 
                require('..//Assets/Images/chestcoin.gif')})},3500);
                
                setTimeout(() => {
                  bgsound.stop();
                  bslain.play();
                  },3300);
                  break;
            } else if (bonus >= 91 && bonus <= 97) {
              this.setState({bonusCoins: 100000});
                setTimeout(() => {
                this.setState({
                chestE: false,
                showChest: 
                require('..//Assets/Images/chestcoin.gif')})},3500);
                setTimeout(() => {
                  bgsound.stop();
                  bslain.play();
                  },3300);
                  break;
            } else if (bonus >= 98 && bonus <= 100) {
              this.setState({bonusCoins: 1000000});
                setTimeout(() => {
                this.setState({
                chestE: false,
                showChest: 
                require('..//Assets/Images/chestcoin.gif')})},3500);
                setTimeout(() => {
                  bgsound.stop();
                  bslain.play();
                  },3300);
                  break;
            }

            

            break;
        }
        this.setState({
          showDice3: require('../Assets/Images/Dice/dice3empty.png'),
          totalScore: this.state.totalScore * randomScore,
        });
        break;
    }

    // Disable Attack Button temporarily
    this.setState({
      disabled: true,
      sword: require('../Assets/Images/attackbuttonclicked.png'),
    });

    // Animate Explosion and Show score after 1 second

    setTimeout(() => {
      switch (attackSequence) {
        case 1:
          this.setState({score1: randomScore});
          break;
        case 2:
          this.setState({score2: randomScore});
          break;
        case 3:
          this.setState({score3: randomScore});
          break;
      }
    }, 700);

    setTimeout(() => {
      this.setState({
        showExplosion: require('../Assets/Images/explosion.gif'),
        screenScore: randomScore + '!',
      });
    }, 1000);

    // Hide score and explosion after 2 seconds
    setTimeout(() => {
      this.setState({screenScore: '', showExplosion: null});
    }, 2000);

    // Dragon Slash Effect
    switch (this.state.dragoncount) {
      // For Dragon type 1
      case 1:
        // Show Slash Effect
        setTimeout(() => {
          this.setState({
            dragon: require('../Assets/Images/Dragon/slash_dragon1.gif'),
          });
          slash.play();
        }, 2000);
        // Revert back to normal
        setTimeout(() => {
          this.setState({
            dragon: require('../Assets/Images/Dragon/dragon1.gif'),
          });
        }, 2700);
        break;
      // For Dragon type 2
      case 2:
        // Show Slash Effect
        setTimeout(() => {
          this.setState({
            dragon: require('../Assets/Images/Dragon/slash_dragon2.gif'),
          });
          slash.play();
        }, 2000);
        // Revert back to normal
        setTimeout(() => {
          this.setState({
            dragon: require('../Assets/Images/Dragon/dragon2.gif'),
          });
        }, 2700);
        break;
      // For Dragon type 3
      case 3:
        // Show Slash Effect
        setTimeout(() => {
          this.setState({
            dragon: require('../Assets/Images/Dragon/slash_dragon3.gif'),
          });
          slash.play();
        }, 2000);
        // Revert back to normal
        setTimeout(() => {
          this.setState({
            dragon: require('../Assets/Images/Dragon/dragon3.gif'),
          });
        }, 2700);
    }
    // Update HP bar and disabling Attack button temporarily
    switch (attackSequence) {
      case 1:
        setTimeout(() => {
          this.setState({
            hpbar: require('../Assets/Images/Dragon/dragonhp_2.png'),
            disabled: false,
            sword: require('../Assets/Images/attackbutton.png'),
          });
        }, 2000);
        break;

      case 2:
        setTimeout(() => {
          this.setState({
            hpbar: require('../Assets/Images/Dragon/dragonhp_3.png'),
            disabled: false,
            sword: require('../Assets/Images/attackbutton.png'),
          });
        }, 2000);
        break;

      case 3:
        setTimeout(() => {
          this.setState({
            hpbar: require('../Assets/Images/Dragon/dragonhp_4.png'),
          });
        }, 2000);

        switch (this.state.Logic) {
          case 0:
            this.state.roundCoins = 0;
            break;
          case 1:
            this.state.roundCoins = 10;
            break;
          case 2:
            this.state.roundCoins = 20;
            break;
          case 3:
            this.state.roundCoins = 30;
            break;
          case 4:
            this.state.roundCoins = 40;
            break;
          case 5:
            this.state.roundCoins = 50;
            break;
          case 6:
            this.state.roundCoins = 100;
            break;
        }

        switch (this.state.Logic) {
          case 0:
            // Show Lose board
            setTimeout(() => {
              this.setState({
                loseBoard: true,
              });
            }, 4000);
            // disable bgsound 
            //enable defeat sound
            setTimeout(() => {
              bgsound.stop();
              lose.play();
              },3200);
              break;
            break;
          case 6:
          console.log("bonus chance");       
          setTimeout(() => {
            this.setState({
            dragon: null})},2800);
            break;
          default:
            // Show Scoreboard
            setTimeout(() => {
              slain.play();
              bgsound.stop();
              },3200);
            // disable bgsound 
            //enable victory sound
            setTimeout(() => {
              this.setState({
              dragon: null})},2800);
            setTimeout(() => {
              this.setState({
                scoreBoard: true,
              });
            }, 4000);
            break;
        }
        break;
    }
  };

  // Function called when attack button is pressed, identifies what is the current attack sequence
  startAnimation = () => {
    if (this.state.click == 1) {
      this.Attack(this.state.click);
      this.state.click = 2;
    } else if (this.state.click == 2) {
      this.Attack(this.state.click);
      this.state.click = 3;
    } else if (this.state.click == 3) {
      this.Attack(this.state.click);
      this.state.click = 1;
    }
  };

  chestTouch = () =>
    {
      this.setState({
        showChest: null,
        scoreBoard: true,
      })
    };

  // Function for resetting the state of components / variables
  PlayAgain = () => {
    var randomDragon = getRandomDragon();
    this.setState({
      Logic: getRandomLogic(),
      dragoncount: randomDragon,
      dragon: getDragonImage(randomDragon),
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
      showDice1: null,
      showDice2: null,
      showDice3: null,
      score1: '',
      score2: '',
      score3: '',
      screenScore: '',
      showExplosion: null,
      showChest: null,
      bonusCoins: 0,
      sword: require('../Assets/Images/attackbutton.png'),
      totalScore: 0,
      scoreBoard: false,
      loseBoard: false,
      hpbar: require('../Assets/Images/Dragon/dragonhp_1.png'),
    });
    bgsound.play();
    slain.stop();
    bslain.stop();
  };

  render() {
    // Play background music
    bgsound.setVolume(1);
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

    return (
      // Background Image
      <ImageBackground
        source={require('../Assets/Images/Background/Background_default.png')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.firstHalfSpace}>
            {/* Top navigation (Back button and Coins) */}
            <TopNavigation
              nav={this.props.navigation}
              hpBar={this.state.hpbar}
            />

            <View style={styles.dragonSpace}>
              {/* Dragon GIF */}
              <DragonGIF source={this.state.dragon} hpBar={this.state.hpbar} />
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

              {/* Dice Containers */}
              <View style={styles.diceSpace}>
                <Animated.Image
                  source={require('../Assets/Images/Dice/dice_line.png')}
                  style={[styles.diceLine, diceLinePlace1]}
                />
              </View>
              <View style={styles.diceSpace}>
                <Animated.Image
                  source={require('../Assets/Images/Dice/dice_line.png')}
                  style={[styles.diceLine, diceLinePlace2]}
                />
              </View>
              <View style={styles.diceSpace}>
                <Animated.Image
                  source={require('../Assets/Images/Dice/dice_line.png')}
                  style={[styles.diceLine, diceLinePlace3]}
                />
              </View>

              {/* Dice Score animation */}
              <Animated.Text style={[styles.diceText, animatedStyle1]}>
                {this.state.score1}
              </Animated.Text>
              <Animated.Text style={[styles.diceText, animatedStyle2]}>
                {this.state.score2}
              </Animated.Text>
              <Animated.Text style={[styles.diceText, animatedStyle3]}>
                {this.state.score3}
              </Animated.Text>

              {/* Explosion GIF (Hidden by default) */}
              <Image
                source={this.state.showExplosion}
                style={styles.explosion}></Image>

            <TouchableOpacity
            onPress={this.chestTouch}
            style={styles.explosion}
            disabled={this.state.chestE}
            >
              <Image
                source={this.state.showChest}
                ></Image>
             </TouchableOpacity>

              {/* Dice Score (Hidden by default) */}
              <View style={styles.diceScore}>
                <Text style={styles.diceScoreText}>
                  {this.state.screenScore}
                </Text>
              </View>
            </View>
          </View>

          {/* Attack Button */}
          <View style={styles.secondHalfSpace}>
            <View style={styles.secondHalfSpace2}>
              <TouchableOpacity
                disabled={this.state.disabled}
                onPress={this.startAnimation}
                activeOpacity={1}>
                <Image source={this.state.sword} style={styles.attackButton} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Loseboard (Modal) */}
          <Loseboard
            nav={this.props.navigation}
            visible={this.state.loseBoard}
            totalScore={this.state.totalScore}
            playAgain={this.PlayAgain}
            roundCoins={this.state.roundCoins}
          />

          {/* Scoreboard (Modal) */}
          <Scoreboard
            nav={this.props.navigation}
            visible={this.state.scoreBoard}
            totalScore={this.state.totalScore}
            playAgain={this.PlayAgain}
            roundCoins={this.state.roundCoins}
            bonusCoins={this.state.bonusCoins}
          />
        </View>
      </ImageBackground>
    );
  }
}
export default DSPlayGame;

// ------------------------------------ STYLESHEET ------------------------------------
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
  backIcon: {
    height: hp('3.5%'),
    width: hp('4%'),
    resizeMode: 'contain',
  },

  dragonSpace: {
    marginTop: hp('15%'),
    flex: hp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: hp('3%'),
  },
  diceSpace: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: hp('-3%'),
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
    fontSize: 22,
    top: hp('3%'),
  },
  diceScore: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%'
  },
  diceScoreText: {
    fontFamily: 'TitanOne-Regular',
    fontSize: hp('10%'),
    color: 'rgb(255,201,14)',
    textShadowColor: 'rgb(255,179,8)',
    textShadowOffset: {width: hp('0.4%'), height: hp('0.4%')},
    textShadowRadius: hp('0.2%'),
    marginTop: 120,
  },
  explosion: {
    position: 'absolute',
    top: hp('5%'),
    height: hp('50%'),
    width: hp('50%'),
  },

  chest: {
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
    marginTop: hp('20%'),
  },
  attackButton: {
    resizeMode: 'contain',
    height: hp('7.5%'),
    width: hp('45%'),
    marginTop:'0%',
  },
});
