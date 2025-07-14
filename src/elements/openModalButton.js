import './css/buttonComponent.css';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import Carousel from 'react-bootstrap/Carousel';

import f1 from '../images/fursuitImages/IMG_7174.JPG';
import f2 from '../images/fursuitImages/IMG_7177.JPG';
import f3 from '../images/fursuitImages/IMG_9582.JPG';

import { LazyLoadImage } from 'react-lazy-load-image-component';


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Oh! That's Me!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Carousel>
                    <Carousel.Item>
                        <LazyLoadImage className="slideshowImage" src={f1} />
                        <Carousel.Caption className = "captions">
                            <h3>My Fursuit!</h3>
                            <p>Made by: <a href='https://www.instagram.com/li.zizizizi55/' style={{color: 'white'}}>@li.zizizizi55</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <LazyLoadImage className="slideshowImage" src={f2} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <LazyLoadImage className="slideshowImage" src={f3} />
                        <Carousel.Caption className = "captions">
                            <h3>Featuring <a href='https://x.com/leucean_' style={{color: 'white'}}>Leucean</a> & <a href='https://x.com/polyderg' style={{color: 'white'}}>Polyxena</a></h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Modal.Body>
            <Modal.Footer>
                <button class="btn-12" onClick={props.onHide}>
                    <span>Close</span>
                </button>
            </Modal.Footer>
        </Modal>
    );
}

const Button = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <button class="btn-12" onClick={() => setModalShow(true)}>
                <span>My Fursuit!</span>
            </button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)} />
        </>

    );
}

export default Button;