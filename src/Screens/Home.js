import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react';
import Auth from '../Store/auth';

const Home = (props) => {
  return (
    <ImageBackground style={styles.container}
      source={require('../Icons/bg1.jpg')}>

      <Image style={styles.card} source={require('../Icons/banner1.jpg')}></Image>

      <TouchableOpacity
        style={styles.submit}
        onPress={() => {
          props.navigation.navigate('AddProduct')
        }}
      >
        <Text style={{
          fontWeight: 'bold',
          fontSize: 16
        }}>Add Product</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.submit}
        onPress={() => {
          props.navigation.navigate('Products')
        }}
      >
        <Text style={{
          fontWeight: 'bold',
          fontSize: 16
        }}>View Product</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.submit}
        onPress={() => Auth.signOut()}
      >

        <Text style={{
          fontWeight: 'bold',
          fontSize: 16
        }}>Logout</Text>
      </TouchableOpacity>

    </ImageBackground>
  )
}

export default Home;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  card: {
    width: "98%",
    height: 200,
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 3,
    borderColor: "#808080",
    backgroundColor: "#c6c6c6",
    borderRadius: 8,
    marginTop: 20,
    // marginLeft: 5,
    // marginRight: 5,
    // padding: 10
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
    width: "90%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,


  }
});