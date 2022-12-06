import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  _container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  googleSignIn: {
    color: 'black',
    fontSize: 16,
    marginLeft: 5,
  },
  googleSignInBox: {
    backgroundColor: 'white',
    width: '80%',
    height: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  input: {
    height: 45,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
    width: windowWidth - 80,
    marginTop: 20,
    paddingLeft: 10,
    textDecorationLine: 'none',
    color: 'grey',
    backgroundColor: 'white',
  },
  forgetPasswordBox: {
    backgroundColor: 'black',
    width: '80%',
    height: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
  },
  forgetPassword: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  createText: {
    color: 'grey',
    fontSize: 14,
    textAlign: 'left',
  },
  registerText: {
    color: '#1DA1F2',
    fontSize: 14,
    marginLeft: 5,
  },
  registerView: {
    flexDirection: 'row',
    marginTop: 20,
    width: '80%',
  },
  eye: {
    position: 'absolute',
    right: 10,
    top: 35,
  },
  passwordInput: {
    flexDirection: 'row',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginLeft: 10,
  },
  signInButton: {
    height: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
});

export default styles;
