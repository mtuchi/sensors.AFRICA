import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import HealthEffects from '../Air/HealthEffects';
import Burden from './Burden';

const styles = theme => ({
  root: {
    backgroundColor: 'white',
    display: 'block'
  },
  grid: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  mainTitle: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: theme.typography.fontSize
  },
  caption: {
    paddingTop: '1rem',
    textAlign: 'center'
  },
  graph: {
    margin: '0 auto',
    width: '9rem',
    [theme.breakpoints.up('md')]: {
      width: '12rem',
      padding: '0 1rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '15rem'
    }
  },
  titleGrid: {
    marginRight: '15%',
    marginLeft: '15%'
  },
  title: {
    textAlign: 'center',
    textTransform: 'None'
  }
});

function HealthAndBurden({ classes }) {
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} className={classes.grid}>
        <Typography
          variant="h6"
          alignItems="center"
          className={classes.mainTitle}
        >
          Health and Disease Burden
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <HealthEffects />
      </Grid>
      <Grid item xs={12}>
        <Burden />
      </Grid>
    </Grid>
  );
}
HealthAndBurden.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HealthAndBurden);
