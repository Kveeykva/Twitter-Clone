import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    zIndex: 99,
  },

  profilePicture: {
    marginRight: 10,
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  ppView: {
    height: '100%',
    flex: 1,
  },

  postImage: {
    width: '100%',
    height: 300,
    borderRadius: 15,
  },
  user: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  userName: {
    marginLeft: 10,
    textTransform: 'lowercase',
  },
  userView: {
    flexDirection: 'row',
  },
  threeDot: {
    fontSize: 12,
    color: (83, 100, 113),
    paddingRight: 10,
    marginLeft: 'auto',
  },
});

export default styles;
