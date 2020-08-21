import React from "react"
// MaterialUI
import Checkbox from '@material-ui/core/Checkbox'; 
import Button from '@material-ui/core/Button';  
import { Avatar, Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function ChannelItem(props) {
    const classes = useStyles();
    
    return( 
        <Grid item xs={12}>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Avatar alt={props.channel.title} src={props.channel.thumbnail} />
          <Typography className={classes.heading}>   {props.channel.title}   View Count: {props.channel.viewCount}  Subscriber Count: {props.channel.subscriberCount}  Video Count: {props.channel.videoCount}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.channel.description}
          </Typography>
          <p>{props.channel.country}</p>
          <br/>
          <a href={props.channel.url}>{props.channel.url}</a>
   
          {/* <Checkbox  
        onChange={() => props.handleChangeProps(props.channel.id)} 
        checked={props.channel.completed} 
        value="primary" 
        inputProps={{ 'aria-label': 'primary checkbox' }}  />  */}
   
        {/* <Button onClick={() => props.handleDeleteProps(props.channel.id)} variant="contained" color="primary">  
        Delete
        </Button>  */}
        </AccordionDetails>
        </Accordion> 
        </Grid>
    )
}

export default ChannelItem