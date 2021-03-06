import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import JoinNetworkContent from '../Header/JumbotronContent/JoinHeaderContent';

const styles = theme => ({
  jumbotron: {
    flexGrow: 1,
    backgroundColor: '#2FB56B',
    borderRadius: 'none',
    [theme.breakpoints.up('md')]: {
      height: 450
    }
  }
});

function JoinHeader({ classes }) {
  return (
    <Grid
      container
      className={classes.jumbotron}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <JoinNetworkContent
          title="JOIN THE NETWORK"
          subheading="Are you interested in hosting a sensor, using our data or championing air quality? Contact us using the links below to get started."
        />
      </Grid>
    </Grid>
  );
}

JoinHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JoinHeader);
