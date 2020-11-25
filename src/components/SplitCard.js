import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      margin: '32px auto',
      maxWidth: 'calc(100vw - 64px)'
    },
    display: 'flex',
    maxWidth: 'calc(100vw / 2)',
    margin: '64px auto',
    backgroundColor: '#F8F9FA',
    color: 'black',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function SplitCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root} elevation={5}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography>
          An accomplished Software developer, I began at a startup where I’ve refined and advanced over the past four years. I’ve created web and mobile applications for small companies and have expanded to work on large web and mobile applications for Walmart, Sam's Club, Chick-fil-A, Microsoft and many more companies. Most recently at Wal-mart where I continued using the skills I’ve learned early on while learning new tech skills.  I’ve used a variety of languages and frameworks that have proven my adaptability. I'm looking to expand my technological skills and grow at a company with an exciting tech environment while also contributing to the company's tech culture and growing into a leader. 
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
