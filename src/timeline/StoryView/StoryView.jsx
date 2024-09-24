import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useNavigate } from "react-router-dom";
import Close from "@mui/icons-material/Close";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./StoryView.css";
import { useLocation } from "react-router-dom";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Stories from "./Stories/Stories";


function StoryView(props) {
  const navigate = useNavigate();
  const location = useLocation();


  //const stateD = props.location.state

  const storyIndex=location && location.state && location.state.index
  const [activeSlideIndex,setActiveSlideIndex] = useState(storyIndex)
  const [posts, setPosts] = React.useState([
    {
      user: "redian_",
      proPic:
        "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTlynMlE-Eeq56M-7adAVqtB-5zwwKwSFeoOpUz1qfRJFmLn4ew1zwz-Wchxf6nGeMXoHN7DrH0DWfcKF8",
      postImage:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "johndoe",
      proPic:
        "https://i.guim.co.uk/img/media/9f961a7b075f43841ca74b846fffde0460de5892/0_44_3000_1800/master/3000.jpg?width=620&dpr=2&s=none",
      postImage:
        "https://c4.wallpaperflare.com/wallpaper/632/790/513/digital-digital-art-artwork-city-lights-hd-wallpaper-preview.jpg",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "mariussss",
      proPic:
        "https://media.newyorker.com/photos/5d02cb4cd0724255542c765e/master/w_2240,c_limit/Chotiner-NorthKorea.jpg",
      postImage:
        "https://images.unsplash.com/photo-1604504399146-5a4b65419f4f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2xkJTIwc2Nob29sJTIwY2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
      likes: 140,
      timestamp: "2d",
    },
    {
      user: "kobee_18",
      proPic:
        "https://cdn.theatlantic.com/thumbor/k0wFIcwUz7kLo_MWnkD-9MnsECU=/0x0:2000x1125/1952x1098/media/img/mt/2023/08/indictment_megan/original.jpg",
      postImage:
        "https://images.unsplash.com/photo-1541348263662-e068662d82af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVoaWNsZXxlbnwwfHwwfHx8MA%3D%3D",
      likes: 14,
      timestamp: "2d",
    },
  ]);
  const handleCloseButton = () => {
    navigate("/",{state:{onProfileClick:false,userName:""}});
  };
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={false}
        centeredSlides={true}
        loop={false}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 10,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        initialSlide={activeSlideIndex}

      >
        {posts.map((item,index) => {
          return (
            <SwiperSlide key={item.user}>
              {/*  <img src={item.postImage} alt="slide_image" /> */}
              <Stories
                storyView={true}
                key={item.user}
                proPic={item.proPic}
                userName={item.user}
                postImage={item.postImage}
              />
            </SwiperSlide>
          );
        })}

        <div>
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ArrowCircleLeftIcon />
            </div>
            <div className="swiper-button-next slider-arrow">
              <ArrowCircleRightIcon />
            </div>
          </div>
        </div>
      </Swiper>

      <div className="closeButton">
        <span onClick={handleCloseButton}>
          <Close />
        </span>
      </div>
    </div>
  );
}

export default StoryView;
