import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { selectProduct,removeSelectedProduct } from '../redux/actions/productActions';
import axios from 'axios';

function ProductDetails() {
    const product = useSelector((state) => state.product);
    const { id, title, price, description, category, image } = product;
    const { productId } = useParams()
    const dispatch = useDispatch();

    const fetchProduct = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((error) => {
            console.log(error)
        })
        dispatch(selectProduct(response.data));
    }
    
    useEffect(() => {
        if (productId && productId !== '') {
            fetchProduct();
        }
        return () => {
            dispatch(removeSelectedProduct());
        }

      }, [productId])
    
    return (
        <div className="ui grid container">
            <div className="ui placeholder segment">
                <img src={image} alt="" />
                <p>{title}</p>
                <p>${ price}</p>
            </div>
          
        </div>
    )
}

export default ProductDetails
