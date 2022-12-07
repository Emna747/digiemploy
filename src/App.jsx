import React from "react";
//import Jobcard from "./Jobcard";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import PeopleIcon from "@mui/icons-material/People";
//import CopyrightIcon from "@mui/icons-material/Copyright";
import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Button,
  Container,
  Card,
  CardActions,
  CardContent,
  Grid,
} from "@material-ui/core";

import useStyles from "./styles";
import database from "./database";

// {database.map(createCard)}
function App() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Diversity1Icon className={classes.icon} />
          <Typography variant="h4" className={classes.navigationBar}>
            DigiEmploy
          </Typography>

          <Button variant="outlined" size="medium" className={classes.button}>
            {" "}
            Post a Job
          </Button>
          <Button variant="outlined" size="medium" className={classes.button}>
            {" "}
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              DigiEmploy
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Find The latest Jobs In the Fintech Industry from The World's Best
              Unicorn Startups.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={2}>
            {database.map((card) => {
              return (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    {" "}
                    <CardContent className={classes.cardContent}>
                      <h2 className={classes.jobtitle}>{card.JobTitle}</h2>
                      <h3 className={classes.jobdetails}>
                        {" "}
                        <BusinessCenterRoundedIcon className={classes.icons} />
                        {card.company}
                      </h3>
                      <h3 className={classes.jobdetails}>
                        {" "}
                        <LocationOnIcon className={classes.icons} />
                        {card.Location}
                      </h3>
                      <h4 className={classes.jobdetails}>
                        <PaidRoundedIcon className={classes.icons} />{" "}
                        {card.Salary}
                      </h4>
                      <h4 className={classes.jobdetails}>
                        <PeopleIcon className={classes.icons} /> Department of{" "}
                        {card.Department}
                      </h4>

                      <h6> About The Role: {card.Description}</h6>
                      <Typography gutterBottom variant="h4"></Typography>
                    </CardContent>
                    <CardActions>
                      {" "}
                      <Button
                        className={classes.buttonGrid}
                        size="medium"
                        color="primary"
                      >
                        Apply Now
                      </Button>
                      <Button
                        className={classes.buttonGrid}
                        size="medium"
                        color="primary"
                      >
                        Save
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </main>

      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          {" "}
          Follow Us On Social Media For More Updates <br />{" "}
          <FacebookIcon color="action" /> <InstagramIcon color="action" />{" "}
          <LinkedInIcon color="action" />
        </Typography>
        <Typography variant="subtitle2" align="center" color="textSecondary">
          {" "}
          Made with Love by Emna in 2022
        </Typography>
      </footer>
    </div>
  );
}

export default App;
