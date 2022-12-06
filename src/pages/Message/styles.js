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
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  name: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  messagesContainer: {
    marginHorizontal: 10,
    marginVertical: 5,
  },

  imageView: {
    position: 'absolute',
  },
  messageView: {
    marginLeft: '17%',
    marginRight: '10%',
  },
});

export default styles;
