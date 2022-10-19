import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from "../../../Assets/brands/Brand1.png"
import Brand2 from "../../../Assets/brands/Brand2.png"

const BrandCarrousel = () => {
    return (
        <div>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brand1}
          alt="First slide"
        />
        <Carousel.Caption>
      
        
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Brand2}
          alt="First slide"
        />
        <Carousel.Caption>
        
          
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
        </div>
    );
};

export default BrandCarrousel;