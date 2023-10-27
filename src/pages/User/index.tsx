
import React from 'react'

import {
  SafeAreaView,
  Text,
  View,
  Button,
  TextInput,
  Image,
} from 'react-native'
import styles from './styles'

const User = ( ) => {




  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sign In</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.form}>
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Password:</Text>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.forgot}>
          <Text style={styles.forgottext}>Forgot your Password?</Text>
        </View>
        <View style={styles.button}>
          <Button title="SIGN IN" onPress={() => console.log('Sign In')} />
        </View>
      </View>
      <View style={styles.or}>
        <Text  style={styles.textor}>Or Sign In with</Text>
      </View>

      <View style={styles.button1}>
        <Button color="red" title="Sign in with Google " />
      </View>
      <View style={styles.button2}>
        <Button title="Sign in with Facebook " />
      </View>

      <View style={styles.signup}>
          <Text style={styles.donthave}>Don't have account?</Text>
          <Text style={styles.textsignup}>Sign Up</Text>
        </View>

      <View style={styles.footer}>
        <Text style={styles.copyright}>WeatherApp</Text>
        <Text style={styles.copyright}>Version: 7.2.5</Text>
      </View>
    </SafeAreaView>
  )
}

export default User
