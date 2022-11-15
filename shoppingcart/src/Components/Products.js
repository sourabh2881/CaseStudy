import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Products({ person }) {
  const navigate = useNavigate();

  let addToCart = (event) => {
    if (localStorage.getItem("id")) {
      axios.get(`http://localhost:8080/cart/${localStorage.getItem("id")}/add/${event.target.id}`)
        .then(response => {
          console.log("hejnf")
        })
        .catch(error => {
          console.log(error)
        })
    }
    else {
      navigate("/notLoggedMessage");
    }
  }
  return (

    <div className="m-5 " >
      <div className='row' style={{ height: "200px" }}>
        <div className='col-4'>
          <img src="https://cdn.pixabay.com/photo/2016/04/15/08/04/strawberry-1330459_960_720.jpg" alt="product-item" style={{ width: "100%", height: "200px" }} />
        </div>
        <div className='col-7 mx-5'>
          <p style={{ margin: "0px", fontSize: "29px" }}>{person.name}</p>
          <p style={{ margin: "0px", fontSize: "18px" }}>Rs. {person.price}</p>
          <p style={{ margin: "0px", fontSize: "14px" }}>{person.category}</p>
          <p style={{ margin: "0px", fontSize: "14px" }}>{person.details}</p>
          <button id={person.id} onClick={addToCart} style={{ marginTop: "32px", height: "50px" }}>Add to Cart</button>
        </div>
      </div>
    </div>

  )
}

export default Products