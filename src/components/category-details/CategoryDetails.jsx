import React, { useEffect, useState } from 'react';
import "../addDetails/add-details.css";
import myImg from "../../images/my-img.jpg";
import locationPic from "../../images/location.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from '../Loading';
const CategoryDetails = () => {
  const { id } = useParams();
  const [Productt, setProductt] = useState([]);

  useEffect( () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setProductt(res.data)

    }).catch((err)=> console.log(err))
  }, [id])
  console.log("data===>", Productt)
  return (

    <div className='add-details-section'>

      <div className="row container justify-content-center product_row d-flex flex-row p-5">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 image_discription">


          <div className="add-detail-img text-center mt-2"> 
            {/* { loading && <Loading /> } */}
            <img src={Productt.image} alt='img' />
          </div>





          <div className="descriptiopn">
            <h2 className='mt-2'> Descriptiopn </h2>
            <h4> {Productt.title}</h4>
            <p>{Productt.description} <br />
              MRP 3,500</p>
          </div>
        </div>

        <div className= "col-12 col-sm-12 col-md-12 col-lg-6 justify-content-center product_details mt-2">
          <div className="box">
            <div className="price">
      
              <h3><span className='fs-5'>Rs:</span>{ " " + Productt.price}</h3>
            </div>

            <span> Mi TV Stick </span>
            <div className="location">
              <p>Lahore, Pakistan</p>
              <p></p>
            </div>
          </div>
          <div className="box" id="box2">
            <p className="Seller_description"> Seller Description </p>
            <div className="seller_detail">
              <img src={myImg} alt='img' />
              <div>
                <h2> Ahmed Raza</h2>
                <p>Member since july 2000</p>
              </div>
            </div>

          </div>
          <div className="box" id="box3">
            <h2> Posted in </h2>
            <p>Lahore, Pakistan</p>
            <img src={locationPic} alt='img' />
          </div>
        </div>
      </div>




    </div>

  )
}

export default CategoryDetails;
