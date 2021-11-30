import React, { useState } from 'react'
import { selector, useRecoilState, useRecoilValue } from 'recoil'
import { productList } from './state'
import { cloneDeep } from 'lodash';

const Product = () => {
    const [products, setProducts] = useRecoilState(productList)


    const replaceItemAtIndex = (allProducts, index, newVal) => {

        const newProductsState = []

        const productsBeforeIndex = allProducts.slice(0, index)
        const productsAfterIndex = allProducts.slice(index + 1)
        newProductsState.push(...productsBeforeIndex)
        newProductsState.push(newVal)
        newProductsState.push(...productsAfterIndex)

        return newProductsState;
    }




    // const handleQuantity = (value, id) => {
    //     const index = products.findIndex(product => product.id === id)
    //     const changeableProduct = {...products[index]}
    //     console.log(changeableProduct);
    //     changeableProduct.quantity = Number(value)
    //     const temp = replaceItemAtIndex(products, index, changeableProduct)

    //     setProducts(temp)
    // }

    const replaceItemQuantity = (prodArr, ind, changeableProduct) => {
        return [...prodArr.slice(0, ind), changeableProduct, ...products.slice(ind + 1)]
    }

    const handleQuantity = (value, id) => {
        const index = products.findIndex(product => product.id === id)
        const changeableProduct = { ...products[index] }

        changeableProduct.quantity = Number(value)

        let temp = replaceItemQuantity(products, index, changeableProduct,)

        setProducts(temp)


    }

    // 1[2{q: 1}, 3{q: 3}, 5{q:10}, 5{q: 5}]
    // const state = [...state]
    // 6[2{q: 1}, 3{q: 3}, 5{q:10}, 5{q: 5}]
    // 10[11{q: 1}, 12{q: 3},13{q:15}, 14{q: 5}]

    const productTotalState = selector({
        key: "productTotalState",
        get: ({ get }) => {

            const getProductAtom = get(productList)
            let totalCostValue = 0

            // for(let i = 0; i<getProductAtom.length; i++) {
            //     let temSum = Number(getProductAtom[i].price) * Number(getProductAtom[i].quantity)
            //     totalCostValue += temSum
            // }

            getProductAtom?.map((prod) => {
                let temSum = Number(prod.price) * Number(prod.quantity)
                totalCostValue += temSum
            })
        
            return totalCostValue
        }
    })

    const totalValue = useRecoilValue(productTotalState)

    return (
        <div className="container">
            <h1 className="text-center">Total Cost $ {totalValue} </h1>
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
