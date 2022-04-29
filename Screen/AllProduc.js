/* eslint-disable prettier/prettier */
import React from 'react';
import {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
class AllProduct extends Component {
  render() {
    const products = this.props.fetchProduct.data[0];
    console.log(products);
    return (
      <>
        <View style={styles.body_scroll}>
          <ScrollView style={styles.body__product}>
            <View style={styles.body_product_view}>
              {products.map((value, index) => (
                <TouchableOpacity
                  activeOpacity={0.6}
                  key={index}
                  onPress={() =>
                    this.props.navigation.navigate('ProductScreen', {
                      id: value.productId,
                      imgUris: value.imgUris,
                      price: value.price,
                      sale: value.sale,
                      solve: value.solve,
                      description: value.description,
                      vouchers: value.vouchers,
                    })
                  }
                  style={styles.product_info}>
                  <View
                    style={styles.body__product_item}
                    key={index.toString()}>
                    <Image
                      style={styles.body__product_img}
                      source={{
                        uri: value.imgUris[0],
                      }}
                    />
                    <Text style={styles.body__product_price_sale}>
                      {value.sale}
                    </Text>
                    <Text
                      style={styles.product_description_text}
                      numberOfLines={2}>
                      {value.description}
                    </Text>
                    <View style={styles.body__product_persent}>
                      <Text
                        style={[
                          styles.body__product_solve,
                          {width: (value.solve / value.count) * 100 + '%'},
                        ]}>
                        {value.solve} Đã bán
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  body_scroll: {},
  body__product: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
  body_product_view: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'flex-start',
  },
  product_description_text: {
    color: '#1d1d1d',
    fontWeight: '400',
    padding: 4,
  },
  product_info: {
    width: '50%',
    marginTop: 4,
  },
  body__product_img: {
    width: '100%',
    height: 160,
    resizeMode: 'stretch',
    borderRadius: 6,
  },
  body__product_item: {
    borderWidth: 2,
    borderColor: '#e5e6ea',
    borderRadius: 6,
    marginRight: 2,
    marginLeft: 2,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.3,
  },
  body__product_price_sale: {
    padding: 4,
    fontSize: 18,
    color: '#f9596e',
    fontWeight: '500',
  },
  body__product_persent: {
    justifyContent: 'center',
    backgroundColor: '#ffb6bf',
    borderRadius: 10,
    marginTop: 2,
    marginBottom: 6,
    marginLeft: 4,
    marginRight: 4,
  },
  body__product_solve: {
    color: '#fff',
    backgroundColor: '#ff4960',
    borderRadius: 10,
    fontSize: 10,
    paddingLeft: 8,
    fontWeight: '500',
  },
});
const mapStateToProps = state => {
  const {carts, fetchProduct} = state;
  return {carts, fetchProduct};
};

export default connect(mapStateToProps)(AllProduct);
