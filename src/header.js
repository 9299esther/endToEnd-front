import React from 'react'
import { Link } from 'react-router-dom';
import Menu from './menu';
import Logo from './logo'
import Cart from './cart'

export default function Header() {
    return <header>
        <div className='cartToSearchDiv'>
            <Cart />

            <Link className='logoLinkToHomePage' to='/'>
                <Logo />
            </Link>

            <form className='searchBar'>{/*onSubmit={handleSubmit}*/}
                <section>
                    <input type='text' placeholder='Enter a filter' />
                    <button type="submit" ><img className='saerchIcon' src='data:image/png;base64,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' alt='searchIcon'/></button>
                </section>
            </form>

        </div>
        <Menu />
        <div className='flaxDiv'>
            <Link to='/addProduct'>
                <div className='addProductDiv'><b>+</b></div>
            </Link>
            <Link to='/adit'>
                <div className='aditProductDiv'><b>Adit</b></div>
            </Link>
        </div>
    </header>

}