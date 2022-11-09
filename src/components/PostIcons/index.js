import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from './styles';

const PostIcons = props => {
  return (
    <View style={styles.postIcons}>
      <TouchableOpacity>
        <EvilIcons name="comment" size={22} />
      </TouchableOpacity>
      <TouchableOpacity>
        <EvilIcons name="retweet" size={22} />
      </TouchableOpacity>
      <TouchableOpacity>
        <EvilIcons name="heart" size={22} />
      </TouchableOpacity>
      <TouchableOpacity>
        <EvilIcons name="share-google" size={22} />
      </TouchableOpacity>
    </View>
  );
};
export default PostIcons;
