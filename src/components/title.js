import React, { Component } from 'react';
import './title.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import MovingComponent from 'react-moving-text';



export default class Title extends Component {
    componentDidMount(){
        Aos.init();
    }

    render() { 
        return (
            <div className = "title">
                <div className = "titleText">
                    <h1>OREOLIS.</h1>
                    <h6></h6>
                    <hr style = {{borderWidth: '4px'}}></hr>
                    <h2 className = "subtitle"><MovingComponent type="typewriter"
                        dataText={[
                        'FPS/Variety Streamer.',
                        'Artist.',
                        'Amateur Coder.',
                        'Beginner Cosplayer.',
                        'Not A Goat.'

                    ]} /></h2>
                </div>

            </div>

        );
    }
}
