import React from 'react';
import {Field, reduxForm} from 'redux-form'

import {connect} from 'react-redux';

function CheckoutForm(props){

	const { handleSubmit} = props

	return <div className= 'checkoutForm' >
		<form onSubmit ={handleSubmit}>

       <div className='nameField' >
       <label htmlFor='order[name]'>Your name: </label> <br/>
       <Field name='order[name]' component='input' type='text'/>
       </div>

       <div className='emailField' >
       <label htmlFor='order[email]'>Your Email: </label> <br/>
       <Field name='order[email]' component='input' type='email'/>
       </div>

       <button className='submitbtn' type='submit'>Submit orders</button>

		</form>
	</div>
}
 
CheckoutForm = reduxForm(
{      
 form: 'checkout',
 
})(CheckoutForm)



export default CheckoutForm
