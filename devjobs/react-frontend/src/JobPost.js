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
import Box from '@material-ui/core/Box';
import { spacing } from '@material-ui/system';
import Favorite from "./Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
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
  },
}));




export default function JobPost(props) {
  const classes = useStyles();


  const formatDate = (utcDate) => {
    let dbDate = new Date(utcDate).toString();
    let dbDateToGMT = new Date(`${dbDate} GMT`).toString();
    let arr = dbDateToGMT.split(/ \d\d[:]/);
    let formattedDate = arr[0];
    return formattedDate;
  }

  const formatSalary = parseInt(props.jobSalaryMin).toLocaleString('en-GB', {
    style           : 'currency',
    currency        : 'GBP',
    currencyDisplay : 'symbol',
    useGrouping     : true,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })

  return (
    <ListItem>
      <Card className={classes.root}>
        
        <CardHeader
          display-data
          title={<a rel="noreferrer" target="_blank" href={props.jobURL}> {props.jobTitle.replace(/(<([^>]+)>)/gi, "")} </a>}
          subheader={`${formatSalary} per year`}
      
        />
        
        <CardContent>
          <Box mt={-3}>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.jobDescription.replace(/(<([^>]+)>)/gi, "")}
            </Typography>
          </Box>


        </CardContent>

        <Box ml={2}>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Created: ${formatDate(props.jobDate)}`}
          </Typography>

        </Box>

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
