import React from "react";
import { Carousel } from "react-bootstrap";
// import lime1 from './../Assets/lime1.jpg';
// import mango1 from './../Assets/mango1.jpg';
// import almond1 from './../Assets/almond1.jpg';

const welcome = require ("../../Assets/Welcome.jpg")

const CarouselContainer = () => {
    return (
        <Carousel>
  <Carousel.Item>
    <img
     alt='CarouselImg'
      className="d-block w-100"
      src= {welcome}
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
      src= {welcome}
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {welcome}
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