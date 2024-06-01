import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import { useState } from "react";

const HomeSectionCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 6 },
  };

  const slidePrev = () => {
    setActiveIndex(activeIndex - 1);
  };

  const slideNext = () => {
    setActiveIndex(activeIndex + 1);
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const dummyItems = [1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
    <HomeSectionCard />
  ));
  return (
    <>
      <div className="border">
        <h1 className="font-extrabold text-2xl text-gray-600 py-5">
          Section Name :
        </h1>
        <div className="relative p-5 ">
          <AliceCarousel
            items={dummyItems}
            disableButtonsControls
            disableDotsControls
            responsive={responsive}
            onSlideChanged={syncActiveIndex}
            activeIndex={activeIndex}
          />

          {activeIndex !== dummyItems.length - 5 && (
            <Button
              variant="contained"
              className="z-50 bg-white"
              onClick={slideNext}
              sx={{
                position: "absolute",
                top: "8rem",
                right: "0rem",
                transform: "translateX(50%) rotate(90deg)",
                bgcolor: "white",
              }}
              aria-label="next"
            >
              <KeyboardArrowLeftIcon
                sx={{ transform: "rotate(90deg)", color: "black" }}
              />
            </Button>
          )}

          {activeIndex !== 0 && (
            <Button
              variant="contained"
              className="z-50 bg-white"
              onClick={slidePrev}
              sx={{
                position: "absolute",
                top: "8rem",
                left: "0rem",
                transform: "translateX(-50%) rotate(90deg)",
                bgcolor: "white",
              }}
              aria-label="next"
            >
              <KeyboardArrowLeftIcon
                sx={{ transform: "rotate(-90deg)", color: "black" }}
              />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeSectionCarousel;
