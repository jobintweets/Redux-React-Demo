import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios';
import Product from './Product';
import { setProducts } from '../redux/actions/productActions';
function ProductListing() {
const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((error) => {
            console.log(error)
        })
        dispatch(setProducts(response.data))
       
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <div className="ui grid container">
            <Product/>
        </div>
    )
}

export default ProductListing
