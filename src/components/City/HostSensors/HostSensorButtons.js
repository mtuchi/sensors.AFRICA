import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { HashLink } from 'react-router-hash-link';

import HostSensorButton from './HostSensorButton';
import ShareButton from './ShareButton';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '2rem'
  },
  button: {
    margin: '0.25rem 1rem',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      margin: 0,
      width: 'auto'
    }
  },
  buttonLink: {
    display: 'block',
    width: '100%',
    textDecoration: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'inline-block',
      width: 'auto'
    }
  }
});

function HostSensorButtons({ city, classes }) {
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item className={classes.button}>
        <a
          href="https://codeforafrica.us6.list-manage.com/subscribe/post?u=65e5825507b3cec760f272e79&id=c2ff751541"
          className={classes.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <HostSensorButton outlined>SUBSCRIBE</HostSensorButton>
        </a>
      </Grid>
      <Grid item className={classes.button}>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdYwUWsyj5VQggCmpVh4O92VWt6NQ-J6kX-jN7uAa1FOELq0w/viewform"
          className={classes.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <HostSensorButton>CONNECT</HostSensorButton>
        </a>
      </Grid>
      <Grid item className={classes.button}>
        <HashLink smooth to="#map" className={classes.buttonLink}>
          <HostSensorButton>EXPLORE</HostSensorButton>
        </HashLink>
      </Grid>
      <Grid item className={classes.button}>
        <ShareButton city={city}>SHARE</ShareButton>
      </Grid>
    </Grid>
  );
}

HostSensorButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  city: PropTypes.shape({}).isRequired
};
export default withStyles(styles)(HostSensorButtons);
