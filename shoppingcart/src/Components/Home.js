import axios from 'axios';
import React from 'react'
import Products from './Products'

import { Component } from 'react'
class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [],
      minPrice: 0,
      maxPrice: 1000000000,
      category: "Grain"
    }
    this.handleChange = this.handleChange.bind(this);
    this.applyFilter = this.applyFilter.bind(this);

  }

  componentDidMount() {
    if (this.props.searchString) {
      axios.get(`http://localhost:8080/products/search/${this.props.searchString}`)
        .then(response => {
          this.setState({
            products: response.data
          })
        })
        .catch(error => {
          alert("error occured")
        })
    }
    else {
      axios.get("http://localhost:8080/products/getAllProducts")
        .then(response => {
          this.setState({
            products: response.data
          })
        })
        .catch(error => {
          alert("error occured")
        })
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  applyFilter(event) {
    event.preventDefault();
    const request = {
      minPrice: this.state.minPrice,
      maxPrice: this.state.maxPrice
    }

    if (!this.state.minPrice) {
      request.minPrice = 0
    }
    if (!this.state.maxPrice) {
      request.maxPrice = 1000000000
    }
    axios.post(`http://localhost:8080/products/${this.state.category}/getFilteredProducts`, request)
      .then(response => {
        this.setState({
          products: response.data
        })
      })
      .catch(error => {
        alert("error occured")
      })
  }

  renderProducts = () => {
    return this.state.products.map(person => <Products key={person.id} person={person} />);
  }

  render() {
    return (
      <div>
        <div className='d-flex m-5' style={{ textAlign: "center" }}>
          <b
            style={{ fontSize: "24px" }}>
            Filter: </b>
          <span
            style={{ height: "40px", marginTop: "6px", marginLeft: "38px", marginRight: "15px", fontSize: "18px" }}>
            Minimum Price:</span>
          <input
            type='number'
            style={{ height: "40px", width: "150px" }}
            name="minPrice" value={this.state.minPrice}
            onChange={this.handleChange} />
          <span
            style={{ height: "40px", marginTop: "6px", marginLeft: "38px", marginRight: "15px", fontSize: "18px" }}>
            Maximum Price:</span>
          <input
            type='number'
            style={{ height: "40px", width: "150px" }}
            name="maxPrice" value={this.state.maxPrice}
            onChange={this.handleChange} />
          <span
            style={{ height: "40px", marginTop: "6px", marginLeft: "38px", marginRight: "15px", fontSize: "18px" }}>
            Category:</span>
          <input
            type='text'
            style={{ height: "40px", width: "170px" }} placeholder="Category"
            name="category" value={this.state.category}
            onChange={this.handleChange} required />
          <button style={{ height: "40px", paddingTop: "6px", marginLeft: "60px" }} onClick={this.applyFilter}>Apply</button>
        </div>
        {this.renderProducts()}
      </div>
    )
  }
}
export default Home