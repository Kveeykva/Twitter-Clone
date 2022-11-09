import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  topScreen: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
    top: 0,
    left: 0,
    right: 0,
    height: 45,
  },
  starIcon: {
    fontSize: 25,
  },
  twitterIcon: {
    fontSize: 25,
    color: '#1C9CEA',
  },
});

export default styles;
