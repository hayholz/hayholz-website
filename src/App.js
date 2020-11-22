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
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `100%`,
      // marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
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
    <div>
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Hayden Holzhauser
          </Typography>
        </Toolbar>
      </AppBar>
      <ResponsiveDrawer body={usePage(currentPage)}/>
    </div>
  )
  // return usePage(currentPage);
}

export default App;
