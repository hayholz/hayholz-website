import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/home';
import ResponsiveDrawer from './components/ResponsiveDrawerCustom';
import { selectCurrentPage, selectMobileOpen, setMobileOpen } from './state/navigation/navigation';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Collapse from '@material-ui/core/Collapse'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ScrollComponent from './components/ScrollComponent';
import * as _ from 'lodash';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: 'black'
  },
  appBar: {
    // backgroundImage: `linear-gradient(rgba(0, 0, 0, .5), rgba(0,0,0,0))`,
    color: 'black',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    zIndex: 1,
    // boxShadow: 'none'
    overflow: 'hidden'
  },
  tabs: {
    float: 'right',
    top: 0,
    right: 0,
    position: 'absolute',
  },
  tab: {
    margin: 8,
    color: 'white',
    // fontFamily: `'Lato', sans-serif;`
  },
  spacing: {
    flexGrow: 1,
  },
  whiteHaze: {
    width: '100%',
    height: 320,
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .8), rgba(0,0,0,0))`,
    zIndex: -1,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    // marginTop: -256,
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
  animatedToolbar: {
    backgroundColor: 'black',
    zIndex: -1,
  },
  tabLink: {
    textDecoration: 'none !important',
    color: 'white'
  }
}));

function App() {
  const currentPage = useSelector(selectCurrentPage);
  const mobileOpen = useSelector(selectMobileOpen);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [animateAppBar, setAnimateAppBar] = React.useState(false);
  const throttleMili = 0;

  const appBarScrollHandler = _.throttle(() => {
    const showAppBarBool = window.scrollY > 128;
    if(animateAppBar !== showAppBarBool) {
      setAnimateAppBar(showAppBarBool);
    };
  }, throttleMili);
  const pages = [<Home />];
  const usePage = (pageIndex) => {
    return pages[pageIndex];
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.tabs}>
          <div className={classes.tab}>
            <Link href='#home' className={classes.tabLink}>
              <Typography variant="h6" noWrap>
                Home
              </Typography>
            </Link>
          </div>
          <div className={classes.tab}>
            <Link href='#about' className={classes.tabLink}>
              <Typography variant="h6" noWrap>
                About
              </Typography>
            </Link>
            
          </div>
          <div className={classes.tab}>
            <Typography variant="h6" noWrap>
              Contact
            </Typography>
          </div>
        </Toolbar>
        <ScrollComponent onScrollHandler={appBarScrollHandler}>
          <Collapse in={animateAppBar}>
            <Toolbar className={classes.animatedToolbar} />
          </Collapse>
        </ScrollComponent>
      </AppBar>
      {usePage(currentPage)}
      {/* <ResponsiveDrawer body={usePage(currentPage)}/> */}
    </div>
  )
  // return usePage(currentPage);
}

export default App;
