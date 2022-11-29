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
    marginLeft: 10,
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
    alignItems: 'center',
  },

  commentIcon: {
    marginVertical: 5,
  },
});

export default styles;
