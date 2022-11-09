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
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);

  const home = useSelector(selectHome);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const fetchPosts = () => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       setFilteredData(responseJson);
  //       setMasterData(responseJson);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };

  // const searchFilterFunction = text => {
  //   if (text) {
  //     const newData = masterData.filter(item => {
  //       const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
  //       const textData = text.toUpperCase();
  //       return itemData.indexOf(textData) > -1;
  //     });
  //     setFilteredData(newData);
  //     setSearch(text);
  //   } else {
  //     setFilteredData(masterData);
  //     setSearch(text);
  //   }
  // };

  const src = text => {
    setInputValue(text);
    console.log(inputValue, 'a');
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

      {inputValue &&
        home.messages
          .filter(item => item.toLowerCase().includes(inputValue.toLowerCase()))
          .map(x => <MessageView item={x} />)}
      <FlatList
        data={home.messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={MessageView}
      />
    </View>
  );
};

export default MessageScreen;
