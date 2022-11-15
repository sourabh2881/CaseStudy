import axios from 'axios'
import React, { Component } from 'react'

export class Order extends Component {
  constructor(props) {
    super(props)

    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/order/${localStorage.getItem("id")}/getOrders`)
      .then(response => {
        this.setState({
          orders: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  renderOrders = () => {
    return this.state.orders.map(order => <div key={order.id} >{order.id}</div>);
  }

  render() {
    return (
      <div>{this.renderOrders()}</div>
    )
  }
}

export default Order