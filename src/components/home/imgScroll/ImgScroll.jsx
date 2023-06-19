import React from "react";
import "./ImgScroll.css";
const imgcsrol = [
  {
    imgScrl: "https://i.pinimg.com/originals/eb/04/80/eb0480692061f0b86516d06b0a3da3a4.jpg",
  },
  {
    imgScrl: "https://jokermartini.com/wp-content/uploads/2016/03/softserveicecream_.jpg",
  },
  {
    imgScrl: "https://www.jalewa.com/wp-content/uploads/2020/09/Surprising-Health-Benefits-Of-Eating-Spicy-Food-1.jpg",
  },
  { imgScrl: "https://klike.net/uploads/posts/2022-10/1665813217_3-47.jpg" },
  {
    imgScrl: "https://kartinkin.net/uploads/posts/2021-07/thumbs/1625346318_27-kartinkin-com-p-sendvichi-yeda-krasivo-foto-43.jpg",
  },
  {
    imgScrl: "https://imgix.bustle.com/uploads/image/2018/4/26/eee498e7-dcdf-4aea-8008-f76a8d00fcde-fotolia_128674495_subscription_monthly_m.jpg?w=800&fit=crop&crop=faces&auto=format%2Ccompress&q=50&dpr=2",
  },
  { imgScrl: "https://gvult.com/wp-content/uploads/2018/05/Queen_05-2017_18.jpg" },
  {
    imgScrl: "https://mobimg.b-cdn.net/v3/fetch/cb/cb3e38e60c5fa79993ac8c750f16e18c.jpeg",
  },
  {
    imgScrl: "https://kartinkin.net/uploads/posts/2022-09/1662270882_6-kartinkin-net-p-raznotsvetnie-burgeri-krasivo-6.jpg",
  },
];

const ImgScroll = () => {
  return (
    <div className="cont">
      <div className="scrollImg">
        {imgcsrol.map((img) => (
          <img key={img.imgScrl} className="img" src={img.imgScrl} />
        ))}
        {imgcsrol.map((img) => (
          <img key={img.imgScrl} className="img" src={img.imgScrl} />
        ))}
      </div>
    </div>
  );
};

export default ImgScroll;
