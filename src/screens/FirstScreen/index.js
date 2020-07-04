import React from 'react';
import styles from './styles';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from 'react-native';
import GoogleIcon from '../../assets/google.svg';
import {useNavigation} from '@react-navigation/native';
import Logo from '../../assets/BeerLink_transparente.png';

function FirstScreen() {
  const navigation = useNavigation();
  const handleNavigationLogin = () => {
    navigation.navigate('Login');
  };

  const handleNavigationSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <View style={styles.BoxContent}>
        <Image
          source={Logo}
          style={{
            height: 240,
            width: 350,
            alignSelf: 'center',
          }}
        />
        <View style={styles.boxHello}>
          <View>
            <Text style={styles.title}>Bem Vindo!</Text>
          </View>
        </View>
        <View style={styles.boxButons}>
          <TouchableHighlight
            style={styles.btnsigninGoogle}
            onPress={handleNavigationLogin}
            underlayColor="#FFF">
            <View
              style={{
                flexDirection: 'row-reverse',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '70%',
              }}>
              <Text style={styles.goToLogin}>Faça login no Google</Text>
              <GoogleIcon width={25} height={25} />
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.btncreateAccount}
            onPress={handleNavigationSignIn}
            underlayColor="transparent">
            <Text style={styles.btnTextcreateAccount}>Crie sua conta</Text>
          </TouchableHighlight>
        </View>

        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 17, marginRight: 7, color: '#FFF'}}>
            Já tem uma conta?
          </Text>
          <TouchableOpacity onPress={handleNavigationLogin}>
            <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 16}}>
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default FirstScreen;
