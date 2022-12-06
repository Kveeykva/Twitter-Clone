import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

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
  eye: {
    position: 'absolute',
    right: 10,
    top: 35,
  },
  passwordInput: {
    flexDirection: 'row',
  },
  googleSignIn: {
    color: 'black',
    fontSize: 16,
    marginLeft: 5,
  },
  googleSignInBox: {
    backgroundColor: 'white',
    height: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
});

export default styles;
