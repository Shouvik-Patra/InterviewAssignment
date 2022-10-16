import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const createUserInDb = (uid, name, email) => {
    return firestore().collection('users').doc(uid).set(
        {
            uid,
            name,
            email
        }
    )
}

const signUp = (name, email, password) => {

    if (!name || !email || !password) {
        Alert.alert('Error', 'Input Missing!!!')
    }

    return auth().createUserWithEmailAndPassword(email, password)
        .then(cred => {
            const { uid } = cred.user;
            auth().currentUser.updateProfile({
                displayName: name
            })

            return uid
        })
        .catch(

            err => Alert.alert(err.code, err.message)
        )
        .then(uid => createUserInDb(uid, name, email))
        .catch(
            err => Alert.alert(err.code, err.message)
        )
}
const signIn = (email, password) => {
    if (!email || !password) {
        Alert.alert('Error', 'Enter Correct Email/Password!!!')
    }
    return auth().createUserWithEmailAndPassword(email, password)
        .then(() => { })
        .catch(err => Alert.alert(err.code, err.message))
}

const forgetPassword = (email) => {
    if (!email) {
        Alert.alert('Error', 'Please enter email')
    }

    return auth().sendPasswordResetEmail(email)
}

const signOut = () => {
    return auth().signOut()
}

const Auth = {
    signUp,
    signIn,
    forgetPassword,
    signOut,
}

export default Auth