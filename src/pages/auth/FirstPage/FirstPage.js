import React from 'react';
import { Text, View, Image,TouchableOpacity } from 'react-native';
import styles from './FirstPage.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../../components/Button';

const FirstPage = ({navigation}) => {
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
        >
          <Icon name="google" size={35} />
          <Text style={styles.google_text}>Google İle Oturum Aç</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.facebook}
          >
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
}

export default FirstPage;