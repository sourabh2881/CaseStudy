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
        alert("error occured")
      })
  }

  renderOrders = () => {
    let message = "Cancelled"
    return this.state.orders.map(order => {
      if (order.status) {
        message = "Accepted"
      }
      return (
        <div key={order.orderId} className="m-4 p-3" style={{ backgroundColor: "lightgray" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2 style={{color:"blue"}}>MyBasket</h2>
            <h2 style={{ color: "green" }}>{message}</h2>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
              {order.products.map(prod => {
                return (
                  <p key={prod.id} style={{ fontSize:"20px", margin: "5px 0px 2px 10px" }}>
                    {prod.name}
                  </p>
                );
              })}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}><h4>Rs. {order.price}</h4></div>
          </div>
        </div >);
    })
  }

  render() {
    return (
      <div> {this.renderOrders()}</div >
    )
  }
}

export default Order