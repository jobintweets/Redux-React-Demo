import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import '../styles/Product.css';
function Product() {
    const [test,setTest] = useState(useSelector((state) => state.allProducts.products));
    const products = useSelector((state) => state.allProducts.products);
   
   
    const productList = products.map((product) => {
        return (
            <div className="product__row" key={product.id}>
                <Link to={`/product/${product.id}`}>
    <div className="product__card">
                <div className="">
                    <div className="image">
                            <img src={product.image} alt="image" className="product__image" />
                    </div>
                    <div className="product__details">
                            <div className="header" >{product.title}</div>
                            <div className=" price" >${product.price}</div>
                                <div className="meta" >{ product.category}</div>
                    </div>
                </div>

            </div>
                </Link>
        
          
        </div>
    )  
})
    return (
        <>
            {productList}
       </>
    )
}

export default Product
