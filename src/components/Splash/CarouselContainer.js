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
     alt='Mango'
      className="d-block w-100"
      src= 'https://images.unsplash.com/photo-1623930376395-0f3ad22cfac2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     alt='Almond'
      className="d-block w-100"
      src= 'https://images.unsplash.com/photo-1596812179749-82d8af17b7e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    alt="lime"
      className="d-block w-100"
      src= 'https://images.unsplash.com/photo-1564637604374-af8bcb3e9a98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
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