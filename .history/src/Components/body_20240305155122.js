
import bodycss from './body.css'

function Card(){
    return(
        <div>
        <h1>Think Health. Think Massage</h1>
        
        <p>we are  open 9am to 6pm; Monday through Sunday. if you would like to schedule an appointment with us, phone call us at +91 1234567890 today!</p>
        <button>LEARN MORE ABOUT US</button>
        <button>CONTACT US TODAY</button>

        </div>
    );
}

function ControlledCarousel() {
  return (
    <div className='main'>
    <img src="https://images.pexels.com/photos/719770/pexels-photo-719770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     className="image" alt='images'></img>
    <Card />
    </div>
  );
}

export default ControlledCarousel;