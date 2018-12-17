import React from 'react';
import fetchApi from '../../modules/fetch-api'

class Order extends React.Component{
	state ={
		order : null
	}



componentDidMount(){
	fetchApi('get',`http://student-example-api.herokuapp.com/v1/orders/${this.props.id}`
		).then(json => {
			this.setState({
				order: json
			})
		})
}
		 renderOrder(){
		 	const { name, email, order_items } = this.state.order

		 	return <div className='orderDiv' >
		 	    <h4 className = 'orders' > Order Info </h4>
		 		<div className = 'order_items' >Name:  {name }</div>
		 		<div className = 'order_items' > Email: {email}</div>
		 		<h4 className = 'orders' >Items</h4>
		 		<div className = 'order_items' >
		 		<ol >
		 			{
		 				order_items && order_items.map(items =>{
		 					const {product, qty , product: {name, image, price } } = items

		 					return <li>
		 							<img src={image} width={32} />
		 							{name}
		 							({qty} X ${price} = ${parseFloat(qty) * parseFloat(price)})
		 							</li>
		 				})
		 			}
		 		</ol>
		 		</div>
		 	</div>

		}

		render() {
			const {order} = this.state

			return <div>
				{
					order ? this.renderOrder() : 'Loading...'
				}
			</div>
		}
}

export default Order