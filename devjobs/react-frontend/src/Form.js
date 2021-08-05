import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  mar: {
    marginBottom: 10,
  },
  button: {
    alignSelf: "flex-end"
  }
}));

export default function Form(props) {
    const [location, setLocation] = useState("");

    const handleSubmitLocation = (event) => {
      console.log(location);
      const formData = new FormData();
      formData.append("text", `${location}`);
      axios.post('http://localhost:9000/jobs', formData, {
        headers: {"Access-Control-Allow-Origin": "*"}
      });
    }
    
    const handleFormContent = (event) => {
      setLocation(event.target.value);
    }


  const classes = useStyles();


  return (
    <Grid xs={12} className={classes.root} spacing={2}>
        <Paper className={classes.paper}>
          <TextField
            id="outlined-static post-form"
            label="Job location..."
            rows={1}
            variant="outlined"
            onChange={handleFormContent}
            className={classes.mar}
          />
          <Button
            variant="contained"
            color="secondary"
            disableElevation
            className={classes.button}
            size="medium"
            onClick={handleSubmitLocation}
          >
            Search
          </Button>
        </Paper>
      </Grid>
  );
}
