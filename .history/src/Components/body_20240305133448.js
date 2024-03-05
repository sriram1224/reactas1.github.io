import Carousel from 'react-bootstrap/Carousel';

function Body() {
    
  return (
    <Carousel>
      <Carousel.Item>
        <img
          
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vUvid7Qj12ynGBmV1LRH6vUM87uy2Kr-rg&usqp=CAU"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
           </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        
          src="https://depositphotos.com/photo/elevated-view-bottle-natural-herbal-essential-oil-dropper-lemons-wooden-214343596.html"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          
          src="https://depositphotos.com/photo/elevated-view-bottle-natural-herbal-essential-oil-dropper-lemons-wooden-214343596.html"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Body;
