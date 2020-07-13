import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/productList'
import Detail from './components/detail'
import Default from './components/default'
import Cart from './components/Cart/cart'
import Navbar from './components/navbar'
import Model from './components/model'
import {Switch, Route} from 'react-router-dom';





class App extends Component {
  render() {
    return (
      <React.Fragment>  
        <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/detail/" component={Detail} />
        <Route path="/cart" component={Cart} />
        
        <Route component={Default} />
      </Switch>
      <Model />
    
      </React.Fragment>
    );
  }
  
}

export default App;
