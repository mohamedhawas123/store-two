import React, {Component} from 'react'
import {storeProducts, detailProduct} from './data'


const ProductContext = React.createContext()

class ProductProvider extends Component {

    state = {
        products: [],
        detailproducts: detailProduct,
        cart :[],
        modelOpen: false,
        modelProdcut: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };

    componentDidMount() {
        this.setProducts()
    }

    setProducts = () => {
        let products = []
        storeProducts.forEach( item => {
                const update = {...item}
                products = [...products, update ]
        } );
        this.setState( () => {
            return {products: products}
        } )
    }

    handlegetitem = id => {
        const prodcutId = this.state.products.find(item => item.id === id);
        return prodcutId
    }

    handleDetail = (id) => {
       
        const product = this.handlegetitem(id)
        this.setState( () => {
            return {detailproducts: product}
        })
    }
    handleaddTocart = (id) => {
        let tempProducts = [...this.state.products]
        const productIndex = tempProducts.indexOf(this.handlegetitem(id));
        const product = tempProducts[productIndex]
        product.count = 1;
        product.inCart = true
        const price = product.price;
        product.total = price
        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product] }
        }, () => this.handleaddtotal())

        
       
    }

    handleopenModel = id => {
        const product = this.handlegetitem(id)
        this.setState( () => {
            return {modelProdcut : product, modelOpen: true}
        })
    }

    hadnlecloseModel = () => {
        this.setState({modelOpen:false})
    }

    handleincrement = id => {
        let tempcart = [...this.state.cart];
        const productfind = tempcart.find(item => item.id ===id)
        const productindex = tempcart.indexOf(productfind)
        const product = tempcart[productindex]

        product.count = product.count + 1;
        product.total = product.count * product.price

        this.setState(() => {
            return {
                cart: [...tempcart]
            }
        }, () => {
            this.handleaddtotal()
        })


    }

    handledecrement = id => {
      
        let temcart = [...this.state.cart]
        const prodcutfind = temcart.find(item => item.id ===id)
        const prodcutindex = temcart.indexOf(prodcutfind)
        const product = temcart[prodcutindex]
        product.count = product.count - 1;

        if ( product.count === 0 ) {
            this.handleremoveItem(id)
        } else {
            product.total = product.price * product.count

            this.setState( () => {
                return {
                    cart : [...temcart]
                }
            },() => {
                this.handleaddtotal()
            } )
        }
            
        

    }

    handleremoveItem = id => {
        let tempprodut = [...this.state.products];
        let tempcart = [...this.state.cart];

        tempcart = tempcart.filter(item => item.id !== id)

        const index = tempprodut.indexOf(this.handlegetitem(id))

        let removeitem = tempprodut[index]
        removeitem.inCart = false;
        removeitem.price = 0;
        removeitem.total = 0;

        this.setState(() => {
            return {
                cart: [...tempcart],
                products: [...tempprodut]

            }
        }, () => {
            this.handleaddtotal()
        })

    }

    handleclear = () => {
      
        
        this.setState(() => {
            return {cart: []}
        }, () => {
            this.setProducts();
            this.handleaddtotal()
        })
    }

    handleaddtotal = () => {
        let total = 0;
        this.state.cart.map(item => total += item.total)
        const tax = total * 0.1
        const parsetex = parseFloat(tax.toFixed(2))
        const totlaal = total + parsetex

        this.setState({ cartSubTotal: total, cartTax: parsetex, cartTotal: totlaal })

    }


    render() {
        return (

            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                handleaddTocart: this.handleaddTocart,
                handleopen : this.handleopenModel,
                handleclose : this.hadnlecloseModel,
                increment : this.handleincrement,
                decrement : this.handledecrement,
                removeItem : this.handleremoveItem,
                clear : this.handleclear,

            }}>
                {this.props.children}
            </ProductContext.Provider>

        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer} 


