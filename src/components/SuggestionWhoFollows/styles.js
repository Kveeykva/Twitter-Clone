import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 10,
  },
  name: {
    fontsize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  nickName: {
    fontSize: 12,
    color: '13',
  },
  suggestionContainer: {
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    borderRadius: 10,
    height: 250,
    width: 120,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  insideContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  followButton: {
    backgroundColor: 'black',
    borderRadius: 15,
    width: 100,
    height: 25,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  followButtonText: {
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  yourFollowers: {
    fontSize: 12,
    color: 'grey',
    alignSelf: 'center',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default styles;
