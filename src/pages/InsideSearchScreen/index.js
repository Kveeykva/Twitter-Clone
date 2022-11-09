import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const data = require('../SearchScreen/discover.json');

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const InsideSearchScreen = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.turkeyTrends}>
        <Text style={styles.turkeyTrendsText}>Türkiye Gündemleri</Text>
      </View>
      <FlatList
        data={data}
        refreshing={refreshing}
        onRefresh={onRefresh}
        renderItem={({item}) => (
          <View style={styles.inTrends}>
            <View style={styles.dotView}>
              <Text style={styles.trendsType}> {item.type} </Text>
              <TouchableOpacity style={styles.threeDotView}>
                <Entypo name="dots-three-vertical" style={styles.dotType} />
              </TouchableOpacity>
            </View>
            <Text style={styles.trendsTitle}> {item.title} </Text>
            <Text style={styles.trendsType}> {item.totalCount} </Text>
          </View>
        )}
      />
    </View>
  );
};
export default InsideSearchScreen;
