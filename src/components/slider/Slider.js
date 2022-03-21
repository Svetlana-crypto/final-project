import React from 'react';
import {Carousel} from 'react-bootstrap'

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item style={{'height': '500px'}}>
          <img className="d-block w-100"
               src='https://24.kg/thumbnails/cf52f/9fac5/221975_w750_h_r.png' alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='carousel-header'>
              Optima Bank
            </h3>
            <p className='carousel-text'>«Банк №1 в Кыргызстане».</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '500px'}}>
          <img className="d-block w-100"
               src='https://www.akchabar.kg/media/news/61ff8560-d2c7-4243-99e3-be8ed70204a8.jpeg.850x445_q82_crop.jpg'
               alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className='carousel-header'>
              Optima Bank
            </h3>
            <p className='carousel-text'>«Банк №1 в Кыргызстане».</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '500px'}}>
          <img className="d-block w-100"
               src='https://24.kg/files/media/110/110250.jpg'
               alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className='carousel-header'>
             Optima Bank
            </h3>
            <p className='carousel-text'>«Банк №1 в Кыргызстане».</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;