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
  SafeAreaView,
} from 'react-native';
import {
  TextInput,
  TouchableHighlight,
  ScrollView,
} from 'react-native-gesture-handler';
import styles from './styles';
import UserMessage from '../../components/UserMessage';
import Colecionavel from '../../components/Colecionavel';
import {useNavigation} from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();
  const handleMapNavigation = () => {
    navigation.navigate('Mapa');
  };
  const handleScanNavigation = () => {
    navigation.navigate('QrScanner');
  };
  const handlePrivateNavigation = () => {
    navigation.navigate('Private');
  };
  const handleProfileNavigation = () => {
    navigation.navigate('Profile');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.profilesTop}>
        <TouchableOpacity onPress={handleProfileNavigation}>
          <Image
            source={{
              uri:
                'https://avatars3.githubusercontent.com/u/36752711?s=460&u=740b3ce32fb6ce710151f66bdf65cc0cc3580cdc&v=4',
            }}
            style={{
              height: 64,
              width: 64,
              borderRadius: 5,
            }}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.beerLinkText}>Beer</Text>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FB7800'}}>
            Link
          </Text>
        </View>
        <TouchableOpacity
          style={styles.boxChat}
          onPress={handlePrivateNavigation}>
          <Chat width={25} height={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.topContainer}>
        <Text style={styles.totalHours}>2.000</Text>
        <Text style={styles.barHours}>Horas de bar</Text>
        <View style={styles.btnBtn}>
          <TouchableOpacity style={styles.btnTop}>
            <Text
              style={{fontSize: 15, fontWeight: 'bold', color: '#BA0C2F'}}
              onPress={handleScanNavigation}>
              Escanear QrCode
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnTop}>
            <Text
              style={{fontSize: 15, fontWeight: 'bold', color: '#BA0C2F'}}
              onPress={handleMapNavigation}>
              Entrar no bar
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          width: '90%',
          height: 250,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            marginTop: 15,
            marginBottom: 5,
            fontSize: 17,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#7E7E7E',
          }}>
          Colecionáveis
        </Text>
        <View style={{width: '100%', height: 120, marginBottom: 4}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Colecionavel
              img={
                'https://w7.pngwing.com/pngs/367/225/png-transparent-fizzy-drinks-beer-bottle-cap-computer-icons-beer-text-beer-bottle-plastic-bottle.png'
              }
            />
            <Colecionavel
              img={
                'https://free3d.com/imgd/l51516-bottle-beer-corona-78921.jpg'
              }
            />
            <Colecionavel
              img={
                'https://ae01.alicdn.com/kf/HTB1cFGTcGzB9uJjSZFMq6xq4XXa6/Bateria-Caneca-Em-Mudan-a-Da-Cor-Sens-vel-Ao-Calor-do-Copo-de-Caf.jpg'
              }
            />
          </ScrollView>
        </View>
      </View>

      <View
        style={{
          width: '90%',
          height: 140,
          alignSelf: 'center',
        }}>
        <Text
          style={{
            marginTop: 0,
            fontSize: 17,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#7E7E7E',
          }}>
          Top 10
        </Text>
        <View style={{width: '100%', height: 235, paddingTop: 3}}>
          <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
            <UserMessage
              name={'João das Neves'}
              locale={'Montes Claros - MG'}
              rank={'500 pontos'}
              img={
                'https://avatars3.githubusercontent.com/u/36752711?s=460&u=740b3ce32fb6ce710151f66bdf65cc0cc3580cdc&v=4'
              }
            />
            <UserMessage
              name={'Zé do bar'}
              locale={'Curitiba - PR'}
              rank={'260 pontos'}
              img={'https://avatars3.githubusercontent.com/u/5342402?s=460&v=4'}
            />
            <UserMessage
              name={'Rei do Achocolatado'}
              locale={'Caratinga - MG'}
              rank={'020 pontos'}
              img={
                'https://avatars0.githubusercontent.com/u/21090726?s=460&v=4'
              }
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
