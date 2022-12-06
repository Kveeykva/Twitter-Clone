import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Text,
  Pressable,
  Alert,
  Button,
} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';
import * as yup from 'yup';
import authErrorMessageParser from '../utils/authErrorMessageParser';

const registerValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Lütfen geçerli bir e-posta adresi giriniz')
    .required('E-posta adresi zorunludur'),
  password: yup
    .string()
    .min(6, ({min}) => `Şifreniz en az ${min} karakter olmalıdır`)
    .required('Şifre zorunludur'),
});

const RegisterTwitter = ({navigation}) => {
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  const onRegister = values => {
    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        showMessage({
          message: 'Kayıt Başarılı Giriş Yapınız',
          type: 'success',
        });
        navigation.navigate('Login');
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
          <Text style={styles.loginText}> Twitter'a kayıt ol </Text>
        </View>
        <Formik
          validationSchema={registerValidationSchema}
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={onRegister}>
          {({handleChange, handleSubmit, values}) => (
            <View>
              <TextInput
                label="email"
                style={styles.input}
                onChangeText={handleChange('email')}
                value={values.email}
                placeholder="Telefon, e-posta veya kullanıcı adı"
                placeholderTextColor={'grey'}
              />
              <View style={styles.passwordInput}>
                <TextInput
                  label="password"
                  style={styles.input}
                  onChangeText={handleChange('password')}
                  value={values.password}
                  placeholder="Şifre"
                  placeholderTextColor={'grey'}
                  secureTextEntry={visible}
                />
                <TouchableOpacity
                  style={styles.eye}
                  onPress={() => setVisible(!visible)}>
                  <AntDesign name="eyeo" size={20} color={'grey'} />
                </TouchableOpacity>
              </View>
              <Pressable onPress={handleSubmit} style={styles.googleSignInBox}>
                <Text style={styles.googleSignIn}>Kaydol</Text>
              </Pressable>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};
export default RegisterTwitter;
