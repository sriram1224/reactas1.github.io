import Carousel from 'react-bootstrap/Carousel';

function Body() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          
          src="https://depositphotos.com/photo/joy-and-freedom-11663059.html"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        
          src="import Header from './Components/Header.js';
          import './App.css';
          import Nav from './Components/Nav.js';
          import body from './Components/body.js';
          
          function App() {
            return (
              <div className="App">
               <Header />
               <Nav />
               <body />
              </div>
            );
          }
          
          export default App;
          "
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="URL_OF_YOUR_THIRD_IMAGE"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Body;
