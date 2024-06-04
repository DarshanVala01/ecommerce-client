import { Box, Button, Grid, TextField } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddress = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address");
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      address: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zip: data.get("zip"),
      phoneNumber: data.get("phoneNumber"),
    };
    console.log("Address", address);
  };

  return (
    <>
      <div className="lg:px-15 sm:px-10">
        <Grid container spacing={5}>
          <Grid
            item
            xs={12}
            lg={5}
            className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
          >
            <div className="p-5 py-7 border-b cursor-pointer">
              <AddressCard />
              <Button sx={{ mt: 2 }} size="large" variant="contained">
                Deliver Here
              </Button>
            </div>
          </Grid>

          <Grid item xs={12} lg={7}>
            <Box className="border rounded-s-md shadow-lg p-5 ">
              <form onSubmit={(event) => handleSubmit(event)}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    {/* First Name */}
                    <TextField
                      required
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    {/* Last Name */}
                    <TextField
                      required
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      fullWidth
                      autoComplete="given-name"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    {/* Address */}
                    <TextField
                      required
                      id="address"
                      name="address"
                      label="Address"
                      fullWidth
                      multiline
                      rows={4}
                      autoComplete="given-name"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    {/* City */}
                    <TextField
                      required
                      id="city"
                      name="city"
                      label="City"
                      fullWidth
                      autoComplete="given-city"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    {/* State */}
                    <TextField
                      required
                      id="state"
                      name="state"
                      label="State/Province/Region"
                      fullWidth
                      autoComplete="given-state"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    {/* Postal code */}
                    <TextField
                      required
                      id="zip"
                      name="zip"
                      label="Zip/Postal Code"
                      fullWidth
                      autoComplete="shipping postal-code"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    {/* Phone Number */}
                    <TextField
                      required
                      id="phoneNumber"
                      name="phoneNumber"
                      label="Phone Number"
                      fullWidth
                      autoComplete="given-number"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Button
                      sx={{ mt: 1 }}
                      size="large"
                      variant="contained"
                      type="submit"
                    >
                      Deliver Now
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default DeliveryAddress;
