import React from 'react';
import {StyleSheet, Text, View, Button, Platform, Slider, StatusBar} from 'react-native';
import {ModelView} from 'react-native-3d-model-view';

import ARModelView, {ModelTypes} from 'react-native-3d-model-view';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class AnimatedModelScreen extends React.Component {
  state = {
    message: '',
    isPlaying: false,
    animationProgress: 0,
  };

  modelView = null;

  static navigationOptions = {
    title: 'Animated model',
  };

  togglePlay = () => {
    const {isPlaying} = this.state;
    isPlaying
      ? this.modelView.stopAnimation()
      : this.modelView.startAnimation();
  };

  sliderValueChange = (value) => {
    const {isPlaying} = this.state;
    this.modelView.setProgress(value);
  };

  onLoadModelStart = () => {
    this.setState({message: 'Loading model...'});
    console.log('[react-native-3d-model-view]:', 'Load model start.');
  };

  onLoadModelSuccess = () => {
    this.setState({message: 'Loading model success!'});
    console.log('[react-native-3d-model-view]:', 'Load model success.');
  };

  onLoadModelError = (error) => {
    this.setState({message: 'Loading model error :('});
    console.log('[react-native-3d-model-view]:', 'Load model error.');
  };

  onAnimationStart = () => {
    this.setState({isPlaying: true});
  };

  onAnimationStop = () => {
    this.setState({isPlaying: false});
  };

  onAnimationUpdate = (event) => {
    this.setState({animationProgress: event.nativeEvent.progress});
  };

  // base model https://github.com/BonnierNews/react-native-3d-model-view/blob/master/example/obj/Hamburger.zip?raw=true

  render() {
    const {message, isPlaying, animationProgress} = this.state;
    return (
      <View style={styles.container}>
         <StatusBar backgroundColor="#BA0C2F" barStyle="dark-content" />
        <View style={styles.modelContainer}>
          <Text style={styles.text}> Toque para mover seu colecionável </Text>
          <ModelView
            style={styles.modelView}
            source={{
              zip: require('../../assets/Corona.zip'),
            }}
            onLoadModelSuccess={this.onLoadModelSuccess}
            onLoadModelError={this.onLoadModelError}
            onAnimationStart={this.onAnimationStart}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BA0C2F',
  },
  modelContainer: {
    padding: 10,
    width: '100%',
  },
  modelView: {
    width: '100%',
    height: 450,
    backgroundColor: 'white',
  },
  buttonContainer: {
    paddingVertical: 10,
  },
  text: {
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
  },
});
