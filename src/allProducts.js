import React, { useState, useEffect } from 'react'
// import ProductViue from './productViue'


export default function AllProducts(props) {
    const [products, setProducts] = useState([])

    async function fetchProducts() {
        try {
            const res = await fetch(`http://localhost:1234/prduct`, {
                headers: {
                    authorization: localStorage.token
                }
            }).then(r => r.json())
            debugger
            setProducts(res)
        } catch (error) {
            debugger
        }
    }

    useEffect(() => { fetchProducts() }, [])



    return <div>
        {JSON.stringify(products)}
    </div>

}
//    return <div className='allProductsDiv'>
//         <h1>All Products</h1>
//         <ProductViue />
//         <ProductViue />
//     </div>
//