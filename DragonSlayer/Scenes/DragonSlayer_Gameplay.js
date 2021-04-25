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
<<<<<<< HEAD
  Alert,
} from 'react-native';
import {interpolate} from 'react-native-reanimated';
=======
} from 'react-native';
>>>>>>> 2c7faab (Code refactor on score limiter)
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Sound from 'react-native-sound';
import spin from '../Assets/Audio/sfx_rolldice.mp3';
import dspg from '../Assets/Audio/bgmusic_gameplay.mp3';
import slsh from '../Assets/Audio/sfx_slash.mp3';

// Imported Components
import TopNavigation from '../Components/topnavigation';
import DragonGIF from '../Components/dragon';
import Scoreboard from '../Components/scoreboard';
<<<<<<< HEAD
import Loseboard from '../Components/loseboard';
import { textChangeRangeIsUnchanged } from 'typescript';
=======
import Loseboard from '../Components/modal_loseboard';

>>>>>>> 2c7faab (Code refactor on score limiter)
Sound.setCategory('Playback');

// Variables

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

export class DSPlayGame extends Component {
  componentDidMount() {
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
    // Functions

<<<<<<< HEAD
  getRandomLogic = () => {
    //let randonNumber = 0;  
    let randomNumber = Math.floor(Math.random()*7);
    console.log(randomNumber);
    return randomNumber;
  };
=======
    // Score limiter
    getRandomLogic = () => {
      let randomNumber = Math.floor(Math.random() * 7);
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
          console.log('Expected damage: 740K - 749K');
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
>>>>>>> 2c7faab (Code refactor on score limiter)


  getRandomDragon = () => {
    let randomDragon = Math.floor(Math.random() * 3) + 1;
    return randomDragon;
  };

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

    getRandomScore = () => {
      let randomScore;



         if(this.state.Attact == 1)
      {

      if (this.state.Logic == 0)
      {
          randomScore = Math.floor( Math.random() * 2 ) + 85;
      }
      else if (this.state.Logic == 1)
      {
          randomScore = Math.floor( Math.random() * 2 ) + 87;
      }
      //----------------------------------------------------
      else if (this.state.Logic == 2 ||
               this.state.Logic == 3 || 
               this.state.Logic == 4 ||
               this.state.Logic == 5 )
      {
          randomScore = Math.floor(Math.random() * 16) + 85;
      }
      //----------------------------------------------------
      else if (this.state.Logic == 6)
      {
          randomScore = Math.floor(Math.random() * 4) + 97;
      }
    }

    else if(this.state.Attact == 2)
    {
      if (this.state.Logic == 0)
      {
          randomScore = Math.floor( Math.random() * 2 ) + 85;
      }
      else if (this.state.Logic == 1)
      {
          randomScore = Math.floor( Math.random() * 2 ) + 87;
      }
      else if (this.state.Logic == 2)
      {
          randomScore = Math.floor(Math.random() * 2) + 89;
      }
      else if (this.state.Logic == 3)
      {
          randomScore = Math.floor(Math.random() * 2) + 91;
      }
      else if (this.state.Logic == 4)
      {
          randomScore = Math.floor(Math.random() * 2) + 93;
      }
      else if (this.state.Logic == 5)
      {
          randomScore = Math.floor(Math.random() * 2) + 95;
      }
      else if (this.state.Logic == 6)
      {
          randomScore = Math.floor(Math.random() * 4) + 97;
      }
    }
    
    else if(this.state.Attact == 3) 
    {
     
      if (this.state.Logic == 0)
      {
          randomScore = Math.floor( Math.random() * 2 ) + 85;
      }
      else if (this.state.Logic == 1)
      {
          randomScore = Math.floor( Math.random() * 2 ) + 87;
      }
      //----------------------------------------------------
      else if (this.state.Logic == 2 ||
               this.state.Logic == 3 || 
               this.state.Logic == 4 ||
               this.state.Logic == 5 )
      {
        let dice = 85;
        let minscore;
        let score = this.state.totalScore;
        let total= 0;

        if(this.stateLogic == 2)
        {
            minscore = 700000
        }
        else if(this.state.Logic == 3)
        {
            minscore = 750000
        }
        else if(this.state.Logic == 4)
        {   
            minscore = 800000
        }
        else if(this.state.Logic == 5)
        {
            minscore = 850000
        }


        do{
          total = 0;
          total = score * dice;
          dice++ 
        }while(total <= minscore);
        randomScore = dice;
      }
      //----------------------------------------------------
      else if (this.state.Logic == 6)
      {
          randomScore = Math.floor(Math.random() * 4) + 97;
      }
    
  }
  this.setState({
    Attact: this.state.Attact + 1,
  });
  
      return randomScore;
  };

  getRandomScore1 = () =>{
        let randomScore;
        randomScore = Math.floor(Math.random() * 16) + 85;
        return randomScore;
  }



    var randomDragon = getRandomDragon();
    var randomLogic = getRandomLogic();
    var randomscore1 = getRandomScore1();
    //var randomscore2 = getRandomScore2();
   
    super();
    this.state = {
      Logic: getRandomLogic(),
      dragoncount: randomDragon,
      Logic: randomLogic,
      Attact: 1,
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
      showDice3: null,
      showDice2: null,
      showDice1: require('../Assets/Images/Dice/dice1empty.png'),
      score1: '',
      score2: '',
      score3: '',
      screenScore: '',
      showExplosion: null,
      sword: require('../Assets/Images/attackbutton.png'),
      totalScore: 0,
      roundCoins: 0,
      coins: 0,
      totalCoins: 0,
      scoreBoard: false,
      loseBoard: false,
      treasureBox: false,
      click: 1,
      hpbar: require('../Assets/Images/Dragon/dragonhp_1.png'),
    };
  }
 
  // First attack
  firstAttact = () => {
    spineffect.stop();

    // Play Spin Sound Effect
    spineffect.play();

    // Generate random score
    const randomScore1 = getRandomScore();

    // Disable Attack Button temporarily
    this.setState({
      disabled: true,
      sword: require('../Assets/Images/attackbuttonclicked.png'),
    });

    // Save Score
    this.setState({
      score1: randomScore1,
      totalScore: this.state.totalScore + randomScore1,
    });

    // Animate the Dice
    const Animations = require('./DragonSlayer_Animation');
    Animations.diceAnim(
      this.state.dice1anim1,
      this.state.dice1anim2,
      this.state.dice2anim1,
      this.state.dice2anim2,
      this.state.dice3anim1,
      this.state.dice3anim2,
    );

<<<<<<< HEAD
    this.setState({dice2anim1: new Animated.Value(0)});
    this.setState({dice2anim2: new Animated.ValueXY({x: 0, y: 0})});

    setTimeout(() => {
      this.setState({
        showDice1: require('../Assets/Images/Dice/dice1empty.png'),
      });
    }, 1400);

    // Animate Explosion and Show score after 1 second
    setTimeout(() => {
      this.setState({
        showExplosion: require('../Assets/Images/explosion.gif'),
        screenScore: randomScore1 + '!',
      });
    }, 1000);

    // Hide score and explosion after 2 seconds
    setTimeout(() => {
      this.setState({screenScore: '', showExplosion: null});
    }, 2000);
=======
    let randomScore;
    // Generate Score according to limiter
    switch (attackSequence) {
      // First Attack
      case 1:
        switch (this.state.Logic) {
          case 0:
            randomScore = Math.floor(Math.random() * 2) + 85;
            break;
          case 1:
            randomScore = Math.floor(Math.random() * 2) + 87;
            break;
          case 6:
            randomScore = Math.floor(Math.random() * 4) + 97;
          default:
            randomScore = Math.floor(Math.random() * 16) + 85;
            break;
        }
>>>>>>> 2c7faab (Code refactor on score limiter)

    // Dragon Slash Effect
    if (this.state.dragoncount == 1) {
      setTimeout(() => {
        this.setState({
          dragon: require('../Assets/Images/Dragon/slash_dragon1.gif'),
        });
<<<<<<< HEAD
        slash.play();
      }, 2500);
      setTimeout(() => {
        this.setState({dragon: require('../Assets/Images/Dragon/dragon1.gif')});
      }, 3000);
    } else if (this.state.dragoncount == 2) {
      setTimeout(() => {
=======
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
>>>>>>> 2c7faab (Code refactor on score limiter)
        this.setState({
          dragon: require('../Assets/Images/Dragon/slash_dragon2.gif'),
        });
<<<<<<< HEAD
        slash.play();
      }, 2500);
      setTimeout(() => {
        this.setState({dragon: require('../Assets/Images/Dragon/dragon2.gif')});
      }, 3000);
    } else if (this.state.dragoncount == 3) {
      setTimeout(() => {
=======
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
            break;
        }

>>>>>>> 2c7faab (Code refactor on score limiter)
        this.setState({
          dragon: require('../Assets/Images/Dragon/slash_dragon3.gif'),
        });
        slash.play();
      }, 2500);
      setTimeout(() => {
        this.setState({dragon: require('../Assets/Images/Dragon/dragon3.gif')});
      }, 3000);
    }

    // Enable Attack Button & Update Dragon HP after 3 seconds
    setTimeout(() => {
      this.setState({
        disabled: false,
        sword: require('../Assets/Images/attackbutton.png'),
        hpbar: require('../Assets/Images/Dragon/dragonhp_2.png'),
      });
    }, 3000);
  };

  // Second Attack
  secondAttact = () => {
    spineffect.stop();

    // Play Spin Sound Effect
    spineffect.play();

    // Generate random score
    const randomScore2 = getRandomScore();

    // Disable Attack Button temporarily
    this.setState({
      disabled: true,
      sword: require('../Assets/Images/attackbuttonclicked.png'),
    });

    // Save Score
    this.setState({
      score2: randomScore2,
      totalScore: this.state.totalScore * randomScore2,
    });

    // Animate the Dice
    const Animations = require('./DragonSlayer_Animation.js');
    Animations.diceAnim(
      this.state.dice1anim1,
      this.state.dice1anim2,
      this.state.dice2anim1,
      this.state.dice2anim2,
      this.state.dice3anim1,
      this.state.dice3anim2,
    );

    this.setState({dice3anim1: new Animated.Value(0)});
    this.setState({dice3anim2: new Animated.ValueXY({x: 0, y: 0})});

    this.setState({showDice2: require('../Assets/Images/Dice/dice2empty.png')});

    setTimeout(() => {
      this.setState({
        showDice2: require('../Assets/Images/Dice/dice2empty.png'),
      });
    }, 1400);

    // Animate Explosion and Show score after 1 second
    setTimeout(() => {
      this.setState({
        showExplosion: require('../Assets/Images/explosion.gif'),
        screenScore: randomScore2 + '!',
      });
    }, 1000);

    // Hide score and explosion after 2 seconds
    setTimeout(() => {
      this.setState({screenScore: '', showExplosion: null});
    }, 2000);

    // Dragon Slash Effect
    if (this.state.dragoncount == 1) {
      setTimeout(() => {
        this.setState({
          dragon: require('../Assets/Images/Dragon/slash_dragon1.gif'),
        });
        slash.play();
      }, 2500);
      setTimeout(() => {
        this.setState({dragon: require('../Assets/Images/Dragon/dragon1.gif')});
      }, 3000);
    } else if (this.state.dragoncount == 2) {
      setTimeout(() => {
        this.setState({
          dragon: require('../Assets/Images/Dragon/slash_dragon2.gif'),
        });
        slash.play();
      }, 2500);
      setTimeout(() => {
        this.setState({dragon: require('../Assets/Images/Dragon/dragon2.gif')});
      }, 3000);
    } else if (this.state.dragoncount == 3) {
      setTimeout(() => {
        this.setState({
          dragon: require('../Assets/Images/Dragon/slash_dragon3.gif'),
        });
        slash.play();
      }, 2500);
      setTimeout(() => {
        this.setState({dragon: require('../Assets/Images/Dragon/dragon3.gif')});
      }, 3000);
    }
<<<<<<< HEAD

    // Enable Attack Button & Update Dragon HP after 3 seconds
    setTimeout(() => {
      this.setState({
        disabled: false,
        sword: require('../Assets/Images/attackbutton.png'),
        hpbar: require('../Assets/Images/Dragon/dragonhp_3.png'),
      });
    }, 3000);
  };
  // Third Attack
  thirdAttact = () => {
    spineffect.stop();

    // Play Spin Sound Effect
    spineffect.play();

    // Generate random score
    const randomScore3 = getRandomScore();

    // Disable Attack Button
    this.setState({
      disabled: true,
      sword: require('../Assets/Images/attackbuttonclicked.png'),
    });

    // Save Score
    this.setState({
      score3: randomScore3,
      totalScore: this.state.totalScore * randomScore3,
    });

    // Animate the Dice
    const Animations = require('./DragonSlayer_Animation.js');
    Animations.diceAnim(
      this.state.dice1anim1,
      this.state.dice1anim2,
      this.state.dice2anim1,
      this.state.dice2anim2,
      this.state.dice3anim1,
      this.state.dice3anim2,
    );

    this.setState({showDice3: require('../Assets/Images/Dice/dice3empty.png')});

    // Animate Explosion and Show score after 1 second
    setTimeout(() => {
      this.setState({
        showExplosion: require('../Assets/Images/explosion.gif'),
        screenScore: randomScore3 + '!',
      });
    }, 1000);

    // Hide score and explosion after 2 seconds
    setTimeout(() => {
      this.setState({screenScore: '', showExplosion: null});
    }, 2000);

    // Dragon Slash Effect
    if (this.state.dragoncount == 1) {
      setTimeout(() => {
        this.setState({
          dragon: require('../Assets/Images/Dragon/slash_dragon1.gif'),
          hpbar: require('../Assets/Images/Dragon/dragonhp_4.png'),
        });
        slash.play();
      }, 2500);
      setTimeout(() => {
        this.setState({dragon: require('../Assets/Images/Dragon/dragon1.gif')});
      }, 3000);
    } else if (this.state.dragoncount == 2) {
      setTimeout(() => {
        this.setState({
          dragon: require('../Assets/Images/Dragon/slash_dragon2.gif'),
          hpbar: require('../Assets/Images/Dragon/dragonhp_4.png'),
        });
        slash.play();
      }, 2500);
      setTimeout(() => {
        this.setState({dragon: require('../Assets/Images/Dragon/dragon2.gif')});
      }, 3000);
    } else if (this.state.dragoncount == 3) {
      setTimeout(() => {
        this.setState({
          dragon: require('../Assets/Images/Dragon/slash_dragon3.gif'),
          hpbar: require('../Assets/Images/Dragon/dragonhp_4.png'),
        });
        slash.play();
      }, 2500);
      setTimeout(() => {
        this.setState({dragon: require('../Assets/Images/Dragon/dragon3.gif')});
      }, 3000);
=======
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
            this.state.coins = 0;
            break;
          case 1:
            this.state.coins = 10;
            break;
          case 2:
            this.state.coins = 20;
            break;
          case 3:
            this.state.coins = 30;
            break;
          case 4:
            this.state.coins = 40;
            break;
          case 5:
            this.state.coins = 50;
            break;
          case 6:
            this.state.coins = 100;
            break;
        }

        switch (this.state.Logic) {
          case 0:
            // Show Lose board
            setTimeout(() => {
              this.setState({
                loseBoard: true,
                totalCoins: this.state.coins,
              });
            }, 4000);
            break;
          default:
            this.state.roundCoins = this.state.coins;
            // Show Scoreboard
            setTimeout(() => {
              this.setState({
                scoreBoard: true,
                // scoreBoard: false,
                totalCoins: this.state.coins,
              });
            }, 4000);
            break;
        }
        break;
>>>>>>> 2c7faab (Code refactor on score limiter)
    }

    // Compute Coin Rewards based on total points
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
        let randomNumber;
          randomNumber = Math.floor(Math.random()*100)+1;
          if(randomNumber >= 0 && randomNumber <=50 )
          {
            this.setState({roundCoins: 100}); 
          }
          else if(randomNumber >= 51 && randomNumber <=75 )
          {
            this.setState({roundCoins: 1000}); 
          }
          else if(randomNumber >= 76 && randomNumber <=90 )
          {
            this.setState({roundCoins: 10000}); 
          }
          else if(randomNumber >= 91 && randomNumber <=97 )
          {
            this.setState({roundCoins: 100000}); 
          }
            else if(randomNumber >= 98 && randomNumber <=100 )
          {
            this.setState({roundCoins: 1000000}); 
          }
      } 
      this.state.coins = this.state.totalCoins + this.state.coins;
    }, 2000);

  // Show Scoreboard after 4 seconds
  if(this.state.Logic == 0)
  {
      // Show Scoreboard after 4 seconds
      setTimeout(() => {
        this.setState({loseBoard: true, totalCoins: this.state.coins});
      }, 4000);
      console.log('talo');
    
  }
  else{
  setTimeout(() => {
    this.setState({scoreBoard: true, totalCoins: this.state.coins});
  }, 4000);
}
  };

  // Function called when attack buttonthi is pressed, identifies what is the current attack sequence
  // Then calls the appropriate function
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

  // Function for resetting the state of components / variables
  playAgain = () => {
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
      showDice1: require('../Assets/Images/Dice/dice1.png'),
      showDice2: null,
      showDice3: null,
      score1: '',
      score2: '',
      score3: '',
      Logic: getRandomLogic() ,
      Attact: 1,
      screenScore: '',
      showExplosion: null,
      sword: require('../Assets/Images/attackbutton.png'),
      totalScore: 0,
      scoreBoard: false,
      loseBoard: false,
      hpbar: require('../Assets/Images/Dragon/dragonhp_1.png'),
    });
  };

  render() {
    // Play background music
    bgsound.setVolume(50);
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

    const navigation = this.props.navigation;
    return (
      <ImageBackground
        source={require('../Assets/Images/Background/Background_default.png')}
        style={styles.backgroundImage}>
        <View style={styles.container}>

          {/* Scoreboard (Modal) */}
          <Scoreboard
            visible={this.state.scoreBoard}
            score1={this.state.score1}
            score2={this.state.score2}
            score3={this.state.score3}
            totalScore={this.state.totalScore}
            dice1={this.state.showDice1}
            dice2={this.state.showDice2}
            dice3={this.state.showDice3}
            playAgain={this.playAgain}
            roundCoins={this.state.roundCoins}
          />

          <Loseboard
            visible={this.state.loseBoard}
            score1={this.state.score1}
            score2={this.state.score2}
            score3={this.state.score3}
            totalScore={this.state.totalScore}
            dice1={this.state.showDice1}
            dice2={this.state.showDice2}
            dice3={this.state.showDice3}
            playAgain={this.playAgain}
            roundCoins={this.state.roundCoins}
          />

        
          <View style={styles.firstHalfSpace}>
            {/* Top navigation (Back button and Coins) */}
            <TopNavigation
              navigation={this.navigation}
              totalCoins={this.state.totalCoins}
              hpBar={this.state.hpbar}
            />

            <View style={styles.topSpace} />
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
<<<<<<< HEAD
=======

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
          />
>>>>>>> 2c7faab (Code refactor on score limiter)
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
    fontSize: hp('2%'),
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
});
