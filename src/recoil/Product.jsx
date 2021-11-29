import React, { useState } from 'react'
import { selector, useRecoilState, useRecoilValue } from 'recoil'
import { productList } from './state'
import { cloneDeep } from 'lodash';

const Product = () => {
    const [products, setProducts] = useRecoilState(productList)
    const [cart, setCart] = useState({})
    console.log(cart);

    const handleQuantity = (value, id) => {
        const cartProduct = products.findIndex(product => product.id === id)
        const allProducts = products
        const newProd = cloneDeep(allProducts)
        newProd[cartProduct].quantity = parseInt(value);
        setProducts(newProd)
    }

    return (
        <div className="container">
            <div className="row">
                {
                    products.map((product, ind) => (
                        <div className="col-md-4" key={ind}>
                            <div className="card p-5">
                                <div className="card-body">
                                    <h3>{product.title}</h3>
                                    <div className="d-flex justify-content-between">
                                        <h4>Price</h4>
                                        <h4>$ {product.price}</h4>
                                    </div>
                                    <input value={product.quantity} onChange={(e) => handleQuantity(e.target.value, product.id)} type="number" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>



        </div>
    )
}

export default Product
