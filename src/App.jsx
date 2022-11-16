import React from "react";

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
import Diversity1Icon from "@mui/icons-material/Diversity1";
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
          <Typography variant="h5">DigiEmploy</Typography>
        </Toolbar>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          className={classes.button}
        >
          {" "}
          Post a Job
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          className={classes.button}
        >
          {" "}
          Upload Resume
        </Button>
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
              The latest jobs in the Fintech industry from world's best unicorn
              startups.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={3}>
            {database.map(jobcard)}
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h4"></Typography>
                </CardContent>
                <CardActions>
                  {" "}
                  <Button size="small" color="primary">
                    Apply Now
                  </Button>
                  <Button size="small" color="primary">
                    Save
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h4" align="center" gutterBottom>
          {" "}
          Follow us on social media
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          {" "}
          Made with love by Emna in 2022{" "}
        </Typography>
      </footer>
    </div>
  );
}
export default App;
