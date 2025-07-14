import React, { Component } from 'react';
import './component-css/refSheet.css';

import refImg from '../images/refsheet_V2.png';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';


export default class RefSheet extends Component {
    componentDidMount() {
        Aos.init();
    }

    redirectImage = () => {
        window.location.href = 'https://drive.google.com/file/d/1Nz4n_Ar8fak6eE6x_8OzFcUYkO6_WYpO/view?usp=sharing';
    }

    render() {
        return (
            <div className="refSheet">
                <div className="textArea" data-aos="zoom-in" data-aos-duration="7000">
                    <div className="label">
                        <h1>MY <br></br>FURSONA <br></br> REFERENCE <br></br>SHEET!</h1>
                    </div>
                    <div class="refCard" onClick={this.redirectImage}>
                        <LazyLoadImage className="refImg" src={refImg}></LazyLoadImage>
                        <div class="refCard__content">
                            <p class="refCard__title">
                                Full Reference Sheet Image
                            </p>
                            <p class="refCard__description">
                                Find the full image here!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}