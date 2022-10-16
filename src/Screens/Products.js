import React, { useState, useEffect } from 'react'
import { View, ScrollView, Alert, ActivityIndicator, Text, StyleSheet, FlatList, ImageBackground, TouchableOpacity, SafeAreaView, StatusBar, Image } from "react-native";
import { Product } from '../Store'

const Products = () => {

    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Product.getProduct()

            .then(prod =>
                setProducts(prod),
                setLoading(false)
            )
            .catch(err => Alert.alert(err.code, err.message))
    })
    

    if (loading) {
        return <ActivityIndicator
            color="#0000FF"
            size='large'
        />
    }

    return (

        <SafeAreaView style={styles.container}>
            <Text>Product List</Text>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <View style={styles.card}>


                        <Image style={styles.card2} source={require('../Icons/unnamed.png')}></Image>


                        <Text style={{fontSize:18,color:"#A52A2A",fontWeight:'900'}}> {item.productName}</Text>
                        <Text style={{fontSize:16,color:"black",fontWeight:'900'}}> Price:{item.price}</Text>
                        <Text style={{fontSize:16,color:"#A52A2A",fontWeight:'900'}}>Offer Price {item.offerPrice}</Text>

                        <View style={styles.sub}>
                            <TouchableOpacity
                                style={styles.submit}
                                onPress={() => Product.deleteProduct(item.id)}
                            >
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 16
                                }}>Delete</Text>
                            </TouchableOpacity> 
                            
                            <TouchableOpacity
                                style={styles.submit}
                               // onPress={() => Auth.signUp(Name, Email, Password)}
                            >
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 16
                                }}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>

    )
}
export default Products;

const styles = StyleSheet.create({
  
    output: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        // backgroundColor: "#fff"

    },
    sub:{
        width:"100%",
        flexDirection:"row",
        margin:5,
        alignItems:"center",
        justifyContent:"space-between"
    },
    card: {
        padding: 5,
        alignItems: "center",
        justifyContent: "flex-start",
        borderWidth: 2,
        borderColor: "#808080",
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5,
        marginTop:5
    },
    card2: {
        width: 250,
        height: 120,
        alignItems: "center",
        justifyContent: "flex-start",
        borderWidth: 3,
        borderColor: "#808080",
        backgroundColor: "#c6c6c6",
        borderRadius: 15,
        marginLeft: 5,
        marginRight: 5,
        padding: 10
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
        width: "45%",
        height: 30,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        borderColor:"#808080",
        borderWidth:1

        //marginTop: 20,


    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});