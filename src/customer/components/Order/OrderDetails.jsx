import { Box, Grid } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { deepPurple } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";

const OrderDetails = () => {
  return (
    <>
      <div className="lg:px-20 px-5">
        <div>
          <h1 className="font-bold text-xl py-7">Delivery Address</h1>
          <AddressCard />
        </div>

        <div className="pt-20">
          <OrderTracker activeStep={3} />
        </div>

        <Grid className="space-y-5" container>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
            <Grid
              item
              container
              className="shadow-xl rounded-md p-5 border"
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Grid item xs={6}>
                <div className="flex items-center space-x-5">
                  <img
                    className="h-[7rem] w-[6rem] object-cover object-top"
                    src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"
                    alt="Product"
                  />

                  <div className="space-y-2 ml-5">
                    <p className="font-semibold">
                      Men Slim Mid Rise Black Jeans
                    </p>
                    <p className="space-x-10 opacity-60 text-sm font-semibold">
                      <span>Size : M </span> <span> Color : Black</span>
                    </p>
                    <p>Seller : DarshanVala</p>
                    <p>₹1500</p>
                  </div>
                </div>
              </Grid>

              <Grid item xs={1.5}>
                <Box sx={{ color: deepPurple[500] }}>
                  <StarIcon sx={{ fontSize: "2rem" }} className="px-2" />
                  <span>Rate & Review Product</span>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default OrderDetails;
