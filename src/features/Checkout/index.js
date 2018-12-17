import React from 'react';
import {connect} from 'react-redux'

import Cart from '../cart'
import CheckoutForm from '../Checkout/form'
import fetchApi  from '../../modules/fetch-api';



 
function submitOrder(values,cart){
	
	const {name, email} =values.order

	fetchApi('post', "http://student-example-api.herokuapp.com/v1/orders.json",
	{
		order: {
			name,
			email,
			order_items_attributes: cart.map(item =>({
				product_id: item.id,
				qty: item.quantity,
			}))
		}
	}).then(json =>{
      if(json.errors){
      	alert('something went wrong.')
      return
      }
       document.location.href =`/orders/${json.id}`
    })
}

function Checkout(props){

	const { cart } = props
	return <div>
	<div>
	<Cart/>
	</div>
	<CheckoutForm onSubmit ={(values)=>submitOrder(values,cart)} />
	</div>
}

  function mapStateToProps(state){
  	return {
  		cart: state.cart
  	}
  }
 function mapDispatchToProps(props){
   return {}
 }
export default connect(mapStateToProps,mapDispatchToProps)(Checkout)