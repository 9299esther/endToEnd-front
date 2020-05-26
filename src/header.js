import React from 'react'
import { Link } from 'react-router-dom';
import Menu from './menu';
import Logo from './logo'
import Cart from './cart'

export default function Header() {
    return <header>
        <Menu />
        <Link to='/' >
            <Logo />
        </Link>
        <Cart />
    </header>

}