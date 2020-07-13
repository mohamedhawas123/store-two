import React, { Component } from 'react'
import Product from './product'
import Title from './Title'
import {storeProducts} from '../data'
import {ProductConsumer} from '../context'

class ProductList extends Component {

  state = {
    products: storeProducts
  }

    render() {
      const data = this.state.products
      console.log(data[1].title)
        return (

          <React.Fragment>
            <div className="py-5">
              <div className="container">
                <Title name="our" title="products" />
              <div className="row">
              <ProductConsumer>
                {(hello) => {
                
        return hello.products.map ( (item) => {
          console.log(item.title)
                        return <Product Product={item} />
                          

                      })
              }}
              </ProductConsumer>
              


             



              </div>
              </div>
            </div>
          </React.Fragment>

         // <Product />
        )
    }
}

export default ProductList;