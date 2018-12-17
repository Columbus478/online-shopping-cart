import React from 'react'

export default function RemoveButton(props){
  return <button className='removebtn'
	      onClick ={()=>props.removeFromCart(props.cartItem)}> 
	          Remove
	    </button>
}