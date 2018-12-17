import React from 'react';
import AddButton from '../product-listing/add-btn'
import RemoveButton from '../product-listing/remove-btn'


export default function ProductListItems(props){
   
	return <div className='product-list-item'>
   
  <h4> {props.product.name}</h4>
  <img 
       heigth = {100}
       width ={100}
       alt ='text'
       title = {props.product.name}
       src ={props.product.image} 
       />
	
	
	<div>${props.product.price}</div>
	<div>
	<AddButton
	 product ={props.product}
	 cartItem = {props.cartItem}
     addToCart ={props.addToCart}
	/>

	{
		props.cartItem 
		? <RemoveButton
			 product ={props.product}
			 cartItem = {props.cartItem}
		     removeFromCart ={props.removeFromCart}
			/>
	   : null
	}
	
	</div>
	</div>
}