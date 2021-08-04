import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import ListItem from "@material-ui/core/ListItem";
import Favorite from "./Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));




export default function JobPost(props) {
  const classes = useStyles();


  const formatDate = (utcDate) => {
    let dbDate = new Date(utcDate).toString();
    let dbDateToGMT = new Date(`${dbDate} GMT`).toString();
    let arr = dbDateToGMT.split(' GMT');
    let formattedDate = arr[0];
    return formattedDate;
  }

  return (
    <ListItem>
      <Card className={classes.root}>
        
        <CardHeader
          title={props.jobTitle.replace(/(<([^>]+)>)/gi, "")}
          subheader={formatDate(props.jobDate)}
        />
        
        <CardContent>

          <Typography variant="body2" color="textSecondary" component="p">
            {props.jobDescription.replace(/(<([^>]+)>)/gi, "")}
          </Typography>


        </CardContent>

        <CardActions disableSpacing>

          <Favorite />

          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> 

        </CardActions>

      </Card>

    </ListItem>
  );
}
