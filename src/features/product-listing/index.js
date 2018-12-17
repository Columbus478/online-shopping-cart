import React from 'react';
import {connect} from 'react-redux';

import ProductListItems from './product-list-item';
import fetchApi  from '../../modules/fetch-api';

class ProductListing extends React.Component {
componentDidMount(){
 const { loadProducts } = this.props
  fetchApi('get',"http://student-example-api.herokuapp.com/v1/products.json"
    ).then((json =>{
      loadProducts(json)
    }))
}

 render(){
  const { addToCart, removeFromCart, products, cart } = this.props
       return <div className='product-listing'>
         {
          products.map(product =>
           <ProductListItems 
           product ={product}
           addToCart = {addToCart}
           removeFromCart = {removeFromCart}
           cartItem ={cart.filter(cartItem=>cartItem.id ===product.id)[0]}
           />)
         }      
      </div>
 }
}

function mapStateToProps(state){
  return { 
  	      cart: state.cart,
          products: state.products,
  		}
}


function mapDispatchToProps(dispatch){
	return {
      loadProducts: (products) => {
        dispatch({type: 'LOAD', payload: products})
      },
			addToCart: (item) => {
				dispatch({type: 'ADD', payload: item})
		},
			removeFromCart: (item) => {
				dispatch({type: 'REMOVE', payload: item})
		}
     }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);