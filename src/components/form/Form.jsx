import React, { useState } from 'react';
import olxLogo from "../../images/olx_logo.png";
import "../form/form.css";
import avatartImage from "../../images/avatar-img.png";
import { Link } from 'react-router-dom';
import { addPost } from '../../helpers/helpers';


function Form() {
    const [inputs, setInputs] = useState({ title: "", description: "", brand: "", price: "",imageUrl:"", location:"", name:"",  });

    const handleChange = (e) => {
        setInputs((prevState) => ({
           ...prevState,
           [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);

        addPost(inputs).then((res)=> console.log(res).catch((err)=> console.log(err)))
    }
    return (
        <div>
            <nav className="navbar bg-light">
                <div className="container-fluid form-nav">
                    <span className="navbar-brand mb-0 h1 ms-1">
                        <Link to="/"> <ion-icon name="arrow-back-outline"></ion-icon> </Link>
                        <img className='ps-2 pb-4 form-nav-olxlogo' width="40px" src={olxLogo} alt="olx-logo" />
                    </span>
                </div>
            </nav>

            <div className="container form-container">
                <h2 className='text-center pt-5' >Post your Data</h2>
                <form onSubmit={handleSubmit} className='rounded olx-form'>

                    <fieldset className='fieldset'>

                        <div className='px-4 py-3'>
                            <h2>Selected Category</h2>
                            <p>Mobiles / tablets</p>

                        </div>
                        <hr />
                        <div className="px-4 py-3">
                            <h2 className=''>Include Some Details</h2>
                            <label className='' htmlFor="title" >Add title</label>
                            <input className='input-title mb-3 same-styling' type="text" onChange={handleChange} value={inputs.title} name="title" id="title" />
                            <label htmlFor="description">Description</label>
                            <textarea className='text-area rounded' onChange={handleChange} value={inputs.description} name="description" id="escription" cols="30" rows="3" />


                            <label className='' htmlFor="brand" >Brand</label>
                            <input className='input-title mb-3 same-styling' type="text" onChange={handleChange} value={inputs.brand} name="brand" id="brand" />

                        </div>
                        <hr />
                        <div className="px-4 py-3">
                            <label htmlFor="price">Price: </label>
                            <input className='pricee same-styling' type="number" onChange={handleChange} value={inputs.price} name="price" id="price" />

                            <div className="uploadPhotoes my-3">
                                <h2 className='mt-2'>Upload your Pictures</h2>

                                <div className="col-12 col-md-4 upload-photo d-flex flex-column text-center p-4">
                                    <label htmlFor="imageUrl"><ion-icon name="camera-outline"></ion-icon></label>
                                    <span>Image Url: </span><input type="text" id='imageUrl'  onChange={handleChange} value={inputs.imageUrl} name="imageUrl" />
                                </div>

                            </div>

                            
                                <label className='' htmlFor="location" >Enter Your Location:</label>
                                <input className='input-title mb-3 same-styling' type="text" onChange={handleChange} value={inputs.location} name="location" id="location" />

                            <hr />

                            <div className="review-details my-4">
                                <h2>REVIEW YOUR DETAILS</h2>
                                <div className="avatar">
                                    <img width="100px" src={avatartImage} alt="avatar-image" />
                                    <label className='ms-3' htmlFor="name">Name : </label>
                                    <input className='same-styling ms-1' type="name"  onChange={handleChange} value={inputs.name} name="name" id='name' />
                                </div>
                                <p>your phone number</p>
                            </div>
                            <div className="show-my-phone-num d-flex justify-content-between">
                                <h2>show my phone number in Ads</h2>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                                </div>
                            </div>
                        </div>

                        <hr className='mb-0' />


                        <button type="submit" className="submit-btn">Post Now</button>

                    </fieldset>

                </form>
            </div>
        </div>
    )
}

export default Form;
