import { makeStyles } from "@material-ui/core";

export const homeChildStyles = makeStyles({
  container: {
    marginTop: 48
  },
  title: {
    textTransform: "uppercase",
    fontFamily: 'Roboto Condensed',
    fontWeight:  "bolder",
    letterSpacing: 3
  },
  icon: {
    color: "teal",
    marginRight: 5,
    fontSize: 40
  },
  iconImage: {
    width: 40,
    height: 40,
    marginRight: 16
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
  paper: { display: "flex", justifyContent: "center", minHeight: 120 },
  mt3: { marginTop: 16 },
  muted: { color: "#959595" },
  avatar: { width: 63, height: 63 },
  readmore: { width: "15%", position: "relative", top: -45, left: "42%" },
  bold: {
    fontWeight: "bold"
  }
});
