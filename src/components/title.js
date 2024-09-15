import React, { Component } from 'react';
import './title.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import MovingComponent from 'react-moving-text';

const Rule = (  ) => (
    <hr style = {{}}
    />
)

export default class Title extends Component {
    componentDidMount(){
        Aos.init();
    }
    

    render() { 
        return (
            <div className = "title">
                <div className = "titleText">
                    <h1>OREOLIS.</h1>
                    <h2> [oreo - lis] • singapore / philippines </h2>
                    <Rule/>
                    <h5> (n.) a sheep, not a goat. 
                        <br></br>
                        software engineering undergrad, photographer, videographer,
                        <br></br>
                        hobby graphic designer & cosplayer.
                        <br></br>
                        <i>because i don't have a fursuit yet.</i>
                    </h5>
                </div>

            </div>

        );
    }
}
