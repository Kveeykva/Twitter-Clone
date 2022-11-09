import React from 'react';
import {View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const ProfilePicture = ({onPressEvent}) => {
  return (
    <View>
      <Pressable onPress={onPressEvent}>
        <Icon name="user" style={styles.profilePictureIcon} />
      </Pressable>
    </View>
  );
};
export default ProfilePicture;
