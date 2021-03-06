import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import AboutHeaderContent from '../../Header/JumbotronContent/AboutHeaderContent';

const styles = theme => ({
  jumbotron: {
    flexGrow: 1,
    backgroundColor: '#2FB56B',
    borderRadius: 'none',
    [theme.breakpoints.up('md')]: {
      height: 450
    }
  },
  link: {
    paddingRight: '0.2rem',
    paddingLeft: '0.2rem',
    color: 'white',
    '&:hover': {
      color: '#164B3E'
    }
  }
});

function AboutHeader({ classes }) {
  return (
    <Grid
      container
      className={classes.jumbotron}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <AboutHeaderContent
          title="ABOUT sensors.AFRICA air"
          subheading={[
            'sensors.AFRICA is a pan-African citizen science initiative that uses sensors to monitor air, water and sound pollution to give citizens actionable information about their cities.  ',
            'The air quality sensors use open source technology from the',
            <a href="https://luftdaten.info/" className={classes.link}>
              Luftdaten project
            </a>,
            '. The initiative was seed-funded by innovateAFRICA and is being incubated by Code for Africa. '
          ]}
        />
      </Grid>
    </Grid>
  );
}

AboutHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutHeader);
