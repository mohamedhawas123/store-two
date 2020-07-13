import React from 'react'
import CartItem from './CartItem'

function CartList ({value}) {
    const {cart} = value;
    

    console.log(cart, value)
    return (
        <React.Fragment>
            {cart.map(item => {
                return <CartItem key={item.id} item={item} value={value} />
            })}
            
        </React.Fragment>
       
    )
}

export default CartList;