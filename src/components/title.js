import React, { Component } from 'react';
import './component-css/title.css';


import Aos from 'aos';
import 'aos/dist/aos.css';

import Button from '../elements/openModalButton.js';


const Rule = () => (
    <hr style={{}}
    />
)


export default class Title extends Component {
    componentDidMount() {
        Aos.init();
    }
    
    render() {
        return (
            <div className="title">
                <div className="titleText" data-aos="zoom-in" data-aos-duration="7000">
                    <h1>OREOLIS</h1>
                    <h2> [oreo - lis] • singapore / philippines </h2>
                    <h5><i>header artwork by <a href='https://x.com/Vernon_Cross' style={{color: 'white'}}>@Darkomi</a></i></h5>
                    <Rule />
                    <br></br>
                    <h5 className="subText">
                        (n.) a sheep, not a goat.
                        <br></br>
                        software engineering student, photographer and videographer.
                        <br></br>
                        did i mention i love black clover, beastars and my hero academia?
                    </h5>
                    <br></br>
                    <Button/>
                </div>

            </div>

        );
    }
}
