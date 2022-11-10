import {StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: windowHeight,
    marginHorizontal: 10,
  },
  modalClose: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  tabScreen: {
    backgroundColor: 'white',
    shadowColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  profileLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonOpen: {
    backgroundColor: '#00ACEE',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },

  tweetButton: {
    marginBottom: 15,
    textAlign: 'center',
    backgroundColor: '#00ACEE',
    borderRadius: 25,
    width: 65,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tweetButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  plusIcon: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  targetText: {
    color: '#00ACEE',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  targetView: {
    borderWidth: 1,
    borderColor: '#00ACEE',
    borderRadius: 25,
    width: 100,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export default styles;
