import React from 'react'

import {
  SafeAreaView,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableOpacity, TouchableWithoutFeedback, Linking,
} from 'react-native'
import styles from './styles'


const User = () => {
  const handleImagePress = () => {
    const url = 'https://github.com/DangNghia17/weather-app-react-native'; // Thay đổi thành liên kết bạn muốn
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Đăng Nhập</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.form}>
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Mật khẩu:</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.forgot}>
          <Text style={styles.forgottext}>Quên mật khẩu?</Text>
        </View>

        <View>
        <TouchableOpacity style={[styles.button]}>
          <Text style={styles.buttonText}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </View>

      </View>
      <View style={styles.or}>
        <View style={styles.line} />
        <Text style={styles.textor}>Hoặc</Text>
        <View style={styles.line} />
      </View>

      <View >
        <TouchableOpacity style={[styles.button1]}>
          <Text style={styles.buttonText1}>Sign in with Google</Text>
          <Image source={require('../../assets/User/google.png')} style={styles.imageGoogle} />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={[styles.button2]}>
          <Text style={styles.buttonText2}>Sign in with Facebook</Text>
          <Image source={require('../../assets/User/facebook.png')} style={styles.imageFacebook} />
        </TouchableOpacity>
      </View>

      <View style={styles.signup}>
        <Text style={styles.donthave}>Bạn chưa có tài khoản?</Text>
        <Text style={styles.textsignup}>Đăng ký</Text>
      </View>
      <TouchableWithoutFeedback onPress={handleImagePress}>
        <View style={styles.imageContainer}>
          <Image source={require('../../assets/github.png')} style={styles.imageGithub} />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.footer}>
        <Text style={styles.copyright}>WeatherApp</Text>
        <Text style={styles.copyright}>Version: 7.2.5</Text>
        <Text style={styles.copyright}>By Nghia develop</Text>
      </View>
    </SafeAreaView>
  )
}

export default User
