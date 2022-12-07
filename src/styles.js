import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 10),
  },
  navigationBar: {
    marginRight: "47rem",
  },
  icon: {
    marginRight: "20px",
  },
  icons: {
    marginRight: "5px",
  },
  button: {
    marginLeft: "10px",
    color: "#fafafa",
  },
  cardGrid: { padding: "28px 0" },
  card: { height: "100%", display: "flex", flexDirection: "column" },
  cardMedia: { paddingTop: "56.25%" },
  cardContent: {
    flexGrow: "1",

    textAlign: "center",
  },
  jobtitle: { color: "#1b3764", marginBottom: "50px" },
  jobdetails: { textAlign: "left" },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "5px 0",
  },
  buttonGrid: {
    color: "#1b3764",
  },
}));
export default useStyles;
