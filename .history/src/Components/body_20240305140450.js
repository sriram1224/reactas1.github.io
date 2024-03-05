// Import the logo image file
import logo from './download.jpeg';

// Define the ControlledCarousel component
function ControlledCarousel() {
  return(
    <div>
      {/* Use the imported logo as the src for the img element */}
      <img src='https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' style={{ width: '100%', height:'20%' }} alt="img" />
    </div>
  );
}

// Export the ControlledCarousel component
export default ControlledCarousel;
