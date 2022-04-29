/* eslint-disable prettier/prettier */
import React from 'react';
import {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {GetProductAction} from '../../CartReducer/GetProductAction';
class Body extends Component {
  constructor(props) {
    super(props);
    this.ChangeWitch = this.ChangeWitch.bind(this);
  }

  state = {
    time: new Date().toLocaleTimeString(),
    isLoading: true,
    data: [],
  };

  async getProducts() {
    try {
      const response = await fetch(
        'https://61d3fbb58df81200178a89b9.mockapi.io/home/product',
      );
      const json = await response.json();
      this.setState({data: json});
      this.props.GetProductAction(json);
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getProducts();
  }
  ChangeWitch(value) {
    let withPersent = value.solve / value.count;
    if (withPersent <= 1) {
      if (withPersent <= 0.5) {
        return 60 + '%';
      }
      return withPersent * 100 + '%';
    } else {
      return 100 + '%';
    }
  }
  render() {
    console.log(this.props);
    return (
      <>
        <View style={styles.body}>
          <View style={styles.body__flsale}>
            <View style={styles.body__flsale_sale}>
              <Image
                style={styles.body__flsale_img}
                source={{
                  uri: 'https://image.freepik.com/free-vector/flash-sale-discount-banner_1017-19822.jpg',
                }}
              />
              <Text style={styles.body__flsale_time}>{this.state.time}</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => this.props.navigation.navigate('AllProduct')}>
              <View style={styles.body__flsale_more}>
                <Text style={styles.body__flsale_text}>Xem thêm</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.body_scroll}>
            <ScrollView style={styles.body__product} horizontal={true}>
              {this.state.data.map((value, index) => (
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
                  }>
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
                    <Text style={styles.body__product_price}>
                      {value.price}
                    </Text>
                    <View style={styles.body__product_persent}>
                      <Text
                        style={[
                          styles.body__product_solve,
                          {
                            width: this.ChangeWitch(value),
                          },
                        ]}>
                        {value.solve} Đã bán
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.body__category}>
            <View style={styles.body__category_sale}>
              <Image
                style={styles.body__category_sale_img}
                source={require('./img/12thang12.jpg')}
              />
            </View>
            <View style={styles.body__category_branch}>
              <Text style={styles.body__category_header}>
                Danh mục ngành hàng
              </Text>
              <View style={styles.body__category_products}></View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    marginRight: 12,
    marginLeft: 12,
  },
  body__flsale: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body__flsale_sale: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  body__flsale_img: {
    width: 60,
    height: 60,
  },
  body__flsale_time: {
    marginLeft: 12,
    backgroundColor: '#111111',
    color: '#fff',
    fontWeight: '600',
    padding: 2,
    borderRadius: 6,
  },
  body__flsale_more: {},
  body__flsale_text: {},
  body_scroll: {
    flexDirection: 'row',
    height: 'auto',
    maxWidth: 400,
  },
  body__product: {
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
  body__product_img: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 6,
  },
  body__product_item: {
    // width: '30%',
    // height: 200,
    width: 120,
    borderWidth: 2,
    borderColor: '#e5e6ea',
    borderRadius: 6,
    marginRight: 4,
    marginLeft: 4,
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
  body__product_price: {
    fontSize: 14,
    paddingLeft: 4,
    textDecorationLine: 'line-through',
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

  body__category: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  body__category_sale: {},
  body__category_sale_img: {
    width: 180,
    height: 100,
    resizeMode: 'stretch',
  },
  body__category_branch: {
    backgroundColor: '#ffeded',
    height: 100,
    padding: 6,
  },
  body__category_header: {
    color: '#343331',
    fontSize: 18,
    fontWeight: '600',
  },
  body__category_products: {},
});
// export default Body;
const mapStateToProps = state => {
  const {carts, fetchProduct} = state;
  return {carts, fetchProduct};
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      GetProductAction,
    },
    dispatch,
  );
export default connect(mapStateToProps, mapDispatchToProps)(Body);
