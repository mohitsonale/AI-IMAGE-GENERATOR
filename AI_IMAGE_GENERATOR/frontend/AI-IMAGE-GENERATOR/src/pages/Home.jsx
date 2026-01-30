import Description from "../component/Description";
import Generatebutton from "../component/Generatebutton";
import Header from "../component/Header";
import Steps from "../component/Steps";
import Testimonial from "../component/Testimonial";

function Home(){

    return(
        <div>
            
            <Header />
            <Steps />
            <Description />
            <Testimonial />
            <Generatebutton />
        </div>
    )
}

export default Home;