import { Button, Divider } from "@mui/material";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };
  return (
    <>
      <div>
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="col-span-2">
            {[1, 1, 1, 1, 1, 1].map((item) => (
              <CartItem />
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 mx-7">
            <div className="border-2">
              <p className="uppercase font-bold opacity-60 p-3">
                Price Details
              </p>
              <Divider />
              <div className="space-y-3 font-semibold">
                <div className="flex justify-between py-1 px-5 text-black">
                  <span>Price</span>
                  <span>₹199</span>
                </div>
                <div className="flex justify-between py-1 px-5 text-black">
                  <span>Discount</span>
                  <span className="text-green-600">₹199</span>
                </div>
                <div className="flex justify-between py-1 px-5 text-black">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">₹199</span>
                </div>
                <Divider />
                <div className="flex justify-between p-3 text-black">
                  <span>Total Amount</span>
                  <span className="text-green-600">₹199</span>
                </div>
              </div>
              <div className="m-4 justify-center items-center">
                <Button
                  onClick={handleCheckout}
                  sx={{
                    bgcolor: "#9155fd",
                    px: "2rem",
                    py: "0.7rem",
                    "&:hover": {
                      bgcolor: "#9155fd",
                    },
                  }}
                  variant="contained"
                  className="w-full"
                >
                  Add To Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
