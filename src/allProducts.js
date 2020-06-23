import React, { useState, useEffect } from 'react'
// import ProductViue from './productViue'
// import { Link } from 'react-router-dom'

export default function AllProducts() {
    const [products, setProducts] = useState([])
    // localStorage.products =[]
    const [allProducts, setAllProducts] = useState([])
    // var allProducts=[]

    async function fetchProducts() {
        try {
            const res = await fetch(`http://localhost:1234/prduct`).then(r => r.json())
            setProducts(res)
        } catch (error) {
            return 'error:' + error.message || error
        }
    }
    useEffect(() => { fetchProducts() }, [])

    async function sortBypice() {
        try {
            //console.log(products,await fetch(`http://localhost:1234/sortByPrice`).then(r => r.json()));

            products === await fetch(`http://localhost:1234/sortByPrice`).then(r => r.json()) ?
                setProducts(await fetch(`http://localhost:1234/sortByPriceFromHigh`).then(r => r.json()))
                : setProducts(await fetch(`http://localhost:1234/sortByPrice`).then(r => r.json()))

        } catch (error) {
            return 'error:' + error.message || error
        }
    }
    async function sortByName() {
        try {
            const res = await fetch(`http://localhost:1234/sortByName`).then(r => r.json())
            setProducts(res)
        } catch (error) {
            return 'error:' + error.message || error
        }
    }
    async function FilterByPrice() {
        try {
            var slider = document.getElementsByClassName('slider')
            var output = document.getElementsByClassName('output')

            console.log(output.innerHTML = slider.value);

            // const res = await fetch(`http://localhost:1234/prductFilter/price/:${value}`).then(r => r.json())
            // setProducts(res)
        } catch (error) {
            return 'error:' + error.message || error
        }
    }
    function setCart(name) {
        // var carntProducts
        // carntProducts=JSON.parse(localStorage.products)//
        //
        setAllProducts(name)
        console.log(allProducts);

        //localStorage.setItem("products",JSON.stringify(carntProducts))
    }
    return <div>
        <div>
            <div onClick={() => sortBypice()}>Price <img src="https://img.icons8.com/small/16/000000/sort.png" alt='sortIcon' /></div>
            <div onClick={() => sortByName()}>Name <img src="https://img.icons8.com/small/16/000000/sort.png" alt='sortIcon' /></div>
            <input className='slider' onClick={() => FilterByPrice()}/*  value='50' */ type="range" min="0" max="500" />
            <div className='output'></div>
            <label>Price range</label>
        </div>
        {products.map(product =>
            <div className='productViueDiv' >

                <div className='flaxDiv'>
                    <img src={product.image} alt='pix' className='productPixsizeing' />
                    <form onSubmit={setCart}>
                        {/* <Link to={ `/productViue/${product.name}` } > { product.name }</Link> */}
                        {/* <ProductViue name={product.name} /> */}
                        <h2>{product.price} ₪</h2>

                        <input type='submit' value='Add to cart' />
                    </form>
                </div>
            </div>
        )}

    </div>

}
