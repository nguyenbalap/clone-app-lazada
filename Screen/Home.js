/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Component} from 'react';

import HomeScreen from './HomeScreen';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TabHomeScreen from '../IconTab/TabHomeScreen';
import {connect} from 'react-redux';
import Account from './Account';
const Tab = createBottomTabNavigator();

const tabIcon = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    let iconName;
    switch (route.name) {
      case 'Cho bạn':
        iconName = focused ? 'heart' : 'heart';
        break;
      case 'Dạo':
        iconName = focused ? 'gratipay' : 'gratipay';
        break;
      case 'Tin nhắn':
        iconName = focused ? 'comment-dots' : 'comment-dots';
        break;
      case 'Giỏ hàng':
        iconName = focused ? 'shopping-cart' : 'shopping-cart';
        break;
      case 'Tài khoản':
        iconName = focused ? 'user' : 'user';
        break;
      case 'Tài khoản ':
        iconName = focused ? 'user' : 'user';
        break;
    }

    // You can return any component that you like here!
    return <FontAwesome5 name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: '#e36372',
  tabBarInactiveTintColor: 'gray',
});
function Tab1() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
function ChangeTabBarBadge(value) {
  if (value !== 0) {
    return value;
  } else {
    return null;
  }
}
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tab.Navigator screenOptions={tabIcon}>
        <Tab.Screen
          name="Cho bạn"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Dạo"
          component={Tab1}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Tin nhắn"
          component={Tab1}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Giỏ hàng"
          component={TabHomeScreen}
          options={{
            headerShown: false,
            tabBarBadge: ChangeTabBarBadge(this.props.carts.quantify),
          }}
        />
        {this.props.login.isLogin ? (
          <Tab.Screen
            name="Tài khoản "
            component={Account}
            options={{headerShown: false}}
          />
        ) : (
          <Tab.Screen
            name="Tài khoản"
            component={Account}
            options={{headerShown: false}}
          />
        )}
      </Tab.Navigator>
    );
  }
}
const mapStateToProps = state => {
  const {carts, login} = state;
  return {carts, login};
};

export default connect(mapStateToProps)(Home);
