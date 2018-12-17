import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage';
import CartPage from './pages/cartpage';
import CheckOutPage from './pages/checkoutpage';
import OrdersPage from './pages/orderspage';

const Router = ()=> (
<Switch>
 <Route exact path='/' component ={HomePage}/>
  <Route exact path='/cart' component ={CartPage}/>
  <Route exact path='/checkout' component ={CheckOutPage}/>
  <Route exact path='/orders/:id' component ={OrdersPage}/>
</Switch>
	)


export default Router