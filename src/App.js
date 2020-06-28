import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import Header from './header'
import Footer from './footer'
import AllProducts from './allProducts'
import ProductViue from './productViue'
import AddProduct from './addProduct'
import Adit from './adit'



function App() {
  return (
    <div className="App">
      <Header />

      <Switch >
        <Route path='/' exact component={Home} />
        <Route path='/allProducts' exact component={AllProducts} />
        <Route path='/productViue/:name'  component={ProductViue} />
        <Route path='/AddProduct' exact component={AddProduct} />
        <Route path='/adit' exact component={Adit} />
      
      </Switch>
      <Footer />

    </div>
  );
}

export default App;
