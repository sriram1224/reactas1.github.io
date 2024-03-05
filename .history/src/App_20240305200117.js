import Header from './Components/Header.js'; // Importing the Header component
import './App.css'; // Importing the CSS file for styling
import Nav from './Components/Nav.js'; // Importing the Nav component
import Body from './Components/Body.js'; // Importing the Body component
import Footer from './Components/Footer.js'; // Importing the Footer component

function App() {
  return (
    <div className="App"> {/* Wrapper div with class name 'App' */}
      <Header /> {/* Rendering the Header component */}
      <Nav /> {/* Rendering the Nav component */}
      <Body /> {/* Rendering the Body component */}
      <Footer /> {/* Rendering the Footer component */}
    </div>
  );
}

export default App; // Exporting the App component
