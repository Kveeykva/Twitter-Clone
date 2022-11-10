import * as React from 'react';
import {
  Animated,
  View,
  TouchableOpacity,
  Text,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import FirstRoute from './firstRoute';
import SecondRoute from './secondRoute';
import ProfilePicture from '../../components/ProfilePicture';
import Entypo from 'react-native-vector-icons/Feather';
import styles from './styles';
import CreateTweetModal from '../../modal/createTweet';

function NotificationScreen({navigation}) {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Tümü'},
    {key: 'second', title: 'Bahsedenler'},
  ]);

  const _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 0.5,
            ),
          });

          return (
            <TouchableOpacity
              key={i}
              style={styles.tabItem}
              onPress={() => setIndex(i)}>
              <Animated.Text style={[styles.textTitle, {opacity}]}>
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <ProfilePicture
            style={styles.profilePicture}
            onPressEvent={() => navigation.openDrawer()}
          />
          <Text style={styles.notifyText}>Bildirimler</Text>
          <Pressable>
            <Entypo name="settings" style={styles.settingsIcon} />
          </Pressable>
        </View>
      </View>

      <TabView
        navigationState={{index, routes}}
        renderScene={_renderScene}
        renderTabBar={_renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
      <CreateTweetModal />
    </>
  );
}

export default NotificationScreen;
