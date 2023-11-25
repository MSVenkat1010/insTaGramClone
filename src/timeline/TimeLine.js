import React from "react";
import "./TimeLine.css";
import Suggestion from "../suggestion/Suggestion";
import Stories from "./Stories/Stories";
import Posts from "./Posts/Posts";

function TimeLine() {
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
  const [stories, setStories] = React.useState([
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
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div>
          {/* Posts */}
          <div className="Stories_header">
            <Stories
              userName={"testFG"}
              proPic={
                "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
              }
            />
            {stories.map((item) => {
              {
                console.log("iteminMain", item, item.user, item.proPic);
              }
              return (
                <Stories
                  key={item.user}
                  proPic={item.proPic}
                  userName={item.user}
                  postImage={item.postImage}
                />
              );
            })}
          </div>
          <div className="timeline__posts">
            {posts.map((post) => (
              <Posts
                user={post.user}
                proPic={post.proPic}
                postImage={post.postImage}
                likes={post.likes}
                timestamp={post.timestamp}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="timeline__right">
        <Suggestion />
      </div>
    </div>
  );
}

export default TimeLine;
