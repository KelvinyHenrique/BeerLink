import React, {useRef, useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import YoutubePlayer from 'react-native-youtube-iframe';

import Chat from './Chat';

function interationBar(name) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        alignItems:'center',
        marginBottom:5,
      }}>
      <Image
        source={{
          uri:
            'https://cdn-istoe-ssl.akamaized.net/wp-content/uploads/sites/14/2018/09/mariana-rios.jpg',
        }}
        style={{
          height: 40,
          width: 40,
          borderRadius:20,
        }}
      />
      <Text
        style={{
          padding: 10,
          justifyContent: 'center',
          fontSize: 20,
          color: 'white',
        }}>
        {name}
      </Text>
      <Text
        style={{
          backgroundColor: 'green',
          height: 20,
          color: 'white',
          borderRadius: 10,
          width: 70,
          textAlign: 'center',
          textWidth: 'bold',
        }}>
        online
      </Text>
      <View
        style={{
          marginBottom: 30,
        }}
      />
    </View>
  );
}

export default function App() {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  return (
    <View style={styles.container}>
      <View style={{
        width:'100%',
        height:250
      }}>
         <YoutubePlayer
        ref={playerRef}
        height={200}
        videoId={'gjit4OgRZFM'}
        play={playing}
        onChangeState={(event) => console.log(event)}
        onReady={() => console.log('ready')}
        onError={(e) => console.log(e)}
        onPlaybackQualityChange={(q) => console.log(q)}
        volume={40}
        playbackRate={1}
        playerParams={{
          cc_lang_pref: 'pt',
          showClosedCaptions: true,
        }}
      />
      </View>
     
      <View
        style={{
          height: 420,
          backgroundColor: '#2E2E2E',
          borderRadius: 20,
        }}>
        <View
          style={{
            display: 'flex',
            marginLeft: 30,
            justifyContent: 'center',
          }}>
          {interationBar('Ananda')}
        </View>
        <View
          style={{
            height: '100%',
            backgroundColor: '#E6E6E6',
            borderRadius: 20,
            marginTop: 3,
          }}>
          <Chat />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 0,
  },
});
