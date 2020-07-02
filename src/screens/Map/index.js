import React from 'react';
import {View, Text, Image} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';

import styles from './style';

export default function Map({navigation}) {
  const mapStyle = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#1d2c4d',
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#8ec3b9',
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#1a3646',
        },
      ],
    },
    {
      featureType: 'administrative.country',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#4b6878',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#64779e',
        },
      ],
    },
    {
      featureType: 'administrative.province',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#4b6878',
        },
      ],
    },
    {
      featureType: 'landscape.man_made',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#334e87',
        },
      ],
    },
    {
      featureType: 'landscape.natural',
      elementType: 'geometry',
      stylers: [
        {
          color: '#023e58',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#283d6a',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#6f9ba5',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#1d2c4d',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#023e58',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#3C7680',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#304a7d',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#98a5be',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#1d2c4d',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#2c6675',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#255763',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#b0d5ce',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#023e58',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#98a5be',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#1d2c4d',
        },
      ],
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#283d6a',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [
        {
          color: '#3a4762',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#0e1626',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#4e6d70',
        },
      ],
    },
  ];

  const trades = [
    {
      _id: '5e83ff309460a90023a29ea3',
      name: 'Jon Doe s friends room',
      description: 'come on',
      phone: '123123123123',
      latitude: -16.7273538 - 0.001,
      longitude: -43.8717676 - 0.002,
    },
    {
      _id: '5e84012a1e70e75a4a9948a4',
      name: 'Alex s Bar',
      description: 'Chat at the bar is open for customers to enjoy',
      phone: '123123123123',
      latitude: -16.7273538 - 0.01,
      longitude: -43.8717676 + 0.01,
    },
    {
      _id: '5e8401411e70e75a4a9948a6',
      name: 'square',
      description: ' Come and chat with your friends in the square!',
      phone: '123123123123',
      latitude: -16.7273538 + 0.01,
      longitude: -43.8717676 - 0.01,
    },
    {
      _id: '5e8409ebe2d4de00237239d0',
      name: 'Jon Doe s friends room',
      description: 'Rock on!',
      phone: '123123123123',
      latitude: -16.7273538 + 0.02,
      longitude: -43.8717676 + 0.002,
    },
  ];

  return (
    <MapView
      initialRegion={{
        latitude: -16.7273538,
        longitude: -43.8717676,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
      }}
      style={styles.map}
      customMapStyle={mapStyle}>
      <Marker
        coordinate={{
          latitude: -16.7273538,
          longitude: -43.8717676,
        }}
      />

      {trades.map((trade) => (
        <Marker
          key={trade._id}
          coordinate={{
            latitude: trade.latitude - 0.01,
            longitude: trade.longitude,
          }}>
          <Image
            style={styles.marker}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEcpNkiOvDUOu8zcc-EQAGMW8LWk-fjE2MOg&usqp=CAU',
            }}
          />

          <Callout
            onPress={() => {
              navigation.navigate('Chat');
            }}>
            <View style={styles.callout}>
              <Text style={styles.name}>{trade.name}</Text>
              <Text style={styles.description}>{trade.description}</Text>
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
}
