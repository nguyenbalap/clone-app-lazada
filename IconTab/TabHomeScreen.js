/* eslint-disable prettier/prettier */
import React from 'react';
import {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {decrease, increase} from '../CartReducer/cartAction';

class TabHomeScreen extends Component {
  render() {
    const listItem = this.props.carts.cartItem;
    let totalprice = 0;
    for (let i = 0; i < listItem.length; i++) {
      totalprice += parseFloat(listItem[i].sale) * listItem[i].total;
    }
    return (
      <>
        <ScrollView>
          {listItem.map(items => (
            <>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() =>
                  this.props.navigation.navigate('ProductScreen', {
                    id: items.productId,
                    imgUris: items.imgUris,
                    price: items.price,
                    sale: items.sale,
                    solve: items.solve,
                    description: items.description,
                    vouchers: items.vouchers,
                  })
                }>
                <View style={style.container}>
                  <Image
                    source={{uri: `${items.imgUris[0]}`}}
                    style={style.imgUri}
                  />
                  <View style={style.description}>
                    <Text style={style.header} numberOfLines={1}>
                      {items.description}
                    </Text>
                    <View style={style.in_de_crease}>
                      <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => this.props.decrease(items.productId)}>
                        <Text style={style.increase}>-</Text>
                      </TouchableOpacity>

                      <Text style={style.total}>{items.total}</Text>
                      <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => this.props.increase(items.productId)}>
                        <Text style={style.increase}>+</Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={style.price_cost}>{items.price}</Text>

                    <Text style={style.price_sale}>{items.sale}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </>
          ))}
        </ScrollView>
        <Text>Total price: {totalprice}</Text>
      </>
    );
  }
}
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 6,
    paddingBottom: 6,
    backgroundColor: '#fff',
    borderColor: '#e8e8e8',
    borderWidth: 2,
  },
  imgUri: {
    width: 86,
    height: 86,
  },
  description: {
    width: 308,
    marginLeft: 4,
    fontWeight: '600',
  },
  header: {
    fontSize: 16,
  },
  price_sale: {
    color: '#f9596e',
    fontWeight: '600',
  },
  price_cost: {
    textDecorationLine: 'line-through',
  },
  in_de_crease: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  increase: {
    fontSize: 18,
    fontWeight: '700',
    borderWidth: 1,
    borderColor: '#e8e8e8',
    width: 26,
    height: 26,
    textAlign: 'center',
    color: '#999999',
  },
  total: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e8e8e8',
    width: 40,
    height: 26,
    textAlign: 'center',
    fontSize: 16,
  },
});
const mapStateToProps = state => {
  const {carts} = state;
  return {carts};
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      decrease,
      increase,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(TabHomeScreen);
