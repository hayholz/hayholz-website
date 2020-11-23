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
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black'
  },
  appBar: {
    // backgroundImage: `linear-gradient(rgba(0, 0, 0, .5), rgba(0,0,0,0))`,
    color: 'black',
    boxShadow: '0 0 black',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  tabs: {
    float: 'right',
  },
  tab: {
    margin: 8,
    color: 'white',
    // fontFamily: `'Lato', sans-serif;`
  },
  spacing: {
    flexGrow: 1,
  }
}));

function App() {
  const currentPage = useSelector(selectCurrentPage);
  const mobileOpen = useSelector(selectMobileOpen);
  const dispatch = useDispatch();
  const classes = useStyles();
  const pages = [<Home />];
  const usePage = (pageIndex) => {
    return pages[pageIndex];
  };
  const handleDrawerToggle = () => {
    dispatch(setMobileOpen())
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.tabs}>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton> */}
          <div className={classes.spacing} />
          <div className={classes.tab}>
            <Typography variant="h6" noWrap>
              Home
            </Typography>
          </div>
          <div className={classes.tab}>
            <Typography variant="h6" noWrap>
              About
            </Typography>
          </div>
          <div className={classes.tab}>
            <Typography variant="h6" noWrap>
              Contact
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      {usePage(currentPage)}
      {/* <ResponsiveDrawer body={usePage(currentPage)}/> */}
    </div>
  )
  // return usePage(currentPage);
}

export default App;
