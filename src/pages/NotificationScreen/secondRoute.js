import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, RefreshControl} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts, selectHome} from '../../redux/Slices/homeSlice';
import PostBox from '../../components/PostBox';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const SecondRoute = () => {
  const dispatch = useDispatch();
  const home = useSelector(selectHome);

  useEffect(() => {
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['#1DA1F2']}
          />
        }
        style={styles.flatlist}
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
    </SafeAreaView>
  );
};

export default SecondRoute;
