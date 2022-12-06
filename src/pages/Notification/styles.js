import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  settingsIcon: {
    fontSize: 25,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomColor: 'lightgrey',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
  },
  notifyText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  textTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;
