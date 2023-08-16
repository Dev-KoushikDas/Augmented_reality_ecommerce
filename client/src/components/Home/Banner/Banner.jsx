import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/sl1-1_1.jpg";
import img2 from "../../../assets/1486144528home-appliances-png-12.png"

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        Convallis interdum purus adipiscing dis parturient
                        posuere ac a quam a eleifend montes parturient posuere
                        curae tempor
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
             <img className="banner-img" src={img2} /> 
            </div>
        </div>
    );
};

export default Banner;
