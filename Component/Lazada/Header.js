/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const navbarIcon = [
  {
    name: 'LazMaill',
    url: 'https://laz-img-cdn.alicdn.com/images/ims-web/TB15wgLWBr0gK0jSZFnXXbRRXXa.png',
  },
  {
    name: 'Rẻ vô đối',
    url: 'https://bizweb.dktcdn.net/100/377/231/articles/freeship.png?v=1588928233387',
  },
  {
    name: 'FreeShip MAX',
    url: 'https://bizweb.dktcdn.net/100/377/231/articles/freeship.png?v=1588928233387',
  },
  {
    name: 'Mã Giảm giá',
    url: 'https://laz-img-cdn.alicdn.com/images/ims-web/TB1UiNthUT1gK0jSZFhXXaAtVXa.png',
  },
  {
    name: 'Siêu thị Lazda',
    url: 'https://laz-img-cdn.alicdn.com/images/ims-web/TB15wgLWBr0gK0jSZFnXXbRRXXa.png',
  },
  {
    name: 'Test',
    url: 'https://laz-img-cdn.alicdn.com/images/ims-web/TB15wgLWBr0gK0jSZFnXXbRRXXa.png',
  },
];
class HeaderLazaDa extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <View style={styles.header}>
        <View style={styles.header__qr}>
          <FontAwesome5
            name={'qrcode'}
            light
            style={styles.header_icon_qrcode}
          />
          <Text style={styles.header__head}>Trang Chủ</Text>
          <FontAwesome5
            name={'wallet'}
            light
            style={styles.header_icon_wallet}
          />
        </View>
        <View style={styles.header__input}>
          <TextInput
            style={styles.text_input}
            placeholder="biti's dép nam - biti's hunter nam"></TextInput>
          <View style={styles.header_icon}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Barcode')}>
              <FontAwesome5
                name={'camera'}
                light
                style={styles.header_icon_camera}
              />
            </TouchableOpacity>
            <FontAwesome5
              name={'search'}
              brand
              style={styles.header_icon_search}
            />
          </View>
        </View>

        <ScrollView style={styles.header__list} horizontal={true}>
          <View style={styles.header__list_nav}>
            {navbarIcon.map((value, index) => (
              <>
                <View style={styles.header__navbar} key={index}>
                  <Image
                    source={{uri: value.url}}
                    style={styles.header__navbar_item}
                  />
                  <Text style={styles.header__item_text}>{value.name}</Text>
                </View>
              </>
            ))}
          </View>
        </ScrollView>
        <View style={styles.header__sale}>
          <View style={styles.header__sale_off}>
            <Text style={styles.header__sale_text}>KHỞI ĐỘNG SALE TO</Text>
          </View>
          <ImageBackground
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-bW2_ewihNP87-Ka27pXxLfQu9lkHsQBkA&usqp=CAU',
            }}
            resizeMode="cover"
            style={styles.header__background}>
            <View style={styles.header_refund_head}>
              <Text style={styles.header_refund_text}>HOÀN TIỀN NGAY 12%</Text>
              <View style={styles.header_refund_img}>
                <View style={styles.header_refund_list}>
                  <Image
                    style={styles.header_refund_img_item}
                    source={{
                      uri: 'https://vn-live-05.slatic.net/p/81a77b44fb64ff972d4a24abcdaf1198.jpg_200x200q90.jpg_.webp',
                    }}
                  />
                  <Text style={styles.header_refund_img_text}>Bách Hóa</Text>
                </View>
                <View style={styles.header_refund_list}>
                  <View style={styles.header_refund_two_img}>
                    <Image
                      style={[
                        styles.header_refund_img_item,
                        styles.header_refund_img_item_big,
                      ]}
                      source={{
                        uri: 'https://vn-live-05.slatic.net/p/1c2ae86571198f4e4616e58e6454da3d.jpg_200x200q90.jpg_.webp',
                      }}
                    />
                    <Image
                      style={[
                        styles.header_refund_img_item,
                        styles.header_refund_img_item_big,
                      ]}
                      source={{
                        uri: 'https://vn-live-05.slatic.net/p/a8649d108e0c7539bacd4d5020ecac62.jpg_200x200q90.jpg_.webp',
                      }}
                    />
                  </View>
                  <View style={styles.header_refund_img_view}>
                    <Text
                      style={
                        (styles.header_refund_img_text,
                        styles.header_refund_img_text_big)
                      }>
                      MIỄN PHÍ GIAO HÀNG
                    </Text>
                    <FontAwesome5
                      name={'greater-than'}
                      light
                      style={styles.header_icon_greater}
                    />
                  </View>
                </View>

                <View style={styles.header_refund_list}>
                  <Image
                    style={styles.header_refund_img_item}
                    source={{
                      uri: 'https://vn-live-01.slatic.net/p/f5c0c9f0613676bca24a21f0fc5fe09f.jpg_200x200q80.jpg_.webp',
                    }}
                  />
                  <Text style={styles.header_refund_img_text}>Hàng Mới Về</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#b30101',
  },

  header__qr: {
    paddingTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 12,
    marginRight: 12,
  },
  header__head: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
  text_input: {
    height: 40,
    borderRadius: 40,
    backgroundColor: '#fff',
    lineHeight: 1.4,
    flex: 1,
    marginLeft: 6,
  },
  header__list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 12,
    marginRight: 12,
    marginTop: 4,
  },
  header__item: {},
  header__navbar: {
    textAlign: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 24,
  },
  header__list_nav: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  header__navbar_item: {
    width: 40,
    height: 40,
    borderRadius: 23,
    borderWidth: 5,
    borderColor: '#fff',
    overflow: 'hidden',
  },
  header__item_text: {
    // paddingRight: 10,
    color: '#fff',
    fontWeight: '400',
    maxWidth: 60,
    textAlign: 'center',
    fontSize: 12,
  },
  header__sale: {
    position: 'relative',
    marginBottom: 12,
  },
  header__background: {
    position: 'relative',
    zIndex: 0,
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#dd0709',
    borderRadius: 20,
    overflow: 'hidden',
  },
  header__sale_off: {
    zIndex: 1,
    top: 14,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 'auto',
    backgroundColor: '#970504',
    borderWidth: 3,
    borderColor: '#dd0709',
    borderRadius: 60,
  },
  header__sale_text: {
    position: 'relative',
    zIndex: 1,
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
  },
  header_refund: {
    width: '100%',
  },
  header_refund_text: {
    width: '100%',
    color: '#ffe362',
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 18,
    marginTop: 18,
  },
  header_refund_img: {
    flexDirection: 'row',
    marginLeft: 12,
    marginRight: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header_refund_list: {
    backgroundColor: '#960202',
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  header_refund_head: {},
  header_refund_two_img: {
    marginTop: -8,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  header_refund_img_item: {
    width: 84,
    height: 84,
    borderRadius: 12,
  },
  header_refund_img_item_big: {
    width: 100,
    height: 100,
  },
  header_refund_img_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_refund_img_text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  header_refund_img_text_big: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
    color: '#fff',
  },
  header_icon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header_icon_greater: {
    backgroundColor: '#fce160',
    color: '#960202',
    fontSize: 8,
    borderColor: '#fce160',
    textAlign: 'center',
    padding: 4,
    borderRadius: 8,
    marginLeft: 4,
    fontWeight: '600',
  },
  header_icon_camera: {
    fontSize: 20,
    fontWeight: '200',
    marginRight: 8,
  },
  header_icon_qrcode: {
    color: '#fff',
    fontSize: 20,
  },
  header_icon_wallet: {
    color: '#fff',
    fontSize: 20,
  },

  header_icon_search: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8,
    paddingTop: 8,
    backgroundColor: '#fd7158',
    fontSize: 14,
    color: '#fff',
    fontWeight: '200',
    borderRadius: 16,
  },
  header__input: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 30,
    marginLeft: 12,
    marginRight: 12,
    height: 40,
    marginTop: 10,
  },
});
export default HeaderLazaDa;
