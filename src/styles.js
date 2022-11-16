import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },

  icon: {
    marginRight: "20px",
  },

  button: {
    marginLeft: "29px",
  },
  cardGrid: { padding: "28px 0" },
  card: { height: "100%", display: "flex", flexDirection: "columns" },
  cardMedia: { paddingTop: "56.25%" },
  cardContent: { flexGrow: 1 },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0",
  },
}));
export default useStyles;
