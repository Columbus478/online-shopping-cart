import React, { Component } from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Router from './Router';


const Navigation = ({ cart })=>
  <nav > 
  <ul className='nav-bar' >
   <li className='header' ><NavLink to='/'>Home Page</NavLink></li>
   <li className='header'><NavLink to='/cart' data-notifications = {
    cart.reduce((acc,item) => {
      return acc + item.quantity} , 0 )
    } >My cart</NavLink></li>
   <li className='header'><NavLink to='/checkout'>Checkout</NavLink></li>
  </ul>
  </nav>


class App extends Component {
  render() {
    return <div className='page-container'>
    <Navigation {...this.props}/>
    <Router/>
    </div>
  }
}


function mapStateToProps(state){
  return {    
        cart: state.cart,
      }
}

export default withRouter(connect(mapStateToProps)(App));
