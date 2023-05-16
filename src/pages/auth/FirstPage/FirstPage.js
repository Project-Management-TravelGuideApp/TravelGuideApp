import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './FirstPage.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../../components/Button';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/firestore';


const FirstPage = ({navigation}) => {
  //for google sign in
  const [userGoogleData, setUserGoogleData] = useState({});

  //for firebase google-sign-in
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '311112857802-vkp8pumgmki24l0sopq86tg6fgplr5i6.apps.googleusercontent.com',
    });
  }, []);

  //google-sign-in
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId:
      '311112857802-vkp8pumgmki24l0sopq86tg6fgplr5i6.apps.googleusercontent.com',
    offlineAccess: true,
    hostedDomain: '',
    forceCodeForRefreshToken: true,
    accountName: '',
    iosClientId: '<FROM DEVELOPER CONSOLE>',
    googleServicePlistPath: '',
    openIdRealm: '',
    profileImageSize: 120,
  });

  const googleSignIn = async () => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    navigation.navigate('HomePage');
    return auth().signInWithCredential(googleCredential);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../components/assets/logo_transparent.png')}
      />
      <Text style={styles.header}>Travel Guide App</Text>

      <View style={styles.body_container}>
        <TouchableOpacity
          style={styles.google}
          onPress={() =>
            googleSignIn()
              .then(res => {
                console.log(res.user);
                setUserGoogleData(res.user);
              })
              .catch(error => console.log(error))
          }>
          <Icon name="google" size={35} />
          <Text style={styles.google_text}>Google İle Oturum Aç</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.facebook}>
          <Icon name="facebook" size={40} />
          <Text style={styles.facebook_text}>Facebook İle Oturum Aç</Text>
        </TouchableOpacity>

        <Button onPress={() => navigation.navigate('SignIn')} text="Kayıt Ol" />
      </View>

      <View style={styles.footer_container}>
        <Text style={styles.question_text}>Zaten bir hesabınız var mı?</Text>
        <TouchableOpacity style={styles.login}>
          <Text
            style={styles.login_text}
            onPress={() => navigation.navigate('Login')}>
            Giriş Yap
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FirstPage;
