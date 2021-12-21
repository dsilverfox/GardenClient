import React from "react";
import { Carousel } from "react-bootstrap";



const CarouselContainer = () => {
    return (
        <Carousel className='carousel'>
  <Carousel.Item>
    <img
     alt='CarouselImg'
      className="d-block w-100"
            src= "https://document-export.canva.com/WotLA/DAEzHyWotLA/4/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20211220%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211220T023914Z&X-Amz-Expires=80973&X-Amz-Signature=901b9cadd5bceb9eac962338bc6cf602b6f9e7e1da502ed07260aaa0a5011a48&X-Amz-SignedHeaders=host&response-expires=Tue%2C%2021%20Dec%202021%2001%3A08%3A47%20GMT"
      alt="First slide"
      height='600px'
      width='300px'
    />


  </Carousel.Item>
  <Carousel.Item>
    <img
     alt='CarouselImg'
        alt='CarouselImg'
      className="d-block w-100"
            src= "https://unsplash.com/photos/087bb8x69oA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjB8fGxpbWV8fDB8fHx8MTY0MDA0MTg1NA&force=true&w=640"
            height= "600px"
            width= "300px"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
            src= "https://media-private.canva.com/ySktg/MAEzHxySktg/1/s.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20211220%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211220T155535Z&X-Amz-Expires=44544&X-Amz-Signature=b31fc4990cd3d8d5d424667be4716b0a5a099140b91059962b7e5bb60b5932aa&X-Amz-SignedHeaders=host&response-expires=Tue%2C%2021%20Dec%202021%2004%3A17%3A59%20GMT"
      alt="Third slide"
      Height="600px"
      width='300px'
    />
  </Carousel.Item>
</Carousel>
    )
}
export default CarouselContainer;