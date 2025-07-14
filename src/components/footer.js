import React, { Component } from 'react';
import './component-css/footer.css';

class Footer extends Component {
    state = {}
    render() {
        return (
            <div className="footer">
                <div className="footerText">
                    <p><b>if you notice any bugs on this site, let me know!</b></p>
                    <br></br>
                    <h1>"MY MAGIC, IS NEVER GIVING UP!"</h1>
                    <h1>v2.0.0: © OREOLIS 2025  </h1>
                </div>
            </div>
        );
    }
}

export default Footer;