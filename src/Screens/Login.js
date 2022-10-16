import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import Auth from '../Store/auth';
const Login = (props) => {

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  

  return (
    <ImageBackground style={styles.container}
      source={require('../Icons/bg1.jpg')}>
        <Image source={require('../Icons/profile1.png')}  style={{width:90,height:90}} />
      <Text style={{ fontSize: 24, color: "#0000FF", marginBottom: 20 }}>SignIn</Text>



      <TextInput
        style={styles.inputText}
        value={Email}
        onChangeText={setEmail}
        keyboardType={'email-address'}
        placeholder="Enter Your Email ...">
      </TextInput>


      <TextInput
        style={styles.inputText}
        value={Password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="Enter Password ...">
      </TextInput>

      <TouchableOpacity
        style={styles.submit}
        onPress={() => Auth.signIn(Email, Password)}
        >
        <Text style={{
          fontWeight: 'bold',
          fontSize: 16
        }}>Login</Text>
      </TouchableOpacity>


      <TouchableOpacity 
      onPress={() => {
        props.navigation.navigate('Registration')
      }}>
        <Text style={{fontSize:15,marginTop:10,color:"blue"}}>New User? Sign Up</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

export default Login;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  inputText: {
    height: 45,
    width: "90%",
    borderColor: "#0000FF",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10
  },
  submit: {
    backgroundColor: "#FFA500",
    width: "50%",
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,


  }
});