import React, {useRef, useEffect} from 'react';
import Albert from '../../assets/albert.svg';
import Chat from '../../assets/chat.svg';
import {
  View,
  Animated,
  Dimensions,
  Easing,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {
  TextInput,
  TouchableHighlight,
  ScrollView,
} from 'react-native-gesture-handler';
import styles from './styles';

function UserMessage(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{width: '50%', flexDirection: 'row'}}>
        <Image
          style={{height: 50, width: 50, borderRadius: 12}}
          source={{
            uri: props.img,
          }}
        />
        <View
          style={{
            width: '100%',
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginLeft: 15,
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>{props.name}</Text>
          <Text style={{fontSize: 14, color: '#CECECE'}}>{props.locale}</Text>
        </View>
      </View>

      <View
        style={{
          width: '50%',
          height: '100%',
          justifyContent: 'flex-end',
          flexDirection: 'row',
          alignItems: 'flex-end',
          backgroundColor: '#F87060',
          width: 95,
          height: 40,
          borderRadius: 3,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 13,
            color: '#fff',
            padding: 5,
          }}>
          {props.rank}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default UserMessage;
