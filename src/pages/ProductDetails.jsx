import React from 'react';
import AddDetails from '../components/addDetails/AddDetails';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Add from '../components/Add';
import HeaderNav from "../components/headerNav/HeaderNav"

const ProductDetails = () => {
  return (
    <div>
        <Header />
        <HeaderNav />
        <Add />
      <AddDetails />
      <Footer />
    </div>
  )
}

export default ProductDetails
