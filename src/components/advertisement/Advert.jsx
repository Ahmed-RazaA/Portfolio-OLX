import React from 'react';
import "../advertisement/advert.css";
import MobilePic from "../..//images/jurwa-mobiles.webp";
import appStoreBtn from "../../images/app-store-btn.svg";
import appGalleryBtn from "../../images/app-gallery.svg";
import playStoreBtn from "../../images/playstore-icon.svg";

function Advert() {
    return (
        <div className="container">
        <div className='row d-flex flex-row text-center'>
            <div className="col-12 col-md-4 img">
                <img src={MobilePic} alt="MobilePic" />
            </div>

            <div className="col-12 col-md-4 heading">
                <h2>TRY THE OLX APP</h2>
                <p>Buy, sell and find just about anything using the app on your mobile.</p>
                
            </div>
           
            <div className="col-12 col-md-4 buttons mt-4">
           
                <h2>GET YOUR APP TODAY</h2>
                <ul className='d-flex mt-3 ul-0f-btns'>
                    <li><a href=""> <img width="50px" className='m-1 button' src={playStoreBtn} alt="play-store-btn" /></a></li>
                    <li><a href=""> <img width="50px" className='m-1 button' src={appStoreBtn} alt="app-store-btn" /></a></li>
                    <li><a href=""> <img width="50px" className='m-1 button' src={appGalleryBtn} alt="app-gallery-btn" /></a></li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Advert;
