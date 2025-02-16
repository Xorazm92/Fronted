import Slider from "react-slick";
import './hero_slider.css'

function HeroSlider({children}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    vertical: false, 
  };
  
      
    return (<>
        <Slider {...settings}>
            {children}
        </Slider>
    </>)
}

export default HeroSlider