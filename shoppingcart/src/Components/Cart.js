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
          console.log("hejnf")
        })
        .catch(error => {
          console.log(error)
        })
    } 
  }

  componentDidMount() {
    console.log(localStorage.getItem("id"))
    console.log("first")
    axios.get(`http://localhost:8080/cart/${localStorage.getItem("id")}/getCart`)
      .then(response => {
        console.log(response)
        this.setState({
          cartItems: response.data,
        })
      })
      .catch(error => {
        console.log(error)
      })
    console.log(this.state.cartItems)
  }

  renderCartItems = () => {
    return this.state.cartItems.map(cartItems => <CartItem key={cartItems.id} cartItems={cartItems} />);
  }

  render() {
    console.log(this.state.cartItems)
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