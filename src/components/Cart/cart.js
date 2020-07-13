import React, {Component } from 'react'
import Title from '../Title'
import {ProductConsumer} from '../../context'
import Emptycart from '../Cart/EmptyCart'
import Column from './Column'
import CartList from '../Cart/cartlist'
import CartTotal from './carttotal'

class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value
                        if(cart.length >0) {
                            return (
                                <React.Fragment>
                                    <Title name="Your" title="Cart" />
                                    <Column />
                                    <CartList value={value} />
                                    <CartTotal value={value} />
                                    
                                </React.Fragment>
                                
                            )
                        } else {
                            return (
                                <React.Fragment>
                                     
                                <Emptycart />
                                
                                </React.Fragment>
                               
                            )
                        }
                    }}
                </ProductConsumer>
               
                   
                    
            </section>
            
        )
    }
}

export default Cart;