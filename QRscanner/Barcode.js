/* eslint-disable prettier/prettier */
import React from 'react';
import {RNCamera} from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  Alert,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import LocalBarcodeRecognizer from 'react-native-local-barcode-recognizer';

class Barcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barcode: '',
      scan: false,
      isFlash: false,
      uri: '',
    };
  }
  selecctImg = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      console.log(image.data);
      this.setState({uri: `data:${image.mime};base64,${image.data}`});
      this.recoginze(this.state.uri);
    });
  };
  recoginze = async imgageUri => {
    // Here is the demoe
    let result = await LocalBarcodeRecognizer.decode(
      imgageUri.replace('data:image/jpeg;base64,', ''),
      {codeTypes: ['ean13', 'qr']},
    );
    console.log(result);
    alert(result);
  };
  onBarCodeRead = e => {
    console.log(e);
    this.setState({barcode: e.data, scan: true});
    Alert.alert(this.state.barcode);
  };
  onGetItemPress = e => {
    Alert.alert(this.state.barcode);
  };

  onPressFlash = () => {
    this.state.isFlash
      ? this.setState({isFlash: false})
      : this.setState({isFlash: true});
  };
  render() {
    return (
      <>
        <View style={styles.contain}>
          <View style={styles.header}>
            <FontAwesome5
              name={'arrow-left'}
              light
              style={styles.icon_arrow_left}
              onPress={() => this.props.navigation.goBack()}
            />
            <Text style={styles.header_text}>Quét mã</Text>
            <TouchableOpacity onPress={this.selecctImg}>
              <FontAwesome5 name={'folder'} light style={styles.icon_folder} />
            </TouchableOpacity>
          </View>
          <View style={styles.camera}>
            <RNCamera
              onBarCodeRead={this.onBarCodeRead}
              style={styles.preview}
              type={RNCamera.Constants.Type.back}
              flashMode={
                this.state.isFlash
                  ? RNCamera.Constants.FlashMode.torch
                  : RNCamera.Constants.FlashMode.off
              }
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'We need your permission to use your audio',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}>
              <BarcodeMask
                width={300}
                height={100}
                showAnimatedLine={true}
                outerMaskOpacity={0.6}
                edgeColor="#00009e"
                animatedLineColor="#2274c6"
              />
              <TouchableOpacity onPress={this.onPressFlash}>
                <View style={styles.flash}>
                  <FontAwesome5 name={'bolt'} light style={styles.icon_bolt} />
                  <Text style={styles.flash_text}>Bật đèn pin</Text>
                </View>
              </TouchableOpacity>
            </RNCamera>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={this.onGetItemPress}
              style={styles.footer_qr}>
              <View style={styles.getqr}>
                <FontAwesome5
                  name={'qrcode'}
                  light
                  style={styles.icon_qrcode}
                />
                <Text style={styles.getitem}>Quét mã</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  contain: {
    backgroundColor: '#11519b',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  camera: {
    width: '100%',
    height: '80%',
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  footer: {
    width: '100%',
    height: '13%',
  },
  footer_qr: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    alignItems: 'center',
  },

  upperSection: {
    flexDirection: 'column',
  },
  getitem: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    // paddingLeft: 20,
    // paddingRight: 20,
  },
  getqr: {
    padding: 12,
    borderRadius: 16,
    borderColor: '#fff',
    borderWidth: 2,
    width: 134,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon_arrow_left: {
    color: '#fff',
    fontSize: 20,
  },
  header_text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
  },
  icon_folder: {
    color: '#fff',
    fontSize: 24,
  },
  icon_qrcode: {
    color: '#fff',
    fontSize: 20,
    marginRight: 8,
  },
  icon_bolt: {
    color: '#fff',
    fontSize: 20,
  },
  flash: {
    alignItems: 'center',
    padding: 12,
  },
  flash_text: {
    color: '#fff',
  },
});
export default Barcode;
