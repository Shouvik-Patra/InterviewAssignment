
import React from 'react'
import 'react-native-gesture-handler';
import {
    View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Products from '../Screens/Products';
import AddProducts from '../Screens/AddProducts';

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="AddProduct" component={AddProducts} />
                <Stack.Screen name="Products" component={Products} />
            </Stack.Navigator>
        </View>
    )
}

export default MainStack