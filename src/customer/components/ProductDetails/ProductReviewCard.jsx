import { Avatar, Box, Grid, Rating } from "@mui/material";

const ProductReviewCard = () => {
  return (
    <>
      <div>
        <Grid container spacing={2} gap={3}>
          <Grid item xs={1}>
            <Box>
              <Avatar
                className="text-white"
                sx={{ width: "56", height: "56", bgcolor: "#9155fd" }}
              >
                D
              </Avatar>
            </Box>
          </Grid>

          <Grid item xs={9}>
            <div className="space-y-2">
              <div>
                <p className="font-semibold text-lg">Darshan Vala</p>
                <p className="opacity-70">April 5, 2023</p>
              </div>
            </div>

            <Rating name="read-only" value={4.5} readOnly precision={0.5} />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ProductReviewCard;
