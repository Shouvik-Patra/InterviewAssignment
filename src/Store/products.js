import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

const addProduct = (productName, image, price, offerPrice) => {
    if (!productName || !price) {
        Alert.alert('Error', 'Please enter all fields')
    }

    return firestore()
        .collection('products')
        .doc()
        .set({
            productName,
            
            price,
            offerPrice
        })
        .catch(err => err)
}


const getProduct = () => {
    return firestore()
        .collection('products')
        .get()
        .then(snap => {
            const products = []
            snap.forEach(product => products.push(product.data()))
            return products;
        })
        .catch(err => err)
}

const deleteProduct = (postId) => {
    firestore()
      .collection('products')
      .doc(postId)
      .delete()
      .then(() => {
        Alert.alert(
          'Post deleted!',
          'Your post has been deleted successfully!',
        );
        // setDeleted(true);
      })
      .catch((e) => console.log('Error deleting post.', e));
  };


const Product = {
    addProduct,
    getProduct,
    deleteProduct
}
export default Product;


