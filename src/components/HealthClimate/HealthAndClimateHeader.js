import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import HealthClimateContent from '../Header/JumbotronContent/HealthClimateContent';

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

function HealthClimateHeader({ classes }) {
  return (
    <Grid
      container
      className={classes.jumbotron}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <HealthClimateContent title="HEALTH AND CLIMATE IMPACTS" />
      </Grid>
    </Grid>
  );
}

HealthClimateHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HealthClimateHeader);
