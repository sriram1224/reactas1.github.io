import Carousel from 'react-bootstrap/Carousel';

function Body() {
    
  return (
    <Carousel>
      <Carousel.Item>
        <img
          
          src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.wbfn.org%2Fsites%2Fwbfn%2Ffiles%2Fphotos%2Fworldwide%2520wellness.png&tbnid=Oq2VMnHH2jkFYM&vet=12ahUKEwjIrNyd1NyEAxVA-DgGHWfYDRYQMygvegUIARDFAQ..i&imgrefurl=https%3A%2F%2Fwww.wbfn.org%2Fevent%2Fworldwide-wellness&docid=kNS4tn0-y7Kf7M&w=723&h=245&q=image%20for%20wellness%20wide&ved=2ahUKEwjIrNyd1NyEAxVA-DgGHWfYDRYQMygvegUIARDFAQ"
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
