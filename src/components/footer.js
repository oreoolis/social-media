import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <div className = "footer">
                <div className = "footerText">
                    <h1>心を燃やせ。</h1>
                    <p>SET YOUR HEART ABLAZE.</p>
                    <p><b>© OREOLIS 2024.</b></p>
                </div>
            </div>
        );
    }
}
 
export default Footer;