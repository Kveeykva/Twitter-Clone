import {StyleSheet} from 'react-native';

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
  registerText: {
    color: 'black',
    fontSize: 14,
    marginLeft: 5,
  },
  policyText: {
    color: 'grey',
    fontSize: 12,
    marginTop: 20,
  },
  policyView: {
    width: '80%',
  },
  createText: {
    color: 'grey',
    fontSize: 14,
  },
  registerTextx: {
    color: '#1DA1F2',
    fontSize: 14,
    marginLeft: 5,
  },
  registerView: {
    flexDirection: 'row',
    width: '80%',
    marginTop: 20,
  },
});

export default styles;
