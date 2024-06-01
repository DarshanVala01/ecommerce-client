import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";

const HomePage = () => {
  return (
    <>
      <div>
        <MainCarousel />

        <div className="space-y-10 py-20 px-10 lg:px-10">
          <HomeSectionCarousel />
          <HomeSectionCarousel />
          <HomeSectionCarousel />
          <HomeSectionCarousel />
          <HomeSectionCarousel />
          <HomeSectionCarousel />
          <HomeSectionCarousel />
        </div>
        <div>Other Section</div>
      </div>
    </>
  );
};

export default HomePage;
