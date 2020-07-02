import React, { useRef, useEffect, useState } from 'react';
import styles from './styles';
import { View, Animated, Dimensions, Easing, Text } from 'react-native';
import SwipeUpDown from 'react-native-swipe-up-down';

function VirtualBar() {

    return (
        <View style={styles.container}>
       <SwipeUpDown		
    itemMini={<ItemMini />} // Pass props component when collapsed
    itemFull={<ItemFull />} // Pass props component when show full
    onShowMini={() => console.log('mini')}
    onShowFull={() => console.log('full')}
    onMoveDown={() => console.log('down')}
    onMoveUp={() => console.log('up')}
    disablePressToShow={false} // Press item mini to show full
    style={{ backgroundColor: 'green' }} // style for swipe
/>
        </View>
    );
}


export default VirtualBar;