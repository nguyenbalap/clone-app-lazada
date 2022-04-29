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
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loginAction, loginWrong} from '../CartReducer/LoginAction';
import AccountLazada from './AccountLazada';
class Login extends Component {
  constructor(props) {
    super(props);
    this.StyleButton = this.StyleButton.bind(this);
    this.Login = this.Login.bind(this);
    this.state = {
      username: '',
      password: '',
      isDisable: true,
    };
  }

  StyleButton() {
    if (this.state.username == '' || this.state.password == '') {
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
  Login() {
    const acc = Realm.open({
      path: 'account6',
      schema: [AccountLazada],
    });

    let loop = false;
    acc.then(realm => {
      console.log(realm.path);
      const tasks = realm.objects('AccountLazada');
      for (let i = 0; i < tasks.length; i++) {
        if (
          this.state.username == tasks[i].username &&
          this.state.password == tasks[i].password
        ) {
          loop = true;
          break;
        } else {
          loop = false;
        }
      }
      loop
        ? this.props.loginAction(this.state.username)
        : this.props.loginWrong();
      123;
      if (this.props.login.isLogin) {
        Alert.alert('Thông báo', 'Đăng nhập thành công');
        this.props.navigation.navigate('Home');
      } else {
        Alert.alert(
          'Thông báo',
          'Tài khoản hoặc mật khẩu bạn vừa nhập chưa chính xác. Vui lòng thử lại',
        );
      }
    });
  }
  render() {
    this.StyleButton();

    return (
      <View style={styles.registion}>
        <View style={styles.registion_header}>
          <FontAwesome5
            name={'arrow-left'}
            light
            style={styles.registion_header_icon}
            onPress={() => this.props.navigation.goBack()}
          />
          <Text style={styles.registion_header_item}>Đăng nhập</Text>
        </View>
        <View style={{height: 0.5, width: '100%', backgroundColor: 'gray'}} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.registion_body}>
            <TextInput
              style={styles.registion_textinput}
              placeholder="Tên đăng nhập"
              onChangeText={username => this.setState({username})}
            />
            <TextInput
              style={styles.registion_textinput}
              placeholder="Mật khẩu"
              secureTextEntry={true}
              onChangeText={password => this.setState({password})}
            />

            <TouchableOpacity
              style={[styles.registion_button, styles.registion_button_disable]}
              disabled={this.state.isDisable}
              onPress={() => this.Login()}>
              <Text style={styles.registion_button_reg}>Đăng Nhập</Text>
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
const mapStatetoProps = state => {
  const {login} = state;
  return {login};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loginAction,
      loginWrong,
    },
    dispatch,
  );

export default connect(mapStatetoProps, mapDispatchToProps)(Login);
