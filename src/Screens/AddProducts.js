import React, { useState } from "react";
import { View, StyleSheet, Alert, TextInput, TouchableOpacity, Text, ImageBackground, Button, Image } from "react-native";
import { Product  } from '../Store'

const AddProducts = (props) => {
    const [productName, setProductName] = useState();
    //const [image, setImage] = useState();
    const [price, setPrice] = useState();
    const [offerPrice, setOfferPrice] = useState();


    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
          width: 1200,
          height: 780,
          cropping: true,
        }).then((image) => {
          console.log(image);
          const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
          setImage(imageUri);
        });
      };

    const _add=()=>{
        Product.addProduct(productName,image,price,offerPrice)
        .then(
            Alert.alert('Success', 'Product added')
            )
            .catch(
                err=> Alert.alert( err.code,err.message)
            )
    }

    return (
        <ImageBackground style={styles.container}
        source={require('../Icons/bg1.jpg')}>
            <Text style={styles.heading}>Add Product Page</Text>

            <TextInput
                style={styles.inputText}
                value={productName}
                onChangeText={setProductName}
                placeholder="Product Name ...">
            </TextInput>
            <TouchableOpacity style={styles.inputButton}>
            <Text>Add Image</Text>
            <Image source={require('../Icons/photo.png')}  style={{width:25,height:25}} />
            </TouchableOpacity>
            <TextInput
                style={styles.inputText}
                value={price}
                onChangeText={setPrice}
                keyboardType={"number-pad"}
                placeholder="Enter Price ...">
            </TextInput>
            <TextInput
                style={styles.inputText}
                value={offerPrice}
                onChangeText={setOfferPrice}
                keyboardType={"number-pad"}
                placeholder="Offer Price">
            </TextInput>

            <TouchableOpacity
                style={styles.submit}
                onPress={_add}
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

        </ImageBackground>
    )
}

export default AddProducts;

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
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
    inputButton: {
        flexDirection:"row",
        justifyContent:"space-between",
        height: 45,
        width: "90%",
        borderColor: "#0000FF",
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        backgroundColor:"#ADD8E6"
    },
    submit: {
        backgroundColor: "#FFA500",
        width: "90%",
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,


    },
    heading:{
        fontSize:20,
        color:"black",
        marginBottom:20,
        marginTop:20
    }
});