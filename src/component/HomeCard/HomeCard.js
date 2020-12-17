import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
    marginBottom: '20px',
  },
  media: {
    // height: 140,
    width: '100%',
    // paddingTop: '56%'//'56.25%',
  },
});
function HomeCard(props) {
  const toParent = () => {
    props.parent.learnMore(true)
    console.log(props.content)
    props.parent.getContent(props.content)
  }
  const classes = useStyles();
  return (
    <Card classes={{ root: classes.root }}>
      <CardActionArea
        onClick={toParent}
      >
        <CardMedia
          className={classes.media}
          component="img"
          height={300}
          image={props.image}
          title={props.title}
          width="50%"
        />
        <CardContent>
          <Typography
            component="h2"
            gutterBottom
            variant="h5"
          >
            {props.title}
          </Typography>
          <Typography
            color="textSecondary"
            component="p"
            variant="body2"
          >
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          color="primary"
          size="small"
        >
          Share
        </Button>
        <Button
          color="primary"
          size="small"
          onClick={toParent}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default HomeCard