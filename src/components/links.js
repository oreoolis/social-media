import React, { Component } from 'react';
import './links.css';
import 'bootstrap/dist/css/bootstrap.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

import img1 from '../img/53.jpg';
import img2 from '../img/KitsuneShrine_Pokemon_&_Sona alt.png';
import img3 from '../img/OREOLIS_comm_mergedpsd.png'


import { LazyLoadImage } from 'react-lazy-load-image-component';




class Links extends Component {
    componentDidMount(){
        Aos.init();
    }

    redirectTwitter = () => {
        window.location.href = 'https://twitter.com/Oreolis_'
    }


    redirectTwitch = () => {
        window.location.href = 'https://twitch.tv/oreolis'
    }

    redirectYoutube = () => {
        window.location.href = 'https://www.youtube.com/channel/UCHIBRyhDPtMZVJKCdKU9jvw'
    }

    test = () => {
        console.log("test")
    }
    
    render() { 
        return (
            <div className = "links">
                <div className="linkComp" data-aos="fade-up" data-aos-duration="4000">
                    <div className = "card" onClick={this.redirectTwitch}>
                        <LazyLoadImage className = "verticalImage" src = {img2}>
                        </LazyLoadImage>
                        <div className = "overlay">
                        <h1 className="text-h1">Twitch</h1>
                        <p className='text-p'>©  radishkek</p>
                        </div>
                    </div>

                    <div className = "card" onClick={this.redirectTwitter}>
                        <LazyLoadImage className = "verticalImage" src = {img1}>
                        </LazyLoadImage>
                        <div className = "overlay">
                        <h1 className="text-h1">Twitter</h1>
                        <p className='text-p'>© yoonkiepls</p>
                        </div>
                    </div>

                    <div className = "card" onClick={this.redirectYoutube}>
                        <LazyLoadImage className = "verticalImage" src = {img3}>
                        </LazyLoadImage>
                        <div className = "overlay">
                        <h1 className="text-h1">YouTube</h1>
                        <p className='text-p'>© shibuyadogs</p>
                        </div>
                    </div>
                </div>
                <div className = "mainSocials">
                    <h1>MAIN SOCIALS.</h1>
                </div>

            </div>
            
        );
    }
}
 
export default Links;