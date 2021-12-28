import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function GridItem({classes}: any) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Paper className={classes.paper}>item</Paper>
    </Grid>
  );
}


export default function AutoGrid() {
  const classes = useStyles();
  return (
    <div>
      <h3> Ex 4: Responsive Material UI Grid </h3>
      <Grid container spacing={1}>
        <GridItem classes={classes}/>
        <GridItem classes={classes}/>
        <GridItem classes={classes}/>
        <GridItem classes={classes}/>
      </Grid>
    </div>
  );
}