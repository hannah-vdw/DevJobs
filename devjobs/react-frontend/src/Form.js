import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import Image from "./img/Computer_Programmer.jpeg";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "80vh",
    position: "relative",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    height: "60vh",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  textfield_input: {
    color: "#FFFFFF",
  },
  textfield_label: {
    color: "#FFFFFF !important",
    fontSize: "1.25rem",
  },
  form: {
    borderBottom: "3px solid #FFFFFF",
  },
  mar: {
    width: "50%",
  },
  title: {
    marginBottom: theme.spacing(10),
  },
  button: {
    padding: theme.spacing(1.2),
    color: "#FFFFFF",
    fontSize: "1rem",
    border: "3px solid #FFFFFF",
    borderRadius: 7,
    "&:hover": { border: "3px solid #ff777f" },
  },
}));

export default function Form(props) {
  const [location, setLocation] = useState("");

  const handleSubmitLocation = (event) => {
    console.log(location);
    const formData = new FormData();
    formData.append("text", location);
    axios.post("http://localhost:9000/jobs", formData, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  };

  const handleFormContent = (event) => {
    setLocation(event.target.value);
  };

  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.overlay}>
        <Box
          height="120%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#fff"
        >
          <Typography variant="h2" component="h1" className={classes.title}>
            cd ./DevJobs/JourneyStart
          </Typography>

          <Grid container spacing={1} className={classes.mar}>
            <Grid item md={5}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Job location..."
                // variant="outlined"
                onChange={handleFormContent}
                className={classes.form}
                InputLabelProps={{ className: classes.textfield_label }}
                InputProps={{ className: classes.textfield_input }}
              />
            </Grid>
            <Grid item md={5}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Job title..."
                // variant="outlined"
                onChange={handleFormContent}
                className={classes.form}
                InputLabelProps={{ className: classes.textfield_label }}
                InputProps={{ className: classes.textfield_input }}
              />
            </Grid>
            <Grid item md={2}>
              <Button
                fullWidth
                variant="outlined"
                disableElevation
                className={classes.button}
                size="medium"
                onClick={handleSubmitLocation}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </section>
  );
}
