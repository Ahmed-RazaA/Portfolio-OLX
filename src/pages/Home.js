import React,{useSta} from 'react';
import Header from '../components/header/Header';
import HeaderNav from '../components/headerNav/HeaderNav';
import Advert from '../components/advertisement/Advert';
import Card from '../components/card/Card';
import Carousel from '../components/carousel/Carousel';
// import AddDetails from '../components/addDetails/AddDetails';
import Footer from '../components/footer/Footer';
// import { useState } from 'react';
// import Form from '../components/form/Form';
// import App from '../App';
// import { useState } from 'react';
// import {Routes, Route} from "react-router-dom";

function Home() {
    
    // const [index, setIndex] = useState("");
        // const [show, setShow] = useState(false);

        // function handleClicked() {
        //     setShow(true)
        // }
        // const getIndex =(ind)=> {
        //     setIndex(ind)
        //     console.log("index====>",ind)
        //     // Getind(index)
        //   }

        //   const sendIndex =()=> {
        //      sendIndexx(index)
        //   }


    return (
        <div>
         <Header />
         <HeaderNav />
        <Carousel />
        <Card  />                    
        <Advert />
        <Footer />
        </div>
    )
}

export default Home;
