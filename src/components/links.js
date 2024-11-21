import React, { Component } from 'react';
import './links.css';
import 'bootstrap/dist/css/bootstrap.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

import img1 from '../img2/53.webp';
import img2 from '../img2/KitsuneShrine_Pokemon___Sona-alt.webp';
import img3 from '../img2/OREOLIS_comm_mergedpsd.webp'


import { LazyLoadImage } from 'react-lazy-load-image-component';




class Links extends Component {
    componentDidMount(){
        Aos.init();
    }

    redirectTwitter = () => {
        window.location.href = 'https://twitter.com/Oreolis_'
    }
    
    redirectBlueSky = () => {
        window.location.href = 'https://bsky.app/profile/oreolis.bsky.social'
    }


    redirectYoutube = () => {
        window.location.href = 'https://www.youtube.com/channel/UCHIBRyhDPtMZVJKCdKU9jvw'
    }

    render() { 
        return (
            <div className = "links">
                <div className="linkComp" data-aos="fade-up" data-aos-duration="4000">
                    <div className = "card" onClick={this.redirectBlueSky}>
                        <LazyLoadImage className = "verticalImage" src = {img2}>
                        </LazyLoadImage>
                        <div className = "overlay">
                        <h1 className="text-h1">BlueSky</h1>
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