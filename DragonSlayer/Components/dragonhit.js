import React from 'react'
import slsh from '../Assets/Audio/sfx_slash.mp3';
import Sound from 'react-native-sound';
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

const dragonhit = (props) => {
    
if (props.dragonCount == 1) {
    setTimeout((props) => {
        props.setState({dragon: require('../Assets/Images/slash_dragon1.gif')});
        slash.play();
        console.log("Attack");
    }, 2500);
    setTimeout(() => {
        this.setState({dragon: require('../Assets/Images/dragon1.gif')});
    }, 3000);
    } 
    else if (props.dragonCount == 2) {
    setTimeout(() => {
        this.setState({dragon: require('../Assets/Images/slash_dragon2.gif')});
        slash.play();
        console.log("Attack");
    }, 2500);
    setTimeout(() => {
        this.setState({dragon: require('../Assets/Images/dragon2.gif')});
    }, 3000);
    } 
    else if (props.dragonCount == 3) {
    setTimeout(() => {
        this.setState({dragon: require('../Assets/Images/slash_dragon3.gif')});
        slash.play();
        console.log("Attack");
    }, 2500);
    setTimeout(() => {
        this.setState({dragon: require('../Assets/Images/dragon3.gif')});
    }, 3000);
    }

    setTimeout(() => {
    this.setState({
        disabled: false,
        sword: require('../Assets/Images/attackbutton.png'),
    });
    }, 3000);
    
}

export default dragonhit
