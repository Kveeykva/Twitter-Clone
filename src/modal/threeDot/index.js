import React from 'react';
import {TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const ThreeDot = props => {
  return (
    <TouchableOpacity style={styles.threeDotView}>
      <Entypo name="dots-three-vertical" style={styles.threeDot} />
    </TouchableOpacity>
  );
};
export default ThreeDot;
