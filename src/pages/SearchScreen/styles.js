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
  },
  turkeyTrends: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
  turkeyTrendsText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  inTrends: {
    marginVertical: 5,
    marginHorizontal: 10,
  },
  trendsType: {
    color: 'grey',
    fontSize: 12,
  },
  trendsTitle: {
    fontWeight: 'bold',
    fontSize: 13,
    color: 'black',
  },
  dotView: {
    flexDirection: 'row',
  },
  dotType: {
    fontSize: 12,
    color: 'grey',
  },
  threeDotView: {
    marginLeft: 'auto',
  },
  showMoreText: {
    color: '#1D9BF0',
  },
  showMoreContainer: {
    marginTop: 25,
    marginBottom: 10,
    marginHorizontal: 10,
    borderBottomColor: 'lightGrey',
  },
  whoToFollow: {
    marginVertical: 10,
  },
  whoToFollowText: {
    fontWeight: 'bold',
    color: 'black',
    fontsize: 16,
    marginTop: 10,
  },
  border: {
    borderTopWidth: 0.5,
    borderTopColor: 'lightgrey',
    marginHorizontal: 10,
  },
  suggestFollowContainer: {
    marginHorizontal: -5,
  },
});

export default styles;
