import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Fade
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import * as _ from 'lodash';
import ScrollComponent from '../components/ScrollComponent';
import SplitCard from '../components/SplitCard';
import SlideCards from '../components/SlideCards';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
    position: 'relative'
  },
  title: {
    color: 'white',
    textAlign: 'center',
    marginTop: -224,
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
    width: '100%',
    backgroundColor: 'white'
  },
  aboutMeTitle: {
    paddingTop: 128,
    color: 'black',
    textAlign: 'center',
  },
  footer: {
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 32,
  },
  learnMore: {
    fontWeight: 'bold'
  },
  thirdSection: {
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#F8F9FA'
  }
}));

export default function Home() {
  const classes = useStyles();
  const [showTitle, setShowTitle] = React.useState(true);
  const [showMoreAboutMe, setShowMoreAboutMe] = React.useState(true);

  const throttleMili = 200;

  const companiesWorkedFor = [
    { title: 'Walmart', img: `${process.env.PUBLIC_URL + '/walmart.webp'}`, body: 'Worked on multiple applications for '},
    { title: 'Sams Club', img: ''},
    { title: 'Chick-Fil-A', img: ''},
    { title: 'Microsoft', img: ''},
    { title: 'Autozone', img: ''},
    { title: 'Virgin Hotels', img: ''},
  ]

  const titleScrollHandler = _.throttle(() => {
    const showTitleBool = window.scrollY < 32;

    if(showTitle !== showTitleBool) {
      setShowTitle(showTitleBool);
    };
  }, throttleMili)

  const moreAboutMeHandler = _.throttle(() => {
    const showMoreAboutMeBool = window.scrollY < window.innerHeight - 384;

    if(showMoreAboutMe !== showMoreAboutMeBool) {
      setShowMoreAboutMe(showMoreAboutMeBool);
    };
  }, throttleMili)

  return (
    <div className={classes.root}>
      <div id='home' className={classes.firstSection}>
        <div className={classes.whiteHaze} /> 
        <ScrollComponent onScrollHandler={titleScrollHandler}>
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

        <div className={classes.footer}>
          <ScrollComponent onScrollHandler={moreAboutMeHandler}>
            <Fade in={showMoreAboutMe}>
              <div>
                <Typography className={classes.learnMore}>
                  Learn More About Me!
                </Typography>
                <ArrowDownwardIcon />
              </div>  
            </Fade>
          </ScrollComponent>
        </div>
      </div>
      <div id='about' className={classes.secondSection}>
        <div>
          <Typography className={classes.aboutMeTitle} variant='h3'>
            About Me
          </Typography>
          <SplitCard />
        </div>
      </div>
      <div id='about' className={classes.thirdSection}>
        <div>
          <Typography className={classes.aboutMeTitle} variant='h3'>
            Past Experience
          </Typography>
          <SlideCards companiesWorkedFor={companiesWorkedFor} />
        </div>
      </div>
    </div>
  );
}