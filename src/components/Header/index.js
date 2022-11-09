import React from 'react';
import ProfilePicture from '../ProfilePicture';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TwitterIcon from '../TwitterIcon';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.topScreen}>
      <ProfilePicture
        style={styles.profilePicture}
        onPressEvent={() => navigation.openDrawer()}
      />
      <View>
        <TwitterIcon style={styles.twitterIcon} />
      </View>
      <View>
        <Icon name="star-cog-outline" style={styles.starIcon} />
      </View>
    </View>
  );
};

export default Header;
