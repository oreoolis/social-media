import React, { Component } from 'react';
import './links.css';
import 'bootstrap/dist/css/bootstrap.css';


class Links extends Component {

    redirectTwitter = () => {
        window.location.href = 'https://twitter.com/Oreolis_'
    }

    redirectTwitch = () => {
        window.location.href = 'https://twitch.tv/oreolis'
    }

    redirectTwitter = () => {
        window.location.href = 'https://twitter.com/Oreolis_'
    }

    redirectTelegram = () => {
        window.location.href = 'https://t.me/+iJGBHsKu_D0zMzhl'
    }

    redirectTiktok = () => {
        window.location.href = 'https://www.tiktok.com/@oreoolis?lang=en'
    }

    redirectYoutube = () => {
        window.location.href = 'https://www.youtube.com/channel/UCHIBRyhDPtMZVJKCdKU9jvw'
    }
    
    render() { 
        return (
            <div className = "linkComp">
                <button class="custom-btn btn-7" onClick = {this.redirectTwitter}><span><b>TWITTER</b></span></button>
                <button class="custom-btn btn-7" onClick = {this.redirectTwitch}><span><b>TWITCH</b></span></button>
                <button class="custom-btn btn-7" onClick = {this.redirectTelegram}><span><b>TELEGRAM</b></span></button>
                <button class="custom-btn btn-7" onClick = {this.redirectTiktok}><span><b>TIKTOK</b></span></button>
                <button class="custom-btn btn-7" onClick = {this.redirectYoutube}><span><b>YOUTUBE</b></span></button>
            </div>
            
        );
    }
}
 
export default Links;