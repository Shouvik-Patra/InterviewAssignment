import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react';
import Auth from '../Store/auth';

const Registration = (props) => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  return (
    <ImageBackground style={styles.container}
      source={require('../Icons/bg1.jpg')}>
        <Image source={require('../Icons/user.png')}  style={{width:90,height:90}} />
      <Text style={{ fontSize: 24, color: "black", marginBottom: 20 }}>Signup</Text>

      <TextInput
        style={styles.inputText}
        value={Name}
        onChangeText={setName}
        placeholder="Enter Your Name ...">
      </TextInput>

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
        onPress={() => Auth.signUp(Name, Email, Password).then(
          props.navigation.navigate('Login')
        )}
      >
        <Text style={{
          fontWeight: 'bold',
          fontSize: 16
        }}>Signup</Text>
      </TouchableOpacity>

      <TouchableOpacity 
       onPress={() => {
        props.navigation.navigate('Login')
      }}>

        <Text style={{fontSize:15,marginTop:10,color:"blue"}}>Already a User? SignIn</Text>
      </TouchableOpacity>

    </ImageBackground>
  )
}

export default Registration;


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