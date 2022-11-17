import axios from 'axios'
import React, { Component } from 'react'
import CartItem from './CartItem'

class Cart extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cartItems: [],
      quantity: ""
    }
    this.placeOrder = this.placeOrder.bind(this);
  }
  placeOrder() {
    if (localStorage.getItem("id")) {
      axios.get(`http://localhost:8080/order/${localStorage.getItem("id")}/createOrder`)
        .then(response => {
          alert("Order Placed")
          console.log("sajfdn")
          window.location.reload();
        })
        .catch(error => {
          alert("error occured")
        })
    } 
    else{
      alert("Login again!")
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/cart/${localStorage.getItem("id")}/getCart`)
      .then(response => {
        this.setState({
          cartItems: response.data,
        })
      })
      .catch(error => {
        alert("error occured")
      })
  }

  renderCartItems = () => {
    return this.state.cartItems.map(cartItems => <CartItem key={cartItems.id} cartItems={cartItems} />);
  }

  render() {
    return (
      <div>
        {this.renderCartItems()}
        <button style={{ width: "100%", margin: "20px", backgroundColor: "green" }}
          className='flex-end' onClick={this.placeOrder}>Place Order</button>
      </div>
    )
  }
}

export default Cart