import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const RegisterScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles._container}>
        <View>
          <AntDesign name="twitter" size={30} color={'white'} />
        </View>
        <View style={{marginTop: 80}}>
          <Text style={styles.loginText}> Bugün Twitter'a katıl</Text>
        </View>
        <View style={styles.googleSignInBox}>
          <AntDesign name="google" size={18} color={'#0000FF'} />
          <Text style={styles.registerText}>Google ile kaydolun</Text>
        </View>
        <View style={styles.googleSignInBox}>
          <AntDesign name="apple1" size={18} color={'black'} />
          <Text style={styles.registerText}>Apple ile kaydol</Text>
        </View>
        <Text style={styles.loginText}>veya</Text>
        <View style={styles.googleSignInBox}>
          <Text
            onPress={() => {
              navigation.navigate('RegisterTwitter');
            }}
            style={styles.registerText}>
            Telefon veya e-posta ile kaydol
          </Text>
        </View>
        <View style={styles.policyView}>
          <Text style={styles.policyText}>
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </Text>
        </View>
        <View style={styles.registerView}>
          <Text style={styles.createText}>Zaten bir hesabın var mı?</Text>
          <Text
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={styles.registerTextx}>
            Giriş Yap
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default RegisterScreen;
