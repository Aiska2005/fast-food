import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import imgOne from "../assets/imgSlide/imgOne.png";
import "./SlideImgHome.css";

const BannerHome = () => {
  const slideIndImg = [
    {
      url: `${imgOne}`,
    },
    {
      url: "https://klike.net/uploads/posts/2022-12/1671693549_3-11.jpg",
    },
    {
      url: "https://top-fon.com/uploads/posts/2023-02/1675487098_top-fon-com-p-pitstsa-fon-dlya-prezentatsii-50.jpg",
    },
    {
      url: `https://phonoteka.org/uploads/posts/2022-01/1643253758_34-phonoteka-org-p-fon-fast-fud-vektor-38.jpg`,
    },
    {
      url: "https://pbs.twimg.com/media/FPnDsKXXEAc8ToE?format=jpg&name=4096x4096",
    },
  ];

  const [slide, setSlide] = useState(0);

  const slideLeft = () => {
    const ifLeftSlide = slide === 0;
    const newInd = ifLeftSlide ? slideIndImg.length - 1 : slide - 1;
    setSlide(newInd);
  };

  const slideRight = () => {
    const ifRightSlide = slide === slideIndImg.length - 1;
    const newInd = ifRightSlide ? 0 : slide + 1;
    setSlide(newInd);
  };

  return (
    <>
      <div
        className="SlideHomeImg"
        style={{ backgroundImage: `url(${slideIndImg[slide].url})` }}
      >
        <div className="container">
          <div className="slideIcons">
            {/* solKaptal */}
            <span className="LeftIcons">
              <BsChevronLeft onClick={slideLeft} />
            </span>
            {/* onKaptal */}
            <span className="RightIcons">
              <BsChevronRight onClick={slideRight} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerHome;
