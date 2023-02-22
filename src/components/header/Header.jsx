import React from "react";
import "./header.css";
import { useState } from "react";
import {ReactComponent as Car} from "../../images/Car.svg"    // Car.svg  Property.svg
import {ReactComponent as Property} from "../../images/Property.svg";

import { Link } from "react-router-dom";
import olxPng from "../../images/olx.png";





function Header() {
    const [token, setToken] = useState(localStorage.getItem('userToken') ?? null)
    

    // const [loading, setLoading] = useState(true);




    const [isHoverCar, SetisHoverCar] = useState(false);
    const [isHoverProperty, SetisHoverProperty] = useState(false);

    function handleMouseEnterCar(e) {
        SetisHoverCar(true);
    }

    function handleMouseEnterProperty(e) {

        SetisHoverProperty(true)
    }

    function handleMouseLeave() {
        SetisHoverCar(false);
        SetisHoverProperty(false);
    }


    return (
        <>

            <div className="container-fluid bg-light  sticky-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 px-1 py-2">
                            <Link to="/"> <img className="log-olx-small ms-4 mb-3 me-4 mt-2" src={olxPng} alt="" /></Link>
                            {/* <Link to="/home"><p>link</p> </Link>  */}
                            <Car className="svg-margin" onMouseEnter={handleMouseEnterCar} onMouseLeave={handleMouseLeave} fill={isHoverCar && "#3A77FF"} />
                            <Property onMouseEnter={handleMouseEnterProperty} onMouseLeave={handleMouseLeave} fill={isHoverProperty && "#3A77FF"} />


                           
         
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <form className="d-flex" role="search">
                               <Link to="/"> <svg height="36" viewBox="0 0 36.289 20.768" alt="Olx logo" className="_063feb70 mt-2" ><path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z"></path></svg> </Link>
                                <div>  <input list="hostingPlane"

                                    className="form-control me-5 p-2 ms-4"

                                    type="text"
                                    placeholder="Pakistan"
                                    aria-label="Search"
                                /><datalist id="hostingPlane">
                                        <option value="See Adds In All Pakistan "></option>
                                        <option value="Khyber Pakhtunkhwa, Pakistan"></option>
                                        <option value="Abbottabad, Khyber Pakhtunkhwa"></option>
                                        <option value="Askari Housing Abbottabad, Abbottabad"></option>
                                        <option value="Askari Housing Abbottabad, Abbottabad"></option>
                                    </datalist> </div><i className=" fa fa-search mt-3" title="Edit"></i>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <form className="example" action="/action_page.php">
                                <input className="biginput" type="text" placeholder="Find Car Mobile Phones and More..." name="search" />
                                <button type="submit">
                                    <i className="fa fa-search" />
                                </button>
                            </form>
                        </div>
                        <div className="col-md-2 d-flex">

                           <Link to="/signin"><button className="loginbtn">Login</button></Link> 
                           
                             <Link to="/form">
                            <div className="position mb-3 "> <span className="span1">

                               <svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" width="22" height="16" viewBox="0 0 1024 1024" fill="#002f34"><path d="M414.898 123.739v291.218H123.68l-97.014 97.014 97.014 97.131h291.218v291.16l97.073 97.071 97.073-97.071v-291.16h291.16l97.131-97.131-97.131-97.014h-291.16V123.739l-97.073-97.073z" /></svg>Sell</span> <svg xmlns="http://www.w3.org/2000/svg" width="104" height="48" viewBox="0 0 1603 768" class="_3V9PS"><path class="_2bClX _12yOz" d="M434.442 16.944h718.82c202.72 0 367.057 164.337 367.057 367.058s-164.337 367.057-367.057 367.057h-718.82c-202.721 0-367.058-164.337-367.058-367.058S231.721 16.943 434.442 16.943z" fill="#fff" /><path class="_2bClX _YBz-" d="M427.241 669.489c-80.917 0-158.59-25.926-218.705-73.004l-.016-.014C139.407 542.352 99.766 464.914 99.766 383.997c0-41.07 9.776-80.712 29.081-117.797 25.058-48.139 64.933-89.278 115.333-118.966l-52.379-67.581c-64.73 38.122-115.955 90.98-148.159 152.845C18.8 280.243 6.201 331.224 6.201 383.997c0 104.027 50.962 203.61 139.799 273.175h.016c77.312 60.535 177.193 93.887 281.22 93.887h299.699l25.138-40.783-25.138-40.783H427.237z" fill="#ffce32" /><path class="_2bClX _3uYj7" d="M1318.522 38.596c-45.72-14.369-93.752-21.658-142.762-21.658H427.249c-84.346 0-165.764 21.683-235.441 62.713l3.118 51.726 49.245 15.865c54.16-31.895 117.452-48.739 183.073-48.739h748.511c38.159 0 75.52 5.657 111.029 16.829 44.91 14.111 86.594 37.205 120.526 66.792l66.163-57.68c-43.616-38.01-97.197-67.703-154.957-85.852z" fill="#23e5db" /><path class="_2bClX BfroU" d="M1473.479 124.453l-55.855 9.91-10.307 47.76c61.844 53.929 95.92 125.617 95.92 201.88a251.85 251.85 0 01-11.214 74.363c-38.348 124.311-168.398 211.129-316.262 211.129H726.949l25.121 40.783-25.121 40.783h448.812c190.107 0 357.303-111.638 406.613-271.498a323.69 323.69 0 0014.423-95.559c0-98.044-43.805-190.216-123.317-259.551z" fill="#3a77ff" /></svg>
                            </div>
                            </Link>
                           
                           

                        </div>
                    </div>
                </div>
            </div>
            

        </>

    );
}

export default Header;

































// import React from 'react';
// import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
// import HomeWorkIcon from '@mui/icons-material/HomeWork';
// import sellImage from "../../images/header-img-1.svg"
// import SearchIcon from '@mui/icons-material/Search';
// import "../topHeader/styles.css";


// const TopHeader = () => {
//     return (
//         <>
//             <div className='top-header-sec'>
//                 <div className='top-header-sec-1'>
//                     <ul className="nav nav-pills ms-5">


//                         <li className="nav-item d-flex">
//                             <span  style={{fill:"#3A77FF"}}  className='mt-2 me-2'><svg height="20" viewBox="0 0 36.289 20.768" alt="Olx logo" class="b28a1eb6"><path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z"></path></svg></span>

//                             <a style={{color: "black"}} className="nav-link car-link" aria-current="page" href="#"> <DirectionsCarIcon /> Motors</a>
//                         </li>
//                         <li className="nav-item">
//                             <a style={{color: "black"}} className="nav-link property-link" href="#"> <HomeWorkIcon />  Property </a>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className='top-header-sect-2 d-flex justify-content-around mt-3'>
//                     <div className="olx-icon">
//                        <span className='olx-svg' > <svg height="40" viewBox="0 0 36.289 20.768" alt="Olx logo" class="b28a1eb6"><path d="M18.9 20.77V0h4.93v20.77zM0 10.39a8.56 8.56 0 1 1 8.56 8.56A8.56 8.56 0 0 1 0 10.4zm5.97-.01a2.6 2.6 0 1 0 2.6-2.6 2.6 2.6 0 0 0-2.6 2.6zm27 5.2l-1.88-1.87-1.87 1.88H25.9V12.3l1.9-1.9-1.9-1.89V5.18h3.27l1.92 1.92 1.93-1.92h3.27v3.33l-1.9 1.9 1.9 1.9v3.27z"></path></svg></span>
//                     </div>
//                     <div className="select-location">
//                         <select className="form-select" aria-label="Default select example">
//                             <option selected>pakistan</option>
//                             <option value={1}>karachi</option>
//                             <option value={2}>lahore</option>
//                             <option value={3}>peshawer</option>
//                         </select>
//                     </div>
//                     <div className="serach-box d-flex">
//                         <form className="d-flex header-search-box" role="search">
//                             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                             <button className="btn btn-outline-success header-search-btn" type="submit"> <SearchIcon className='header-search-icon' /></button>
//                         </form>
//                         <button className='login-btn'>Login</button>
//                     </div>
//                     <div className="header-btns">
//                         <img src={sellImage} alt="img" />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default TopHeader;


