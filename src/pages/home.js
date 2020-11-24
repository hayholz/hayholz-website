import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ScrollComponent from '../components/ScrollComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // marginTop: 12,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  whiteHaze: {
    width: '100%',
    height: 320,
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .8), rgba(0,0,0,0))`,
    zIndex: 100,
  },
  firstSection: {
    backgroundImage: `url('https://storage.googleapis.com/hayholzimages/DSC04106-2.jpg')`,
    backgroundSize: 'cover',
    height: `calc(100vh)`,
    backgroundPosition: 'center',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    marginTop: -256,
    fontFamily: `'Lato', sans-serif;`,
    textShadow: `2px 2px rgba(0,0,0,0.12)`,
    zIndex: 100,
  },
  subTitle: {
    color: 'white',
    textShadow: `2px 2px rgba(0,0,0,0.12)`,
    textAlign: 'center',
    fontFamily: `'Lato', sans-serif;`,
    fontSize: 24
  },
  tab: {
    display: 'flex'
  },
  secondSection: {
    height: '100vh',
    width: '100%'
  }
}));

export default function Home() {
  const classes = useStyles();
  const titleRef = useRef();
  const [showTitle, setShowTitle] = React.useState(true);

  const titleScrollHandler = () => {
    const offset = 11;
    console.log('scrolling', titleRef.current);
    const top = titleRef.current.getBoundingClientRect().top;
    const newVal = top + offset >= 0 && top - offset <= window.innerHeight;

    if(showTitle !== newVal) {
      setShowTitle(newVal);
    };
    console.log('isVisible', top + offset >= 0 && top - offset <= window.innerHeight);
  }

  return (
    <div className={classes.root}>
      <div className={classes.firstSection}>
        <div className={classes.whiteHaze} /> 
        <ScrollComponent onScrollHandler={titleScrollHandler} divRef={titleRef}>
          <Slide direction="down" in={showTitle} mountOnEnter unmountOnExit>
            <div>
            <Typography className={classes.title} variant='h3'>
              Hayden Holzhauser
            </Typography>
            <Typography className={classes.subTitle}>
              Software Engineer
            </Typography>
            </div>
          </Slide>
        </ScrollComponent>
        
        {/* <Typography className={classes.title} variant='h3'>
          Hayden Holzhauser
        </Typography>
        <Typography className={classes.subTitle}>
          Software Engineer
        </Typography> */}
      </div>
      <div className={classes.secondSection}>

      </div>
      {/* <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Hayden Holzhauser
          </Typography>
        </Toolbar>
      </AppBar> */}
    </div>
  );
}