import React, {useState, useEffect} from 'react';
import {
  Modal,
  Text,
  Pressable,
  View,
  SafeAreaView,
  TextInput,
} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProfilePicture from '../../components/ProfilePicture';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {createPost} from '../../redux/Slices/homeSlice';

const NewTweetModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        <Formik
          initialValues={{
            message: '',
            image: 'https://picsum.photos/200/300',
            author: 'Serdar Dev',
          }}
          onSubmit={values => dispatch(createPost(values))}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <SafeAreaView style={styles.container}>
              <View style={styles.tabScreen}>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <FontAwesome style={styles.modalClose} name="close" />
                </Pressable>
                <Pressable onPress={handleSubmit} style={styles.tweetButton}>
                  <Text style={styles.tweetButtonText}>Tweetle</Text>
                </Pressable>
              </View>
              <View style={styles.profileLine}>
                <ProfilePicture onPressEvent={() => console.warn('Profile')} />
                <View style={styles.targetView}>
                  <Text style={styles.targetText}>Herkese Açık</Text>
                </View>
              </View>
              <View style={styles.textInputView}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Neler oluyor?"
                  onChangeText={handleChange('message')}
                  value={values.message}
                />
              </View>
            </SafeAreaView>
          )}
        </Formik>
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
