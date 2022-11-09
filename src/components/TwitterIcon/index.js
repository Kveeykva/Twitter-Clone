import React from 'react';
import {View} from 'react-native';
import TwitterBirdIcon from 'react-native-vector-icons/AntDesign';

const TwitterIcon = props => {
  return (
    <View>
      <TwitterBirdIcon name="twitter" color={props.color} style={props.style} />
    </View>
  );
};
export default TwitterIcon;
