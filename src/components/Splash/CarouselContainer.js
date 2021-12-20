import React from "react";
import { Carousel } from "react-bootstrap";
// import lime1 from './../Assets/lime1.jpg';
// import mango1 from './../Assets/mango1.jpg';
// import almond1 from './../Assets/almond1.jpg';

const lime = require("../../Assets/lime1.jpg")
const almond = require('../../Assets/almond1.jpg')
const mango = require('../../Assets/mango1.jpg')


const CarouselContainer = () => {
    return (
        <Carousel className='carousel'>
  <Carousel.Item>
    <img
     alt='CarouselImg'
      className="d-block w-100"
      src= {mango}
      alt="First slide"
    />

    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     alt='CarouselImg'
        alt='CarouselImg'
      className="d-block w-100"
      src= {lime}
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {almond}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}
export default CarouselContainer;