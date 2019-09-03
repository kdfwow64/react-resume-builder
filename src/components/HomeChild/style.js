import { makeStyles } from "@material-ui/core";

export const homeChildStyles = makeStyles({
  container: {
    marginTop: 48
  },
  title: {
    textTransform: "uppercase"
  },
  icon: {
    color: "teal",
    marginRight: 5,
    fontSize: 40
  },
  w20: {
    width: "20%"
  },
  w60: {
    width: "60%"
  },
  h40: {
    height: 40
  },
  letterSpacing3: {
    letterSpacing: 3
  },
  greenNumber: {
    color: "teal",
    fontSize: 80,
    fontWeight: "bold"
  },
  blackName: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: "4"
  },
  paper: { display: "flex", justifyContent: "center", minHeight: 120 }
});
