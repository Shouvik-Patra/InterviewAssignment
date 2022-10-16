import React, { useState } from "react";
import { View, StyleSheet, Alert, TextInput, TouchableOpacity, Text, ImageBackground, Button, Image } from "react-native";
import { Product } from '../Store'

const BoxEdit = ({ dev, setEditBox }) => {
    const [productName, setProductName] = useState();
    //const [image, setImage] = useState();
    const [price, setPrice] = useState();
    const [offerPrice, setOfferPrice] = useState();

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputText}
                value={productName}
                onChangeText={setProductName}
                placeholder="Product Name ...">
            </TextInput>
            {/* <TouchableOpacity style={styles.inputButton}>
            <Text>Add Image</Text>
            <Image source={require('../Icons/photo.png')}  style={{width:25,height:25}} />
            </TouchableOpacity> */}
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
                style={styles.submit2}
                onPress={() =>
                    Product.updateProduct({ productName: setProductName, price: setPrice, offerPrice: setOfferPrice })
                        .then(
                            setEditBox(false)
                        )
                }
            >
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16
                }}>Update Product</Text>
            </TouchableOpacity>


        </View >
    )
}

export default BoxEdit;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        backgroundColor: "#fff",
        borderColor: "red",
        borderWidth: 2,
        padding: 10,
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
        flexDirection: "row",
        justifyContent: "space-between",
        height: 45,
        width: "90%",
        borderColor: "#0000FF",
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#ADD8E6"
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
    submit2: {
        backgroundColor: "#FF8282",
        width: "50%",
        height: 40,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,

    },
    heading: {
        fontSize: 20,
        color: "black",
        marginBottom: 20,
        marginTop: 20
    }
});