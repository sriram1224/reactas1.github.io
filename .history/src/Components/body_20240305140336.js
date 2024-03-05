// Import the logo image file
import logo from './download.jpeg';

// Define the ControlledCarousel component
function ControlledCarousel() {
  return(
    <div>
      {/* Use the imported logo as the src for the img element */}
      <img src={logo} style={{ width: '100%', height:'20%' }} alt="img" />
    </div>
  );
}

// Export the ControlledCarousel component
export default ControlledCarousel;
