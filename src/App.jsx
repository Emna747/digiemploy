import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Diversity1Icon from "@mui/icons-material/Diversity1";
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
  CardMedia,
  Grid,
} from "@material-ui/core";

import useStyles from "./styles";
import database from "./database";
function jobcard(props) {
  return (
    <div className="Jobcard">
      <h3 className="thejobtitle">{props.JobTitle}</h3>
      <h6 className="thedepartment">{props.Department}</h6>
      <h6 className="thelocation">{props.Location}</h6>
      <p className="thedescription">{props.Description}</p>
      <p className="thesalary">{props.Salary}</p>
    </div>
  );
}
function App() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Diversity1Icon className={classes.icon} />
          <Typography variant="h4" className={classes.navigationBar}>DigiEmploy</Typography>
        
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
             Find The latest Jobs in the Fintech Industry from The World's Best Unicorn
              Startups.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  {database.map(jobcard)}
                  <Typography gutterBottom variant="h4"></Typography>
                </CardContent>
                <CardActions>
                  {" "}
                  <Button size="small" color="primary" align="center">
                    Apply Now
                  </Button>
                  <Button size="small" color="primary" align="center">
                    Save
                  </Button>
                </CardActions>
              </Card>
            </Grid>
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
