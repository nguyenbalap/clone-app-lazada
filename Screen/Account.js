/* eslint-disable prettier/prettier */
import React from 'react';
import {Component} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logoutAction} from '../CartReducer/LoginAction';
const accNav = [
  {
    uri: 'https://png.pngtree.com/png-vector/20190330/ourlarge/pngtree-vector-house-icon-png-image_890116.jpg',
    text: 'Trang chủ',
  },
  {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvdX3BpB0BmiIk7k6Aw2w9gdMIc8smYzR6Kw&usqp=CAU',
    text: 'Ngành hàng',
  },
  {
    uri: 'https://t4.ftcdn.net/jpg/02/94/59/83/360_F_294598366_XN5TVSuf88TseaEDMJ0qvItQm1Z3hNf5.jpg',
    text: 'Top bán chạy',
  },
  {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDYB1JQKlbPELM7RBWduwSCk8RSFv7WKMnxw&usqp=CAU',
    text: 'Mã giảm giá',
  },
];
const userinfohistory = [
  {
    count: 0,
    text: 'Yêu thích của tôi',
  },
  {
    count: 0,
    text: 'Gian hàng đã theo dõi',
  },
  {
    count: 0,
    text: 'Mã giảm giá',
  },
  {
    count: 0,
    text: 'Đã xem gần đây',
  },
];
class Account extends Component {
  render() {
    return (
      <ScrollView>
        {this.props.login.isLogin ? (
          <View style={styles.account_screen}>
            <View style={styles.account_ava}>
              <View style={styles.account_ava_view}>
                <FontAwesome5
                  name={'user-circle'}
                  light
                  style={styles.account_ava_icon}
                />
                <Text style={styles.account_ava_text}>
                  {this.props.login.user}
                </Text>
              </View>
              <FontAwesome5
                name={'cog'}
                light
                style={styles.account_ava_icon}
              />
            </View>
            <View style={styles.account_sign_user}>
              {userinfohistory.map((item, index) => (
                <View style={styles.account_user} key={index}>
                  <Text style={styles.account_user_text}>{item.count}</Text>
                  <Text style={styles.account_user_text}>{item.text}</Text>
                </View>
              ))}
            </View>
          </View>
        ) : (
          <View style={styles.account_screen}>
            <View style={styles.account_ava}>
              <View style={styles.account_ava_view}>
                <FontAwesome5
                  name={'user-circle'}
                  light
                  style={styles.account_ava_icon}
                />
                <Text style={styles.account_ava_text}>
                  Đăng nhập đột phá mọi trải nghiệm
                </Text>
              </View>
              <FontAwesome5
                name={'cog'}
                light
                style={styles.account_ava_icon}
              />
            </View>
            <View style={styles.account_sign}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={styles.account_login}>Đăng nhập</Text>
              </TouchableOpacity>
              <Text style={styles.account_sign_slash}> / </Text>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => this.props.navigation.navigate('Registration')}>
                <Text style={styles.account_registration}>Đăng ký</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        <View style={styles.account_notify_transpot}>
          <View style={styles.account_notify_transpot_free}>
            <FontAwesome5
              name={'bell'}
              solid
              style={styles.account_notify_transpot_icon}
            />
            <Text style={styles.account_notify_transpot_text}>
              Miễn phí vận chuyển
            </Text>
          </View>
          <View style={styles.account_notify_transpot_view}>
            <Text style={styles.account_notify_transpot_view_text}>
              lượt xem
            </Text>
          </View>
        </View>
        <View style={styles.account_navbar}>
          {accNav.map((item, index) => (
            <View style={styles.account_navbar_item} key={index}>
              <Image
                style={styles.account_navbar_img}
                source={{
                  uri: `${item.uri}`,
                }}
              />
              <Text style={styles.account_navbar_text}>{item.text}</Text>
            </View>
          ))}
        </View>
        <View style={styles.account_order}>
          <Text>Đơn hàng của tôi</Text>
        </View>
        <View style={styles.account_sign_info}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              // Alert.alert('Thành công', 'Đăng xuất thành công');
              this.props.logoutAction();
            }}>
            <Text style={styles.account_login_info}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  account_screen: {
    backgroundColor: '#dc122c',
    height: 170,
    padding: 12,
  },
  account_ava: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 36,
  },
  account_ava_view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  account_ava_icon: {
    fontSize: 26,
    color: '#f8b9b6',
    fontWeight: '300',
  },
  account_ava_text: {
    fontSize: 16,
    color: '#f3d5d8',
    marginLeft: 6,
  },
  account_sign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#fff',
    borderWidth: 1,
    width: 268,
    alignSelf: 'center',
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
  },
  account_sign_info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#dddddd',
    borderTopWidth: 1,
    width: '100%',
    alignSelf: 'center',
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
  },
  account_sign_slash: {
    color: '#cc523c',
    fontWeight: '500',
    fontSize: 26,
  },
  account_login: {
    color: '#cc523c',
    fontWeight: '500',
    fontSize: 26,
  },
  account_login_info: {
    color: '#cc523c',
    fontWeight: '400',
    // color: '#7a7a7a',
    fontSize: 16,
  },
  account_registration: {
    color: '#cc523c',
    fontSize: 26,
    fontWeight: '500',
  },
  account_notify_transpot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: '#e9f3ff',
    paddingTop: 6,
    paddingBottom: 6,
  },
  account_notify_transpot_free: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  account_notify_transpot_text: {
    marginLeft: 8,
    color: '#187af7',
  },
  account_notify_transpot_icon: {
    color: '#187af7',
  },
  account_notify_transpot_view_text: {
    color: '#187af7',
  },
  account_navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 18,
    paddingBottom: 18,
    marginBottom: 8,
  },
  account_navbar_item: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '25%',
  },
  account_navbar_img: {
    width: 46,
    height: 46,
  },
  account_navbar_text: {
    color: '#976b87',
    fontWeight: '700',
  },
  account_order: {
    backgroundColor: '#fff',
    height: 200,
    padding: 12,
  },

  account_sign_user: {
    flexDirection: 'row',
  },
  account_user: {
    alignItems: 'center',
    width: '25%',
  },
  account_user_text: {
    color: '#f3d5d8',
    fontSize: 16,
    textAlign: 'center',
    width: '95%',
  },
});

const mapStateToProps = state => {
  const {login} = state;
  return {login};
};
const mapDispatchToProps = dispatch =>
  bindActionCreators({logoutAction}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Account);
