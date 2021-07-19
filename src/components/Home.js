import "tailwindcss/tailwind.css"
import img1 from '../img/banner.png';
import Button from '@material-ui/core/Button';
import Footer from './Footer.js';
import Card from './home_include/Card.js';

// import Background from '../images/background_image.png';
var sectionStyle = {
    // width: "100%",
    // height: "450px",
    backgroundImage: `url(${img1})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'Cover',
  };



function Home() {
    return (
    <div>
        <div style={ sectionStyle } className="w-full h-auto mt-4" >
            <p className=" text-3xl md:text-4xl lg:text-5xl font-bold text-white"style={{marginLeft:"5%", paddingTop:"5%", paddingBottom:"10%"}} >NFT market for Digital masterpieces,<br/>Buy sell unique digital Arts</p>
            <div className="pb-4">
                <Button variant="contained" color="secondary" style={{marginLeft:"5%"}}>
                    Starting Mining now
                </Button>
                <Button variant="contained" color="secondary" style={{marginLeft:"3%"}}>
                    Shop Now
                </Button>
            </div>
        </div>
        <div className="grid  grid-cols-4 md:grid-cols-3 gap-4 md:gap-2">
            <div className="col-span-2  md:col-span-1">
                <Card />
            </div>
            <div className="col-span-2  md:col-span-1">
                <Card />
            </div>
            <div className="col-span-2  md:col-span-1">
                <Card />
            </div>
            <div className="col-span-2  md:col-span-1">
                <Card />
            </div>
            <div className="col-span-2  md:col-span-1">
                <Card />
            </div>
            <div className="col-span-2  md:col-span-1">
                <Card />
            </div>
            {/* <Card /> */}
        </div>
        {/* <div>
            <Footer />
        </div> */}
         
    </div>
    );
  }
  
  export default Home;