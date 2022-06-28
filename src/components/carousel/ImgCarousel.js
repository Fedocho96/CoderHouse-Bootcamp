import React from 'react'
import { Carousel } from 'react-bootstrap';

const ImgCarousel = () => {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className=' mb-3'>
      <Carousel activeIndex={index} onSelect={handleSelect}>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://promotions.newegg.com/combo/22-1092/1920x360.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://promotions.newegg.com/corsair/21-0120/1920x360.jpg"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://promotions.newegg.com/case_psu/20-2160/1920x360.jpg"
            alt="Third slide"
          />
        </Carousel.Item>

      </Carousel>
    </div>
  );
  }

export default ImgCarousel