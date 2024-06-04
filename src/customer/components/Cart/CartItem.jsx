import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <>
      <div className="p-5 shadow-lg border rounded-md">
        <div className="flex items-center">
          <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
            <img
              className="w-full h-full object-cover object-top"
              src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/9/_/9_15.jpg"
              alt=""
            />
          </div>

          <div className="ml-5 space-y-1">
            <p className="font-semibold">Project Title Here</p>
            <p className="opacity-70 ">Size : L , White</p>
            <p className="opacity-70 ">Seller : BrandName,Darshan Vala</p>

            <div className="flex space-x-3 items-center text-lg lg:text-text-xl text-gray-900 pt-6">
              <p className="opacity-500 line-through">₹211</p>
              <p className="font-semibold">₹199</p>
              <p className="text-green-600 font-semibold">5% Off</p>
            </div>
          </div>
        </div>
        <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton sx={{ color: "#8245f5" }}>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">2</span>
            <IconButton sx={{ color: "#8245f5" }}>
              <AddCircleOutlineIcon />
            </IconButton>
          </div>

          <div>
            <Button sx={{ color: "#8245f5" }}>Remove</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
