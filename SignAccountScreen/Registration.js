/* eslint-disable prettier/prettier */
import React from 'react';
import {Component} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Alert, Keyboard} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import Realm from 'realm';
import AccountLazada from './AccountLazada';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      phone: '',
      password: '',
      confirmpassword: '',
      isDisable: true,
      isExist: false,
    };
    this.CheckStyleButton = this.CheckStyleButton.bind(this);
    this.Regist = this.Regist.bind(this);
  }
  CheckStyleButton() {
    if (
      this.state.username == '' ||
      this.state.password == '' ||
      this.state.phone == '' ||
      this.state.confirmpassword == ''
    ) {
      styles.registion_button_disable = {
        backgroundColor: '#dddddd',
      };
      this.state.isDisable = true;
    } else {
      this.state.isDisable = false;
      styles.registion_button_disable = {
        backgroundColor: '#f57224',
      };
    }
  }
  Regist() {
    const acc = Realm.open({
      path: 'account6',
      schema: [AccountLazada],
    });

    if (this.state.password === this.state.confirmpassword) {
      acc.then(realm => {
        const tasks = realm.objects('AccountLazada');
        const a = tasks.map(item => item.username);
        console.log(a);
        for (let i = 0; i < tasks.length; i++) {
          if (
            this.state.username == tasks[i].username ||
            this.state.phone == tasks[i].phone
          ) {
            this.state.isExist = true;
            Alert.alert('Thông báo', 'Tài khoản đã tồn tại');
            break;
          } else {
            this.state.isExist = false;
          }
        }

        if (!this.state.isExist) {
          acc.then(realm => {
            realm.write(() => {
              realm.create('AccountLazada', {
                username: this.state.username,
                phone: this.state.phone,
                password: this.state.password,
                confirmpassword: this.state.confirmpassword,
              });
            });
            Alert.alert('Thông báo', 'Đăng ký thành công');
            this.props.navigation.navigate('Login');
          });
        }
      });
    } else {
      Alert.alert(
        'Thông báo',
        'Mật khẩu bạn vừa nhập không khớp. Vui lòng thử lại',
      );
    }
  }
  render() {
    console.log(this.props);
    this.CheckStyleButton();

    return (
      <View style={styles.registion}>
        <View style={styles.registion_header}>
          <FontAwesome5
            name={'arrow-left'}
            light
            style={styles.registion_header_icon}
            onPress={() => this.props.navigation.goBack()}
          />
          <Text style={styles.registion_header_item}>Đăng ký</Text>
        </View>
        <View style={{height: 0.5, width: '100%', backgroundColor: 'gray'}} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.registion_body}>
            <TextInput
              style={styles.registion_textinput}
              placeholder="Tên đăng nhập"
              value={this.state.username}
              onChangeText={username => this.setState({username})}
            />
            <TextInput
              style={styles.registion_textinput}
              placeholder="Số điện thoại"
              keyboardType="numeric"
              value={this.state.phone}
              onChangeText={phone => this.setState({phone})}
            />
            <TextInput
              style={styles.registion_textinput}
              placeholder="Mật khẩu"
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={password => this.setState({password})}
            />
            <TextInput
              style={styles.registion_textinput}
              placeholder="Xác nhận mật khẩu"
              secureTextEntry={true}
              value={this.state.confirmpassword}
              onChangeText={confirmpassword => this.setState({confirmpassword})}
            />

            <TouchableOpacity
              style={[styles.registion_button, styles.registion_button_disable]}
              onPress={() => this.Regist()}
              disabled={this.state.isDisable}>
              <Text style={styles.registion_button_reg}>Đăng Ký</Text>
            </TouchableOpacity>

            <View style={styles.registion_divider}>
              <View style={styles.line}></View>
              <Text style={styles.line_text}>HOẶC</Text>
              <View style={styles.line}></View>
            </View>

            <TouchableOpacity
              style={[styles.registion_button, styles.registion_button_google]}>
              <FontAwesome5
                name={'google'}
                light
                style={styles.registion_button_icon}
              />
              <Text style={styles.registion_button_reg}>
                Tiếp tục với Google
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.registion_button,
                styles.registion_button_facebook,
              ]}>
              <FontAwesome5
                name={'facebook'}
                light
                style={styles.registion_button_icon}
              />
              <Text style={styles.registion_button_reg}>
                Tiếp tục với Facebook
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  registion: {
    backgroundColor: '#fff',
    height: 600,
  },
  registion_header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  registion_header_item: {
    marginLeft: 16,
    fontSize: 24,
  },
  registion_header_icon: {
    fontSize: 20,
  },

  registion_body: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 12,
    marginRight: 12,
  },
  registion_textinput: {
    width: 380,
    height: 40,
    borderBottomWidth: 0.25,
    borderColor: 'gray',
    marginBottom: 12,
    paddingLeft: 12,
  },
  registion_button: {
    width: 380,
    height: 40,
    backgroundColor: '#f57224',
    // alignSelf: 'center',
    borderRadius: 4,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registion_button_facebook: {
    backgroundColor: '#3b5999',
  },
  registion_button_google: {
    backgroundColor: '#d44837',
  },
  registion_button_icon: {
    color: '#fff',
    fontSize: 18,
    paddingRight: 6,
  },
  registion_button_reg: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 40,
    fontWeight: '400',
    textAlign: 'center',
  },
  registion_divider: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 12,
  },
  line: {
    height: 0.5,
    width: '30%',
    backgroundColor: 'gray',
  },
  line_text: {
    paddingLeft: 8,
    paddingRight: 8,
    textAlign: 'center',
    fontSize: 16,
  },
});
export default Registration;
