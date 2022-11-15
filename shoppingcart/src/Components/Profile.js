import axios from 'axios';
import React, { Component } from 'react'

export class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: "",
      name: "",
      password: "",
      email: "",
      phone: "",
      address: {
        street: "",
        city: "",
        state: "",
        pincode: ""
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.loadData = this.loadData.bind(this);
  }


  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleChangeAddress(event) {
    this.setState({ address: { ...this.state.address, [event.target.name]: event.target.value } });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:8080/updateProfile', this.state)
      .then(response => {
        alert("Your Details have been updated!");
        console.log(response)
      })
      .catch(error => {
        alert("Incorrect Details");
        console.log(error)
      })

  }
  
  componentDidMount() {
    axios.get(`http://localhost:8080/getprofile/${localStorage.getItem("id")}`)
      .then(response => {
        this.setState(response.data)
        console.log(response)
      })
      .catch(error => {
        alert("Incorrect Credentials");
        console.log(error)
      })
}
  loadData(e) {
    axios.get('http://localhost:8080/getprofile/1')
      .then(response => {
        this.setState(response.data)
        console.log(response)
      })
      .catch(error => {
        alert("Error occured");
        console.log(error)
      })
  }

  render() {
    
    return (
      <div>
        <div>
          <div className="col-lg-8 mt-4 m-auto">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0 " style={{ fontSize: "24px" }} >Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p style={{ fontSize: "24px" }}>{this.state.name}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0" style={{ fontSize: "24px" }}>Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-dark mb-0" style={{ fontSize: "24px" }}>{this.state.email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0" style={{ fontSize: "24px" }}>Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-dark mb-0" style={{ fontSize: "24px" }}>{this.state.phone}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0" style={{ fontSize: "24px" }}>ID</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-dark mb-0" style={{ fontSize: "24px" }}>{this.state.id}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0" style={{ fontSize: "24px" }}>Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-dark mb-0" style={{ fontSize: "24px" }}>{this.state.address.street}, {this.state.address.city}, {this.state.address.state}, {this.state.address.pincode}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div style={{display:"flex"}}>
          <button type="button" className="btn btn-primary mt-1 mx-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Update Profile
          </button>
          <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">MyBasket</h1>
                  <button type="button" className="btn-close" onClick={this.loadData} data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={this.handleSubmit}>
                    <input type="number" placeholder="User Id"
                      name="id"
                      value={this.state.id}
                      onChange={this.handleChange} required
                    />
                    <input type="text" placeholder="Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange} required
                    />
                    <input type="email" placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange} required
                    />
                    <input type="password" placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange} required
                    />
                    <input type="number" placeholder="Phone No."
                      name="phone"
                      value={this.state.phone}
                      onChange={this.handleChange} required
                    />
                    <input type="text" placeholder="Street"
                      name="street"
                      value={this.state.address.street}
                      onChange={this.handleChangeAddress} required
                    />
                    <input type="text" placeholder="City"
                      name="city"
                      value={this.state.address.city}
                      onChange={this.handleChangeAddress} required
                    />
                    <input type="text" placeholder="State"
                      name="state"
                      value={this.state.address.state}
                      onChange={this.handleChangeAddress} required
                    />
                    <input type="text" placeholder="Pin Code"
                      name="pincode"
                      value={this.state.address.pincode}
                      onChange={this.handleChangeAddress} required
                    />
                    {/* <button>Sign Up</button> */}
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={this.loadData}>Close</button>
                  <button type="button" className="btn btn-primary" onClick={this.handleSubmit} data-bs-dismiss="modal">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile