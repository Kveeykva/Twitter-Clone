import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {showMessage} from 'react-native-flash-message';
import authErrorMessageParser from '../utils/authErrorMessageParser';
import auth from '@react-native-firebase/auth';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Geçersiz E-Mail Adresi')
    .required('E-Mail Adresi Gerekli'),
  password: yup
    .string()
    .min(6, ({min}) => `Şifreniz en az ${min} karakter olmalıdır.`)
    .required('Şifre Gerekli')
    .matches(/(?=.*[0-9])/, 'Şifreniz en az bir rakam içermelidir.'),
});
const LoginScreen = () => {
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleLogin = values => {
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        showMessage({
          message: 'Giriş Başarılı',
          type: 'success',
        });
        navigation.navigate('DrawerTabs');
      })
      .catch(error => {
        showMessage({
          message: authErrorMessageParser(error.code),
          type: 'danger',
        });
        setLoading(false);
      });
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
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={loginValidationSchema}
            validateOnMount={true}
            onSubmit={handleLogin}>
            {({handleChange, handleSubmit, values, isValid, errors}) => (
              <View>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange('email')}
                  value={values.email}
                  placeholder="Telefon, e-posta veya kullanıcı adı"
                  placeholderTextColor={'grey'}
                />

                {errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
                <View style={styles.passwordInput}>
                  <View>
                    <TextInput
                      label="Password"
                      style={styles.input}
                      onChangeText={handleChange('password')}
                      value={values.password}
                      placeholder="Şifre"
                      placeholderTextColor={'grey'}
                      secureTextEntry={visible}
                    />
                    {errors.password && (
                      <Text style={styles.errorText}>{errors.password}</Text>
                    )}
                  </View>
                  <TouchableOpacity
                    style={styles.eye}
                    onPress={() => setVisible(!visible)}>
                    <AntDesign
                      name={visible ? 'eye' : 'eyeo'}
                      size={18}
                      color="grey"
                    />
                  </TouchableOpacity>
                </View>
                <Pressable
                  rounded
                  disabled={!isValid}
                  onPress={handleSubmit}
                  loading={loading}
                  style={[
                    styles.signInButton,
                    {backgroundColor: isValid ? '#00acee' : 'white'},
                  ]}>
                  <Text style={styles.googleSignIn}>İleri</Text>
                </Pressable>
              </View>
            )}
          </Formik>
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
