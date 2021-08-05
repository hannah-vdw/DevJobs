import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { blue } from "@material-ui/core/colors";
import Image from "./img/Computer_Programmer.jpeg";
import Box from "@material-ui/core/Box";
import { borderColor, color } from "@material-ui/system";
import { styled } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "80vh",
    position: "relative",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    height: "60vh",
  },
  textfield_input: {
    color: "#FFFFFF",
  },
  form: {
    borderBottom: "3px solid #FFFFFF",
    //borderRadius: 4
  },

  textfield_label: {
    color: "#FFFFFF !important",
    fontSize: "1.25rem",
  },

  mar: {
    width: "50%",
  },

  title: {
    //paddingBottom: theme.spacing(8),
    marginBottom: theme.spacing(10),
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  button: {
    padding: theme.spacing(1.2),
    color: "#FFFFFF",
    fontSize: "1rem",
    border: "3px solid #FFFFFF",
    borderRadius: 7,
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
            Start your journey with DevJobs
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
                className={classes.button}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </section>

    // <div className={classes.root}>
    //   <Paper className={classes.paper}>
    // <Grid container  spacing={1}>
    //     <Grid item md={5} >
    //       <TextField
    //         fullWidth
    //         id="outlined-size-small"
    //         label="Job location..."
    //         size="small"
    //         variant="outlined"
    //         onChange={handleFormContent}
    //         className={classes.mar}
    //       />
    //     </Grid>
    //       <Grid item md={5} >
    //       <TextField
    //         fullWidth
    //         id="outlined-size-small"
    //         label="Job title..."
    //         size="small"
    //         variant="outlined"
    //         onChange={handleFormContent}
    //         className={classes.mar}
    //       />
    //     </Grid>
    //     <Grid item md={2}>
    //       <Button
    //       fullWidth
    //         variant="contained"
    //         color="secondary"
    //         disableElevation
    //         className={classes.button}
    //         size="medium"
    //         onClick={handleSubmitLocation}
    //       >
    //         Search
    //       </Button>
    //     </Grid>
    //   </Grid>
    //   </Paper>
    //   </div>
  );
}
