import React from 'react';

import {TouchableOpacity, Image} from 'react-native';
import styles from './styles';

function Colecionavel(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: props.img}} style={{width: 100, height: 100}} />
    </TouchableOpacity>
  );
}

export default Colecionavel;
