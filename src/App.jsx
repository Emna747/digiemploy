import React from "react";
import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Button,
  Container,
  //Card,
  //CardActions,
  //CardContent,
  //CardMedia,
  //Grid,
} from "@material-ui/core";
import Diversity1Icon from "@mui/icons-material/Diversity1";

//import database from "./database";

function App() {
  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Diversity1Icon />
          <Typography variant="h5">DigiEmploy</Typography>
        </Toolbar>
        <Button variant="contained" color="primary" size="medium">
          {" "}
          Post a Job
        </Button>
      </AppBar>
      <main>
        <div>
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
              startups. You just need your willingness to grow.
            </Typography>
          </Container>
        </div>
      </main>
    </div>
  );
}
export default App;
