import images from './download.jpeg'
import bodycss from './body.css'


function card(){
    return(
        <div>
        <h1>Think Health. Think Massage</h1>
        <p>we are  open 9an=m to 6pm; Monday through Sunday. if you would like to schedule </p>
        </div>
    );
}
function ControlledCarousel() {
  return (
    <img src="https://images.pexels.com/photos/719770/pexels-photo-719770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
     className="image" alt='images'></img>
    
    );

}

export default ControlledCarousel;
