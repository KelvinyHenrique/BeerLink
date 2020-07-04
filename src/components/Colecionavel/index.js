import React from 'react';

import {TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

function Colecionavel(props) {
  const nativagation = useNavigation();
  const handleModelNavigation = () => {
    nativagation.navigate('Model');
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onLongPress={handleModelNavigation}>
      <Image source={{uri: props.img}} style={{width: 100, height: 100}} />
    </TouchableOpacity>
  );
}

export default Colecionavel;
