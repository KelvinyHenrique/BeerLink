import React, {useRef, useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';

import YoutubePlayer from 'react-native-youtube-iframe';

import Chat from './Chat/index';

// You can import from local files

// or any pure javascript modules available in npm
import {Avatar} from 'react-native-paper';

const interations = [
  {
    name: 'Tio Bill',
    image: "https://conteudo.imguol.com.br/c/noticias/45/2020/02/19/bill-gates-1582117373404_v2_1920x1280.jpg"
  },
   {
    name: 'Caio',
    image: "https://avatars3.githubusercontent.com/u/5342402?s=460&v=4"
  },
   {
    name: 'Prates',
    image: "https://avatars3.githubusercontent.com/u/36752711?s=400&u=740b3ce32fb6ce710151f66bdf65cc0cc3580cdc&v=4"
  },
  {
    name: 'Kelviny',
    image: 'https://avatars0.githubusercontent.com/u/21090726?s=460&v=4'
  },
  {
    name: 'Xavier',
    image: 'https://avatars1.githubusercontent.com/u/923036?s=460&u=a90ab684aa7beac6bc069f9f5b2d8846e06fc6c0&v=4'

  },
  {
    name: "Parisam",
    image: 'https://avatars1.githubusercontent.com/u/43146130?s=460&u=f8139d0d5daeb365690fafa76d3c3a03240236f5&v=4'
  }
]

function interationBar(image,name){
  return(
    <View> 
      <Avatar.Image size={40} source={{uri: image}} />
      <Text style={{
        padding: 10
      }}>
       {name}
      </Text>
    </View> 
  ); 
}


export default function App() {

const playerRef = useRef(null);
const [playing, setPlaying] = useState(true);

  return (
    <View style={styles.container}>
  <YoutubePlayer

  ref={playerRef}
  height={200}
  videoId={"8KrokLPJIFs"}
  play={playing}
  onChangeState={event => console.log(event)}
  onReady={() => console.log("ready")}
  onError={e => console.log(e)}
  onPlaybackQualityChange={q => console.log(q)}
  volume={40}
  playbackRate={1}
  playerParams={{
    cc_lang_pref: "pt",
    showClosedCaptions: true
  }}
/>
<View style={{
  height: 320, 
  backgroundColor: "#FfF",
  borderRadius: 20
}}>
  <Text style={{
    color: "#7C7C7C",
    marginLeft: 32, 
    marginBottom: 5,
    size: 21

  }}>
  Últimas Interações 
  </Text>
  <View style={{
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20
  }}>
    {interations.map((e)=>interationBar(e.image, e.name))}
  </View>
      <View style={{
        height: 230, 
        backgroundColor: "#E6E6E6",
        borderRadius: 20,
        marginTop: 3
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