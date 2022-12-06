import React from 'react';
import {View, SafeAreaView, Pressable} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Drawer, Title, Caption, Text, Switch} from 'react-native-paper';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export function DrawerContent(props) {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.avatar} />
            <Avatar.Image source={require('../assets/images/ayiPP.jpg')} />
          </View>
          <Drawer.Section>
            <DrawerItem
              label="Profile"
              onPress={() => {
                navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              label="Topics"
              onPress={() => {
                navigation.navigate('Topics');
              }}
            />
            <DrawerItem
              label="Bookmarks"
              onPress={() => {
                navigation.navigate('Bookmarks');
              }}
            />
            <DrawerItem
              label="Lists"
              onPress={() => {
                navigation.navigate('Lists');
              }}
            />
            <DrawerItem
              label="Twitter Circle"
              onPress={() => {
                navigation.navigate('TwitterCircle');
              }}
            />
            <DrawerItem
              label="Logout"
              style={{right: 30}}
              icon={() => {
                return (
                  <SimpleLineIcons
                    name="logout"
                    size={20}
                    style={{left: '90%', position: 'absolute'}}
                  />
                );
              }}
              onPress={() => {
                auth().signOut();
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}
