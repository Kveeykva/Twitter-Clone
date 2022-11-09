import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderTopWidth: 0.5,
    borderTopColor: 'lightgrey',
    paddingVertical: 10,
  },
  leftSide: {
    width: 50,
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
    aspectRatio: 1,
    borderRadius: 15,
    marginVertical: 5,
  },
  user: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  userName: {
    marginLeft: 10,
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

  commentIcon: {
    marginVertical: 5,
  },
});

export default styles;
