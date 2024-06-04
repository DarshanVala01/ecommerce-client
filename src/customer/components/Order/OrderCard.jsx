import { Grid } from "@mui/material";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const OrderCard = () => {
  return (
    <>
      <div className="p-5 shadow-lg hover:shadow-md hover:shadow-black border my-3">
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
          <Grid item xs={6}>
            <div className="flex cursor-pointer ">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"
                alt="Product"
              />
              <div className="ml-5 space-y-2">
                <p>Men Slim Mid Rise Black Jeans</p>
                <p className="opacity-50 text-xs font-semibold">Size : M</p>
                <p className="opacity-50 text-xs font-semibold">
                  Color : Black
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={2}>
            <p className="opacity-50 font-semibold">₹1099</p>
          </Grid>
          <Grid item xs={4}>
            {true && (
              <div>
                <p>
                  <RadioButtonCheckedIcon
                    className="text-green-600 mr-2 text-sm"
                    sx={{ width: "15px", height: "15px" }}
                  />
                  <span>Delivered On March 03</span>
                </p>
                <p className="text-xs">Your Item Has Been Delivered</p>
              </div>
            )}
            {false && (
              <p>
                <span>Expected Delivered On March 03</span>
              </p>
            )}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default OrderCard;
