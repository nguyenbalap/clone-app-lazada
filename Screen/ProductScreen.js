/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {Component} from 'react';
import {bindActionCreators} from 'redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {addCarts} from '../CartReducer/cartAction';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
class ProductScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const {id, imgUris, price, sale, solve, description, vouchers} =
      this.props.route.params;
    let vch1 = [vouchers[0], vouchers[1]];
    return (
      <>
        <ScrollView style={styles.container}>
          <View style={styles.product_info}>
            <ScrollView
              horizontal={true}
              style={styles.product_list_img}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}>
              {imgUris.map((imgUri, index) => (
                <View style={styles.product_list_img_item} key={index}>
                  <Image
                    source={{uri: `${imgUri}`}}
                    style={styles.product_img}
                  />
                </View>
              ))}
            </ScrollView>

            <View style={{paddingLeft: 12, paddingRight: 12}}>
              <View style={styles.product_description}>
                <Text style={styles.product_description_text}>
                  {description}
                </Text>
              </View>
              <View style={styles.product_price_sale}>
                <Text style={styles.product_price_sale_text}>{sale}</Text>
                <Text style={styles.product_price_deal}>Mua Kèm Deal Sốc</Text>
              </View>
              <View>
                <Text style={styles.product_price}>{price}</Text>
              </View>
              <View style={styles.product_evaluate}>
                <View style={styles.product_evaluate_solve}>
                  <Text style={styles.product_info_solve}>Đã bán {solve}</Text>
                </View>
                <View style={styles.product_evaluate_society}>
                  <FontAwesome5
                    name={'heart'}
                    brand
                    style={styles.product_img_icon}
                  />
                  <FontAwesome5
                    name={'share'}
                    brand
                    style={styles.product_img_icon}
                  />
                  <FontAwesome5
                    name={'comment-dots'}
                    brand
                    style={[
                      styles.product_img_icon,
                      styles.product_img_icon_comment,
                    ]}
                  />
                </View>
              </View>
            </View>
            <View style={styles.product_icon_inimg}>
              <FontAwesome5
                onPress={() => {
                  this.props.navigation.goBack();
                }}
                name={'chevron-circle-left'}
                brand
                style={[
                  styles.product_img_icon,
                  styles.product_img_icon_arrowback,
                ]}
              />
              <View style={styles.product_icon_inimg_social}>
                <FontAwesome5
                  name={'share'}
                  brand
                  style={[
                    styles.product_img_icon,
                    styles.product_img_icon_back,
                  ]}
                />
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('Giỏ hàng');
                  }}>
                  <View>
                    <FontAwesome5
                      name={'shopping-cart'}
                      brand
                      style={[
                        styles.product_img_icon,
                        styles.product_img_icon_back,
                      ]}
                    />
                    <Text style={styles.product_img_icon_count_cart}>
                      {this.props.carts.quantify}
                    </Text>
                  </View>
                </TouchableOpacity>

                <FontAwesome5
                  name={'ellipsis-v'}
                  brand
                  style={[
                    styles.product_img_icon,
                    styles.product_img_icon_back,
                  ]}
                />
              </View>
            </View>
          </View>

          <View style={styles.product_voucher_discount}>
            <Text style={styles.product_voucher}>Voucher của shop</Text>
            <View style={styles.product_discount}>
              {vch1.map((voucher, index) => (
                <Text style={styles.product_discount_code} key={index}>
                  {voucher}
                </Text>
              ))}
            </View>
          </View>
        </ScrollView>

        <View style={styles.button}>
          <View style={styles.button_cart_chat}>
            <TouchableOpacity style={styles.button_chat} activeOpacity={0.6}>
              <View style={styles.button_chat_view}>
                <FontAwesome5
                  name={'comments'}
                  brand
                  style={styles.button_icon}
                />
                <Text style={styles.button_text}>Chat ngay</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button_cart}
              activeOpacity={0.6}
              onPress={() => {
                this.props.addCarts(id);
                Alert.alert('Thông báo', 'Thêm sản phẩm thành công');
              }}>
              <View style={styles.button_cart_view}>
                <FontAwesome5
                  name={'cart-plus'}
                  brand
                  style={styles.button_icon}
                />
                <Text style={styles.button_text}>Thêm vào Giỏ hàng</Text>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button_buy} activeOpacity={0.6}>
            <View style={styles.button_buy_view}>
              <Text style={styles.button_text}>Mua ngay</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  product_info: {
    backgroundColor: '#fff',
  },
  product_img: {
    width: '100%',
    height: 350,
    resizeMode: 'stretch',
    flexDirection: 'row',
  },
  product_description: {},
  product_description_text: {
    color: '#1d1d1d',
    fontSize: 18,
    fontWeight: '400',
    // borderColor: '#b8b8b8',
    // borderWidth: 1
  },
  product_price_sale: {
    marginTop: 4,
    flexDirection: 'row',
  },
  product_price_sale_text: {
    color: '#f9596e',
    fontSize: 20,
    fontWeight: '500',
    paddingRight: 16,
  },
  product_price_deal: {
    color: '#f9596e',
    borderColor: '#f9596e',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '400',
    padding: 2,
  },
  product_price: {
    textDecorationLine: 'line-through',
    fontSize: 16,
  },
  product_evaluate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  product_evaluate_solve: {},
  product_evaluate_society: {
    flexDirection: 'row',
  },
  product_info_solve: {
    fontSize: 16,
    fontWeight: '500',
  },
  product_img_icon: {
    fontSize: 24,
    paddingLeft: 16,
  },
  product_img_icon_back: {
    position: 'relative',
    zIndex: 1,
    top: -460,
    right: 16,
  },
  product_img_icon_count_cart: {
    position: 'relative',
    color: '#fff',
    zIndex: 2,
    top: -494,
    fontSize: 14,
    left: 16,
    backgroundColor: '#f9596e',
    width: 20,
    height: 20,
    borderRadius: 10,
    textAlign: 'center',
    borderColor: '#fff',
    borderWidth: 1,
  },
  product_img_icon_arrowback: {
    position: 'relative',
    zIndex: 1,
    top: -460,
  },
  product_img_icon_comment: {
    color: '#508cc0',
  },
  product_list_img: {},
  product_list_img_item: {
    width: 412,
    height: 360,
  },
  product_voucher_discount: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 16,
    paddingTop: 16,
  },
  product_voucher: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4f4f4f',
  },
  product_discount: {
    flexDirection: 'row',
  },
  product_discount_code: {
    backgroundColor: '#f9596e',
    color: '#fff',
    marginRight: 12,
    padding: 2,
  },
  product_icon_inimg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  product_icon_inimg_social: {
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 410,
  },
  button_buy: {
    backgroundColor: '#f9596e',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    fontSize: 8,
    height: 48,
  },
  button_cart: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#26ab9a',
    width: '50%',
    fontSize: 8,
  },
  button_cart_chat: {
    width: '50%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button_chat: {
    backgroundColor: '#26ab9a',
    width: '50%',
  },
  button_icon: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '300',
  },
  button_text: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '500',
  },
  button_chat_view: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
  },
  button_cart_view: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
  },
});
const mapStateToProps = state => {
  const {carts, fetchProduct} = state;
  return {carts, fetchProduct};
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addCarts,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);
