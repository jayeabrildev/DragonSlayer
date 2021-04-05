import Sound from 'react-native-sound';
import bgmusic_gameplay from '../Assets/Audio/bgmusic_gameplay.mp3';
Sound.setCategory('Playback');

var bgmusic = new Sound(bgmusic_gameplay, Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log(
    'duration in seconds: ' +
      bgmusic.getDuration() +
      'number of channels: ' +
      bgmusic.getNumberOfChannels(),
  );
});
