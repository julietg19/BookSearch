import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",

    textAlign: "center",
  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h2" gutterBottom>
        (React) Google Book Search
      </Typography>

      <Typography variant="h6" gutterBottom>
        Look for and Save Books of Interest
      </Typography>
    </div>
  );
}
