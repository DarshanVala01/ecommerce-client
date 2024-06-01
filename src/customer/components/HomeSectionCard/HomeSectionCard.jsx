const HomeSectionCard = () => {
  return (
    <>
      <div className="cursor-pointer flex flex-col border items-center bg-white rounded-lg shadow-md overflow-hidden w-[15rem] mx-3 hover:shadow-2xl transition-shadow duration-300 ease-in-out rounded max-w-sm">
        <div className="h-[12rem] w-[10rem]">
          <img
            className="object-cover object-top w-full h-full "
            src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/9/_/9_15.jpg"
            alt=""
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg fonr-medium text-gray-900 ">Nofilter</h3>
          <p className="text-sm text-gray-500">Men Solid Pure Cotton Kurta</p>
        </div>
      </div>
    </>
  );
};

export default HomeSectionCard;
