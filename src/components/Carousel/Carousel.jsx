import './Carousel.css'

//Resources
import Carousel from 'react-bootstrap/Carousel'
import LEGO from '../../img/LEGO-miniFigures.jpg'
import LEGO2 from '../../img/LEGO-R2D2.jpg'
import LEGO3 from '../../img/LEGO-marvel-avengers.jpg'


function Carrusel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 img-carrusel"
                src={LEGO}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="w-100 img-carrusel"
                src={LEGO2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 img-carrusel"
                src={LEGO3}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrusel