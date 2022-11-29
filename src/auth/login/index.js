import React, {useState} from 'react';
import {View, Text, SafeAreaView, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {Formik} from 'formik';

const LoginScreen = ({navigation}) => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles._container}>
        <View>
          <AntDesign name="twitter" size={30} color={'white'} />
        </View>
        <View style={{marginTop: 80}}>
          <Text style={styles.loginText}> Twitter'a giriş yap </Text>
        </View>
        <View style={styles.googleSignInBox}>
          <AntDesign name="google" size={18} color={'#0000FF'} />
          <Text style={styles.googleSignIn}>Google ile oturum açın</Text>
        </View>
        <View style={styles.googleSignInBox}>
          <AntDesign name="apple1" size={18} color={'black'} />
          <Text style={styles.googleSignIn}>Apple ile Giriş Yap</Text>
        </View>
        <View>
          <Text style={styles.loginText}>veya</Text>
          <Formik>
            <TextInput
              style={styles.input}
              onChangeText={setText}
              value={text}
              placeholder="Telefon, e-posta veya kullanıcı adı"
              placeholderTextColor={'grey'}
            />
          </Formik>
        </View>
        <View style={styles.googleSignInBox}>
          <Text onPress={handleLogin} style={styles.googleSignIn}>
            İleri
          </Text>
        </View>
        <View style={styles.forgetPasswordBox}>
          <Text style={styles.forgetPassword}>Şifreni mi unuttun?</Text>
        </View>
        <View style={styles.registerView}>
          <Text style={styles.createText}>Hesabın yok mu?</Text>
          <Text
            onPress={() => {
              navigation.navigate('Register');
            }}
            style={styles.registerText}>
            Kaydol
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
