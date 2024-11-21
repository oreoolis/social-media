import React, { Component } from 'react';
import'./otherSocials.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

import img4 from '../img2/bust.webp'
import img5 from '../img2/IMG_2033.webp'
import img6 from '../img2/IMG_3772.webp'

import { LazyLoadImage } from 'react-lazy-load-image-component';


class OtherSocials extends Component {
    componentDidMount(){
        Aos.init();
    }

    redirectInstagram = () => {
        window.location.href = 'https://www.instagram.com/oreoolis/'
    }

    redirectTwitch = () => {
        window.location.href = 'https://twitch.tv/oreolis'
    }

    // deprecated social media link
    // redirectTelegramArt = () => {
    //     window.location.href = 'https://t.me/+iJGBHsKu_D0zMzhl'
    // }

    redirectTelegramPhoto = () => {
        window.location.href = 'https://t.me/oreopubhouse'
    }

    render() { 
        return (
            <div className = "links">
                <div className="linkComp" >
                    <div className = "card" onClick={this.redirectInstagram}>
                        <LazyLoadImage className = "verticalImage" src = {img5}>
                        </LazyLoadImage>
                        <div className = "overlay">
                        <h1 className="text-h1">Instagram</h1>
                        <p className='text-p'>©  CrowParadeArt</p>
                        </div>
                    </div>

                    <div className = "card" onClick={this.redirectTelegramPhoto}>
                        <LazyLoadImage className = "verticalImage" src = {img6}>
                        </LazyLoadImage>
                        <div className = "overlay">
                        <h1 className="text-h1">Photo Gallery</h1>
                        <p className='text-p'>© masterblader191</p>
                        </div>
                    </div>

                    <div className = "card" onClick={this.redirectTwitch}>
                        <LazyLoadImage className = "verticalImage" src = {img4}>
                        </LazyLoadImage>
                        <div className = "overlay">
                        <h1 className="text-h1">Twitch</h1>
                        <p className='text-p'>© packmackle</p>
                        </div>
                    </div>
                </div>
                <div className = "mainSocials">
                    <h1>OTHER SOCIALS.</h1>
                </div>

            </div>
        );
    }
}
 
export default OtherSocials;