import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";

const MainCarousel = () => {
  const items = mainCarouselData.map((item) => (
    <img
      className="cursor-pointer "
      src={item.image}
      role="presentation"
      alt="Image"
    />
  ));
  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      touchTracking={false}
      animationType="fadeout"
      autoPlay
      autoPlayStrategy="none"
      autoPlayInterval={3000}
      animationDuration={1000}
      infinite
    />
  );
};

export default MainCarousel;
