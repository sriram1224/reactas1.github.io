// Import the logo image file
import bodycss from './body.css'

// Define the ControlledCarousel component
function ControlledCarousel() {
  return(
    <div>
      {/* Use the imported logo as the src for the img element */}
      <img src='https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="image" alt="img" />
    </div>
  );
}

// Export the ControlledCarousel component
export default ControlledCarousel;
