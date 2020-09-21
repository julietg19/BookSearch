import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      // margin: theme.spacing(1),
      width: "80%",
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      // spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      // style={{ width: "80%" }}
      // style={{ minHeight: "100vh" }}
    >
      <Grid item>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="filled-basic"
            label="Search for a Book"
            variant="filled"
            onChange={props.handleInputChange}
            //onSubmit={props.handleOnSubmit}
          />
          <button onClick={props.handleOnSubmit}>Search</button>
        </form>
      </Grid>
    </Grid>
  );
}
