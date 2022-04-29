/* eslint-disable prettier/prettier */

import React from 'react';
import {Component} from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductScreen from './Screen/ProductScreen';
import Home from './Screen/Home';
import AllProduct from './Screen/AllProduc';
import root from './CartReducer/rootReducer';
import Login from './SignAccountScreen/Login';
import Registration from './SignAccountScreen/Registration';
import {Text, View, TouchableOpacity} from 'react-native';
import Barcode from './QRscanner/Barcode';
const Stack = createNativeStackNavigator();
let store = createStore(root, applyMiddleware(thunk));
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Home" component={Home} />

              <Stack.Screen name="ProductScreen" component={ProductScreen} />

              <Stack.Screen name="AllProduct" component={AllProduct} />
              <Stack.Screen name="Login" component={Login} />

              <Stack.Screen name="Registration" component={Registration} />
              <Stack.Screen name="Barcode" component={Barcode} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
        {/* <TouchableOpacity onPress={this.selecctImg}>
          <Text>Click</Text>
        </TouchableOpacity> */}
      </>
    );
  }
}
export default App;
