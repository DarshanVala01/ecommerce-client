import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-alice-carousel";

const Footer = () => {
  return (
    <>
      <div>
        <Grid
          className="bg-gray-900 text-white text-center mt-10"
          container
          sx={{ color: "white", py: 3 }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5" variant="h6" gutterBottom>
              Company
            </Typography>
            <div className="flex flex-col items-center">
              <Button className="pb-5" variant="h6">
                About
              </Button>
              <Button className="pb-5" variant="h6">
                Blog
              </Button>
              <Button className="pb-5" variant="h6">
                Press
              </Button>
              <Button className="pb-5" variant="h6">
                Jobs
              </Button>
              <Button className="pb-5" variant="h6">
                Partners
              </Button>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5" variant="h6" gutterBottom>
              Solutions
            </Typography>
            <div className="flex flex-col items-center text-xs">
              <Button className="pb-2 " variant="h6">
                Marketing
              </Button>
              <Button className="pb-2" variant="h6">
                Analytics
              </Button>
              <Button className="pb-2" variant="h6">
                Commerce
              </Button>
              <Button className="pb-2" variant="h6">
                Insights
              </Button>
              <Button className="pb-2" variant="h6">
                Supports
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5" variant="h6" gutterBottom>
              Documentation
            </Typography>
            <div className="flex flex-col items-center">
              <Button className="pb-2" variant="h6">
                Guides
              </Button>
              <Button className="pb-2" variant="h6">
                API Status
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5" variant="h6" gutterBottom>
              Legal
            </Typography>
            <div className="flex flex-col items-center">
              <Button className="pb-2" variant="h6">
                Claim
              </Button>
              <Button className="pb-2" variant="h6">
                Privacy
              </Button>
              <Button className="pb-2" variant="h6">
                Terms
              </Button>
            </div>
          </Grid>

          <Grid className="pt-20" item xs={12}>
            <Typography variant="body2" component="p" align="center">
              &copy; {new Date().getFullYear()} Darshan Vala. All rights
              reserved.
            </Typography>
            <Typography variant="body2" component="p" align="center">
              Made with love by me.
            </Typography>
            <Typography variant="body2" component="p" align="center">
              Icons made by <Link href="https://www.flaticon.com">Freepik</Link>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Footer;
