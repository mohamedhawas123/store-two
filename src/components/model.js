import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button';
import {ProductConsumer} from '../context';
import styled from 'styled-components';



class Model extends Component {
    render() {
        return (
            <ProductConsumer>
           
            { hello => {
                console.log(hello.modelOpen)
                const { handleclose} = hello;

                const {title, price, img} = hello.modelProdcut;
                if (hello.modelOpen === false) {
                    return null
                } else {
                    return (
                         <ModelContainer>
                        <div className="container">
                            <div className="row">
                                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                    <h4>Item added to cart</h4>
                                    <img src={img} className="img-fluid" alt="product" />
                                    <h5>{title}</h5>
                                    <h5 className="text-muted">price: $ {price}</h5>
                                    <Link to="/">
                                         <ButtonContainer onClick={() => handleclose()}>
                                        continue shopping
                                    </ButtonContainer>
                                    </Link>

                                    <Link to="/cart">
                                         <ButtonContainer onClick={() => handleclose()}>
                                        Go to Cart
                                    </ButtonContainer>
                                    </Link>
                                   
                                </div>
                            </div>
                        </div>

                    </ModelContainer>
                    )
                   
                }
            } }
            </ProductConsumer>
        )
       

        
    }
}

const ModelContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background : rgba(0,0,0, 0.3);
display: flex;
align-items: center;
justify-content: center;

#modal {
    background : white;
}


`

export default Model