import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import PostIcons from '../PostIcons';

const PostBox = ({
  image,
  likes,
  author,
  message,
  comments,
  id,
  profileImage,
}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate('PostScreen', {
          id: id,
          message: message,
          author: author,
          image: image,
        })
      }>
      <View style={styles.container}>
        <View style={styles.leftSide}>
          <Image source={{uri: profileImage}} style={styles.profilePicture} />
        </View>
        <View style={styles.rightSide}>
          <View style={styles.userView}>
            <Text style={styles.user}>{author}</Text>
            <Text style={styles.userName}>{'@' + author}</Text>
            <Entypo name="dots-three-vertical" style={styles.threeDot} />
          </View>
          <View style={styles.commentIcon}>
            <Text style={styles.message}>{message}</Text>
          </View>
          {image && <Image source={{uri: image}} style={styles.postImage} />}
          <PostIcons />
        </View>
      </View>
    </Pressable>
  );
};

export default PostBox;
