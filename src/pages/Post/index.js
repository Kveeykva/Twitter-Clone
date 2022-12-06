import React, {useEffect, useState} from 'react';
import {View, Image, Text, ActivityIndicator, Button} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import PostIcons from '../../components/PostIcons';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPost, selectHome} from '../../redux/Slices/homeSlice';
import PostBox from '../../components/PostBox';
import {ScrollView} from 'react-native-gesture-handler';

const PostScreen = ({route}) => {
  const [show, setShow] = useState(true);

  const {id, author, message, image} = route.params;
  const dispatch = useDispatch();
  const home = useSelector(selectHome);

  useEffect(() => {
    dispatch(fetchPost(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headBar}>
          <Image source={{uri: image}} style={styles.profilePicture} />
          <View style={styles.rightSide}>
            <View style={styles.userView}>
              <Text style={styles.user}>{author}</Text>

              <Text style={styles.userName}>{'@' + author}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.message}>{message}</Text>
        {image && <Image source={{uri: image}} style={styles.postImage} />}
        <View style={styles.postIcons}>
          <PostIcons />
        </View>

        {!home.post.comments && (
          <ActivityIndicator size="small" color="#1C96E9" />
        )}

        {home.post.comments?.map((item, index) => {
          return (
            <PostBox
              image={item.image}
              profileImage={image}
              author={item.author}
              message={item.message}
              id={item.id}
              key={index}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default PostScreen;
