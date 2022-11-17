import axios from 'axios'
import React, { Component } from 'react'

export class CartItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quantity: this.props.cartItems.quantity
        }
        this.handleChange = this.handleChange.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    handleChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    removeFromCart = (event) => {
        if (localStorage.getItem("id")) {
            axios.get(`http://localhost:8080/cart/${localStorage.getItem("id")}/remove/${event.target.id}`)
                .then(response => {
                    // this.forceUpdate();
                })
                .catch(error => {
                    console.log(error)
                })
        } else {
            alert("Some error occured, Try logging in again!");
        }
    }

    addToCart = (event) => {
        const request = {
            quantity: this.state.quantity
        }
        if (this.state.quantity <= 0) {
            alert("Invalid Quantity");
        }
        else {
            if (localStorage.getItem("id")) {
                axios.post(`http://localhost:8080/cart/${localStorage.getItem("id")}/changeQuantity/${event.target.id}`, request)
                    .then(response => {
                        console.log("hejnf")
                    })
                    .catch(error => {
                        console.log(error)
                    })
            } else {
                alert("Please Login first!");
            }
        }
    }

    render() {
        console.log(this.props)
        return (
            <div className="m-5 " >
                <div className='row' style={{ height: "200px" }}>
                    <div className='col-4'>
                        <img src="https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_960_720.jpg" alt="product-item" style={{ width: "100%", height: "200px" }} />
                    </div>
                    <div className='col-7 mx-5'>
                        <p style={{ margin: "0px", fontSize: "29px" }}>{this.props.cartItems.product.name}</p>
                        <p style={{ margin: "0px", fontSize: "18px" }}>Rs. {this.props.cartItems.product.price}</p>
                        {/* <p style={{ margin: "0px", fontSize: "14px" }}>{this.props.cartItems.product.category}</p> */}
                        {/* <p style={{ margin: "0px", fontSize: "14px" }}>{this.props.cartItems.product.details}</p> */}
                        <input style={{ width: "200px", marginRight: "20px" }} type='number'
                            placeholder="Quantity"
                            name="quantity"
                            value={this.state.quantity}
                            onChange={this.handleChange} required
                        ></input>
                        <button style={{ backgroundColor: "green" }} id={this.props.cartItems.product.id} onClick={this.addToCart}>Add to Cart</button>
                        <div>
                            <button style={{ margin: " 20px 0px 0px 100px" }} id={this.props.cartItems.product.id} onClick={this.removeFromCart}>Remove from Cart</button>{/* <button id={cartItems.id} onClick={addToCart} style={{ marginTop: "32px", height: "50px" }}>Add to Cart</button> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartItem