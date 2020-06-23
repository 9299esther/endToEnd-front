import React from 'react'
import { Link } from 'react-router-dom';
import Menu from './menu';
import Logo from './logo'
import Cart from './cart'
// import AddProduct from './addProduct'

export default function Header() {
    return <header>
        <div className='cartToSearchDiv'>
        <Cart />

        <Link  className='logoLinkToHomePage'  to='/'>
            <Logo  />
        </Link>
        <form className='searchBar'>{/*onSubmit={handleSubmit}*/}
            <section>
                {/* <label>Search:</label> */}
                <input type='text' placeholder='Enter a filter' />
                <input type='submit' value='Search' />
            </section>
        </form>
        </div>
        <Menu />
        <Link to='/addProduct'>
               <div className='addProductDiv'><b>+</b></div>
        </Link>
    </header>

}