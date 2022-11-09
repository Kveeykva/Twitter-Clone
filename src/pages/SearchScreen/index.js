import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  LogBox,
  RefreshControl,
} from 'react-native';
import InputBar from '../../components/InputBar';
import ProfilePicture from '../../components/ProfilePicture';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import SuggestionWhoFollows from '../../components/SuggestionWhoFollows';
import {useDispatch, useSelector} from 'react-redux';
import {selectHome} from '../../redux/Slices/homeSlice';
import {ScrollView} from 'react-native-virtualized-view';

const data = require('./discover.json');
const dataCut = data.slice(0, 5);

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const SearchScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const home = useSelector(selectHome);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const onFollowPress = item => {
    dispatch();
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#1DA1F2']}
        />
      }>
      <View style={styles.container}>
        <View style={styles.header}>
          <ProfilePicture
            style={styles.profilePicture}
            onPressEvent={() => navigation.openDrawer()}
          />
          <InputBar placeholder={"Twitter'da Ara"} />
          <Icon name="settings" style={styles.settingsIcon} />
        </View>
        <View style={styles.turkeyTrends}>
          <Text style={styles.turkeyTrendsText}>Türkiye Gündemleri</Text>
        </View>

        {dataCut.map((item, index) => (
          <View key={index} style={styles.inTrends}>
            <View style={styles.dotView}>
              <Text style={styles.trendsType}> {item.type} </Text>
              <TouchableOpacity style={styles.threeDotView}>
                <Entypo name="dots-three-vertical" style={styles.dotType} />
              </TouchableOpacity>
            </View>
            <Text style={styles.trendsTitle}> {item.title} </Text>
            <Text style={styles.trendsType}> {item.totalCount} </Text>
          </View>
        ))}

        <Pressable
          onPress={() => navigation.navigate('InsideSearch')}
          style={styles.showMoreContainer}>
          <Text style={styles.showMoreText}>Daha fazla göster</Text>
        </Pressable>
        <View style={styles.border}>
          <TouchableOpacity style={styles.whoToFollow}>
            <Text style={styles.whoToFollowText}>Kimi takip etmeli</Text>
          </TouchableOpacity>
          <View style={styles.suggestFollowContainer}>
            <SuggestionWhoFollows
              data={home.suggestions}
              onFollowPress={onFollowPress}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default SearchScreen;
