import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, RefreshControl} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts, selectHome} from '../../redux/Slices/homeSlice';
import Header from '../../components/Header';
import PostBox from '../../components/PostBox';
import CreateTweetModal from '../../modal/createTweet';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const HomeScreen = () => {
  const dispatch = useDispatch();
  const home = useSelector(selectHome);

  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(fetchPosts());
    wait(1000).then(() => setRefreshing(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <FlatList
        style={styles.flatlist}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#1DA1F2']}
          />
        }
        data={[...home.posts]}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <PostBox
              image={item.image}
              author={item.author}
              message={item.message}
              likes={item.likes}
              comments={item.comments}
              id={item.id}
              profileImage={item.image}
            />
          );
        }}
      />

      <CreateTweetModal />
    </SafeAreaView>
  );
};
export default HomeScreen;
