import React from 'react'
export default function cart() {
    return <div >
        <img className='cartImg' src='https://cdn.iconscout.com/icon/premium/png-256-thumb/cart-832-1159525.png' alt='cart img' />
        <div className='numOfItems'>@</div>
        <div className='cartValue'>
            <h3>Cart:</h3>
            <br />
            <button>Payment</button>
        </div>
    </div>
}