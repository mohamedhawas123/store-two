import React, {Component } from 'react'
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import { Link } from 'react-router-dom'



class Detail extends Component {
    render() {
        return (
             <ProductConsumer>
                 {hello => {
                     const {id, title, img, price, company, info, inCart} = hello.detailproducts;
                     console.log(img)
                     return (
                         <div className="container py-5">
                             <div className="row">
                                 <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                     <h1>{title}</h1>
                                 </div>
                             </div>
                             <div className="row">
                                 <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img alt="somy" src={`http://localhost:3000/${img}`} className="img-fluid" />
                                 </div>
                                 <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model : {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2" >
                                        made by: <span className="text-uppercase">{company}</span>
                                    </h4>

                                    <h4 className="text-bule">Price :
                                        <strong>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">some info about product</p>
                     <p className="text-muted lead">{info}</p>
                                     </div>

                                     <Link to="/">
                                         <ButtonContainer>Back to Products</ButtonContainer>
                                     </Link>
                                     <ButtonContainer onClick={() => {
                                         hello.handleaddTocart(id);
                                         hello.handleopen(id)
                                     }} disabled={inCart? true: false} >
                                         {inCart ? "inCart" : "Add to Cart"}
                                     </ButtonContainer>
                             </div>
                         </div>
                     )
                 }}
             </ProductConsumer>
        )
    }
}

export default Detail;