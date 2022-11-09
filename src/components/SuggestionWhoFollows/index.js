import React from 'react';
import {View, Text, FlatList, Image, Pressable} from 'react-native';
import styles from './styles';

const SuggestionWhoFollows = ({data, onFollowPress}) => {
  const onFollowPressFunc = item => () => {
    onFollowPress(item);
  };

  return (
    <View>
      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.suggestionContainer}>
            <View style={styles.insideContainer}>
              <Image
                style={styles.profilePicture}
                source={{uri: item.profilePicture}}
              />
              <Text numberOfLines={1} style={styles.name}>
                {item.name}
              </Text>
              <Text style={styles.nickName}>{item.nickname} </Text>
            </View>
            <View>
              <Pressable
                onPress={onFollowPressFunc(item)}
                style={styles.followButton}>
                <Text style={styles.followButtonText}>
                  {item.isFollowed ? 'Takip Ediliyor' : 'Takip Et'}
                </Text>
              </Pressable>
            </View>
            <View>
              <Text style={styles.yourFollowers}> {item.yourFollowers} </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default SuggestionWhoFollows;
