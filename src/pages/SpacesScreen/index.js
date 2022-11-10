import React, {useState} from 'react';
import {Alert, Modal, Text, Pressable, View} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const NewTweetModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <AntDesign
          style={styles.plusIcon}
          name="plus"
          size={30}
          color="white"
        />
      </Pressable>
    </View>
  );
};

export default NewTweetModal;
