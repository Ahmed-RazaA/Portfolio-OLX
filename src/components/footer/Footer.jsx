import React from 'react';
import "../footer/footer.css";
import instaIcon from '../../images/instagram-icon.svg';
import facebookIcon from "../../images/facebook-icon.svg";
import playStoreIcon from "../../images/play-icon.svg";
import twitterIcon from "../../images/twitter-icon.svg";
import appStoreBtn from "../../images/app-store-btn.svg";
import appGalleryBtn from "../../images/app-gallery.svg";
import playStoreBtn from "../../images/playstore-icon.svg";

function Footer() {
    return (
        <>
            <div className="footer-top">
                <div className="row">
                    <div className="col-12 col-sm-4 col-lg-2">

                        <ul>
                            <h2> <b>Popular Categories</b> </h2>
                            <li> <a href="#">Cars</a></li>
                            <li> <a href="#">Flats for rent</a></li>
                            <li> <a href="#">Mobiles</a></li>
                            <li> <a href="#">Jobs</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-4 col-lg-2">
                        <ul>
                            <h2> <b>Trending Searches</b> </h2>
                            <li> <a href="#">Bikes</a></li>
                            <li> <a href="#">Watches</a></li>
                            <li> <a href="#">Mobiles</a></li>
                            <li> <a href="#">Books</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-4 col-lg-2">
                        <ul>
                            <h2> <b>About Us</b> </h2>
                            <li> <a href="#">Olx Blog</a></li>
                            <li> <a href="#">Flats for rent</a></li>
                            <li> <a href="#">Soffas</a></li>
                            <li> <a href="#">Advertisement</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-4 col-lg-2">
                        <ul>
                            <h2> <b>OLX</b> </h2>
                            <li> <a href="#">Help</a></li>
                            <li> <a href="#">Site map</a></li>
                            <li> <a href="#">Terms of Use</a></li>
                            <li> <a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-8 col-lg-4">
                        <h2>Follow Us</h2>
                        <div className="footer-icons">
                            <ul className='d-flex text-start p-0'>
                                <li> <a href=""> <img width="30px" src={instaIcon} alt="instagram-image" /></a></li>
                                <li><a href=""> <img width="30px" src={facebookIcon} alt="facebook-image" /></a></li>
                                <li><a href=""> <img width="30px" src={playStoreIcon} alt="play-store-icon" /></a></li>
                                <li><a href=""> <img width="30px" src={twitterIcon} alt="Twitter-icon" /></a></li>
                            </ul>
                        </div >
                        <div className="footer-buttons">
                         <ul className='d-flex'>
                            <li><a href=""> <img width="50px" className='m-1' src={playStoreBtn} alt="play-store-btn" /></a></li>
                            <li><a href=""> <img width="50px" className='m-1' src={appStoreBtn} alt="app-store-btn" /></a></li>
                            <li><a href=""> <img width="50px" className='m-1' src={appGalleryBtn} alt="app-gallery-btn" /></a></li>
                         </ul>
                        </div>

                    </div>
                </div>
            </div>

            <p className='footer'><b>Free Classifieds in Pakistan</b> . © 2000-2022 OLX</p>
        </>
    )
}

export default Footer;
