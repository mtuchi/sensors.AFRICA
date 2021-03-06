import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import PollutionBurden from './PollutionBurden';

import risingtemperature from '../../assets/images/icons/Risingtemperature.png';
import snowmelt from '../../assets/images/icons/snowmelt.png';
import cropdamage from '../../assets/images/icons/cropdamage.png';

const styles = theme => ({
  root: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: '3rem'
  },
  titleContainer: {
    marginLeft: '15%',
    marginRight: '15%',
    paddingBottom: '3rem'
  },
  title: {
    textAlign: 'center',
    textTransform: 'none'
  },

  // For temparate, snowAndIce, and crops cards, include margins in width since
  // we want the same background color
  temperature: {
    width: '100vw',
    backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.up('md')]: {
      width: '19.875rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '26.5rem'
    }
  },
  snowAndIce: {
    width: '100vw',
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.up('md')]: {
      width: '19.875rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '26.5rem'
    }
  },
  crops: {
    width: '100vw',
    backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.up('md')]: {
      width: '19.875rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '26.5rem'
    }
  }
});

function Burden({ classes }) {
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} className={classes.titleContainer}>
        <Typography variant="h5" className={classes.title}>
          Many sources of air pollution also are heavy emitters of C02,
          contributing to a vicious cycle that threatens our health and climate.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container direction="row" justify="center" alignItems="strech">
          <div className={classes.temperature}>
            <PollutionBurden
              icon={risingtemperature}
              title="Rising Temperature"
              burden="
              Global warming increases the intensity of storms, droughts and
              heat waves, and expands the zones of transmission for many
              vector-borne diseases transmitted by mosquitoes(e.g malaria)
              or other insects and pests."
            />
          </div>

          <div className={classes.snowAndIce}>
            <PollutionBurden
              icon={snowmelt}
              title="Snow and ice melt"
              burden='
              Black carbon speeds up glacier and mountain snow and ice melt
              leading to loss of water storage in these "ice
              reservoirs" increased drought and exacerbating local
              weather extremes.'
              dark
            />
          </div>

          <div className={classes.crops}>
            <PollutionBurden
              icon={cropdamage}
              title="Crop Damage"
              burden="
              Ozone reduces crop growth and agricultural productivity,
              which in turn reduces food security and leads to
              undernutrition."
            />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
Burden.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Burden);
