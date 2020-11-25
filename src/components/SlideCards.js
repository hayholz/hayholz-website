import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import * as _ from 'lodash';
import { CardContent, Card, Typography } from '@material-ui/core';
import ScrollComponent from './ScrollComponent';


const useStyles = makeStyles((theme) => ({
  root: {

  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 16
  },
  paper: {
    margin: theme.spacing(2),
    height: 300,
    width: 300,
    display: 'inline-block'

  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
  companyImg: {
    maxWidth: 250,
    maxHeight: 150,
    display: 'block',
    margin: 'auto',

  },
  imgContainer: {
    width: '100%',
    height: 150,
    display: 'flex',
    justifyContent: 'center'
  },
}));

export default function SimpleGrow(props) {
  const { companiesWorkedFor } = props;
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [showContainer, setShowContainer] = React.useState(false);


  const throttleMilli = 200;

  const containerScrollHandler = _.throttle(() => {
    const showContainerBool = window.scrollY > window.innerHeight * 2 - 128

    if(showContainer !== showContainerBool) {
      setShowContainer(showContainerBool);
    }
  }, throttleMilli)

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <ScrollComponent onScrollHandler={containerScrollHandler}>
        <div className={classes.container}>
            {_.map(companiesWorkedFor, (obj, idx) => {
              const timeout = 1500 * idx;
              return (
                <Grow
                  in={showContainer}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(showContainer ? { timeout } : {})}
                >
                  <Card elevation={4} className={classes.paper}>
                    <CardContent>
                      <div className={classes.imgContainer}>
                        <img className={classes.companyImg} src={obj.img} /> 
                      </div>
                      <Typography>
                        {obj.body}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grow>
              )
            })}          
        </div>
      </ScrollComponent>
    </div>
  );
}
