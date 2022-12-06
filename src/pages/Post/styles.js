import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    borderTopWidth: 0.5,
    borderTopColor: 'lightgrey',
    paddingVertical: 10,
  },

  rightSide: {
    flex: 1,
    paddingLeft: 10,
  },
  profilePicture: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },

  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginVertical: 5,
  },
  user: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  userName: {
    textTransform: 'lowercase',
  },
  userView: {
    flexDirection: 'column',
  },
  threeDot: {
    fontSize: 12,
    color: (83, 100, 113),
    paddingRight: 10,
    marginLeft: 'auto',
  },
  message: {
    fontSize: 15,
    color: 'black',
    marginVertical: 5,
  },
  postIcons: {
    marginVertical: 10,
  },
  headBar: {flexDirection: 'row', alignItems: 'center'},
});

export default styles;
