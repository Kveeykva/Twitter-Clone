import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import styles from './styles';
import ProfilePicture from '../../components/ProfilePicture';
import InputBar from '../../components/InputBar';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import {selectHome} from '../../redux/Slices/homeSlice';

const MessageScreen = ({navigation}) => {
  const home = useSelector(selectHome);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    return () => {};
  }, []);

  const src = text => {
    setInputValue(text);
  };

  const MessageView = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.messagesContainer}>
          <View style={styles.messageView}>
            <View style={styles.userContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>{item.nickname}</Text>
            </View>
            <Text style={styles.message} numberOfLines={2}>
              {item.message}
            </Text>
          </View>
          <Pressable style={styles.imageView}>
            <Image style={styles.image} source={{uri: item.profilePicture}} />
          </Pressable>
        </View>
      </TouchableOpacity>
    );
  };

  const x = y => {
    return y.messages.filter(item =>
      item.nickname.toLowerCase().includes(inputValue.toLowerCase()),
    );
  };

  const renderPage = () => {
    if (inputValue.length <= 0) {
      return (
        <View>
          <FlatList
            data={home.messages}
            keyExtractor={(item, index) => index.toString()}
            renderItem={MessageView}
          />
        </View>
      );
    }
    return (
      <View>
        <FlatList
          data={x(home)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={MessageView}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ProfilePicture
          style={styles.profilePicture}
          onPressEvent={() => navigation.openDrawer()}
        />
        <InputBar
          placeholder={'Direkt Mesajlarda Ara'}
          value={inputValue}
          onChangeText={text => src(text)}
        />
        <Icon name="settings" style={styles.settingsIcon} />
      </View>
      {renderPage()}
    </View>
  );
};

export default MessageScreen;
