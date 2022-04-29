/* eslint-disable prettier/prettier */
import React from 'react';
import {Component} from 'react';
import {ScrollView} from 'react-native';
import HeaderLazaDa from '../Component/Lazada/Header';
import Body from '../Component/Lazada/Body';
class HomeScreen extends Component {
  render() {
    return (
      <>
        <ScrollView>
          <HeaderLazaDa navigation={this.props.navigation} />
          <Body navigation={this.props.navigation} />
        </ScrollView>
      </>
    );
  }
}

export default HomeScreen;
