import React, { Component } from 'react';
import './component-css/title.css';


import Aos from 'aos';
import 'aos/dist/aos.css';

import Button from '../elements/openModalButton.js';


const Rule = () => (
    <hr style={{border: "1.5px solid white"}}
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
                    <h5>header artwork by <a href='https://x.com/Vernon_Cross' style={{ color: 'white' }}>@Darkomi.</a></h5>
                    <Rule />
                    <div className="subText">
                        <h5>(n.) a sheep, not a goat.</h5>
                        <h5>software engineering student, photographer and videographer.</h5>
                        <h5>did i mention i love
                            <b><a href="https://youtu.be/fFd1VkGc-SI?si=Lq2FVbKnyAtKMljn"> black clover</a></b>, 
                            <b><a href="https://youtu.be/dy90tA3TT1c?si=N0Bc4c4y7cjmZqaX"> beastars </a></b> and 
                            <b><a href="https://youtu.be/JFDFFoBClLY?si=D9hmdcfBr2jYrYBP"> my hero academia?</a></b>
                        </h5>
                        <i>psst... click the animes!</i>
                    </div>
                    <br></br>
                    <Button />
                </div>

            </div>

        );
    }
}
