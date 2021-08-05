import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { blue } from '@material-ui/core/colors';
import Image from "./img/Computer_Programmer.jpeg";
import Box from '@material-ui/core/Box';
import { color } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '80vh',
    position: 'relative',
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    height: "50vh"
  },
  // form: {
  //   backgroundImage: `url(${Image})`,
  //   backgroundSize: "cover",
  //   height: "50vh",
  // },
  form: {
    border: '2px solid #ced4da',
    borderRadius: 4

  },
  mar: {
    width: '50%'
  },

  title: {
    paddingBottom: theme.spacing(4),
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  button: {
    padding: theme.spacing(1.2)
  }
}));



export default function Form(props) {
    const [location, setLocation] = useState("");

    const handleSubmitLocation = (event) => {
      console.log(location);
      const formData = new FormData();
      formData.append('text', location);
      axios.post('http://localhost:9000/jobs', formData, {
        headers: {"Access-Control-Allow-Origin": "*"}
      });
    }
    
    const handleFormContent = (event) => {
      setLocation(event.target.value);
    }


  const classes = useStyles();


  return (
    

    <section className={classes.root}>
      
    <div className={classes.overlay}>
       <Box height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#fff">

      <Typography variant="h3" component="h1" className={classes.title}>
            Start your journey with DevJobs
          </Typography>
      
    <Grid container  spacing={1} className={classes.mar}>
        <Grid item md={5} >
          <TextField
            fullWidth
            id="outlined-size-small"
            label="Job location..."
            size="small"
            variant="outlined"
            onChange={handleFormContent}
            className={classes.form}
          />
        </Grid>
          <Grid item md={5} >
          <TextField
            fullWidth
            id="outlined-size-small"
            label="Job title..."
            size="small"
            variant="outlined"
            onChange={handleFormContent}
            className={classes.form}
            
          />
        </Grid>
        <Grid item md={2}>
          <Button
          fullWidth
            variant="contained"
            color="secondary"
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
