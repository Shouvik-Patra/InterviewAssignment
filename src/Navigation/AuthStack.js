
import React from 'react'
import 'react-native-gesture-handler';
import {
    View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login';
import Registration from '../Screens/Registration';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registration" component={Registration} />
            </Stack.Navigator>
        </View>
    )
}

export default AuthStack