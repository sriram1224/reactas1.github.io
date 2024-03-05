
import bodycss from './body.css'
import Carousel from './courosel';

function Card(){
    return(
        <div className="main">
        <div className='card'>
        <h1>Think Health. Think Massage</h1>
        
        <p>we are  open 9am to 6pm; Monday through Sunday. if you would like to schedule an appointment with us, phone call us at +91 1234567890 today!</p>
        <div className='button-container'>
        <button>LEARN MORE ABOUT US</button>
        <button>CONTACT US TODAY</button></div>

        </div>
        <div className='para'>
        <p className="p1">
        Are you looking for a professional,regestered massage theraphist? Sample Theraphy massage has 4 registered massage Theraphysts who can provideclinical massage.
        </p>
        <p>
        we are committed to your long term health and well-being. our multi-displinary clinic provides a balanced approach to a healthy lifestyle. Enhance your health and improve your perfomance with our treatments.
        </p>
        <p>
        we welcome you to come explorte all the benefits you'll enjoy as one of our valued guests. our professional staff is committes to offering thebest theraphy in mainland.
        </p>
        </div>
        <hr className="hline">
        </hr>
        <div className="main3">
        <h1 className="headings">
        Family Wellness Massage Theraphy
        </h1>
        <p>
        9876 Main Street,Suite 123, MainLand, ML12345<br></br>
        phone:123-456-7890
        </p>
        </div>
        </div>
    );
}


function ControlledCarousel() {
  return (
    <div className='main'>
    <div className='carousel'>
    <Carousel />
    </div>
    <Card />
    
    </div>
  );
}

export default ControlledCarousel;