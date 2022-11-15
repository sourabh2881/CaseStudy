import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'
import axios from 'axios';
import Products from './Products';

class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchString: "",
            showProducts: false,
            products: []
        }
        this.searchProducts = this.searchProducts.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    searchProducts(event) {
        event.preventDefault();
        console.log("hello")
        this.props.setSearchString(this.state.searchString);
        // axios.get(`http://localhost:8080/products/search/${this.state.searchString}`)
        //     .then(response => {
        //         this.setState({
        //             products: response.data,
        //             showProducts: true
        //         })
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })
    }

    renderProducts = () => {
        return this.state.products.map(person => <Products key={person.id} person={person} />);
    }


    render() {
        console.log("............")
        console.log(this.state.products)
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">MyBasket</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link  text-white" to='/'>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link  text-white" to='/profile'>Profile</NavLink>
                                </li>
                            </ul>
                            <form className="d-flex flex-row bg-dark" role="search" >
                                <input className="form-control me-2" type="search" placeholder="Search for Products" aria-label="Search" name='searchString' value={this.state.searchString} onChange={this.handleChange} />
                                <button className="btn btn-outline-success" type="submit" onClick={this.searchProducts}>Search</button>
                            </form>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white" to='/cart'>Cart</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white" to='/order'>My Orders</NavLink>
                                    {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link text-white" to='/login'>Log In/Out</NavLink>
                                    {/* <a className="nav-link" href="#">MyCart</a> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
                    {this.renderProducts()}
                </div >
            </>
        )
    }
}

export default Navbar

// export const Navbar = () => {

//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
//             <div className="container-fluid">
//                 <a className="navbar-brand" href="#">MyBasket</a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <NavLink className="nav-link  text-white" to='/'>Home</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link  text-white" to='/profile'>Profile</NavLink>
//                         </li>
//                     </ul>
//                     <form className="d-flex flex-row bg-dark" role="search">
//                         <input className="form-control me-2" type="search" placeholder="Search for Products" aria-label="Search" />
//                         <button className="btn btn-outline-success" type="submit">Search</button>
//                     </form>
//                     <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <NavLink className="nav-link text-white" to='/cart'>Cart</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link text-white" to='/order'>My Orders</NavLink>
//                             {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link text-white" to='/login'>Log In/Out</NavLink>
//                             {/* <a className="nav-link" href="#">MyCart</a> */}
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     )
// }
