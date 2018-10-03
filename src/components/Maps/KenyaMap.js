import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import IframeComponent from "../Maps/IframeComponent";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4,
  },
  headline: {
    textAlign: "center",
    paddingBottom: theme.spacing.unit * 3,
  }
});

class KenyaMap extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container
            className={classes.root}
            justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="headline" className={classes.headline}>
            SENSORS IN YOUR AREA
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <IframeComponent
            title="Map section"
            src="http://map.aq.sensors.africa/#9/-1.4272/36.8147"
            height="550"
            width="100%"
            frameBorder="0"
            scrollling="no"
          />
        </Grid>
      </Grid>
    );
  }
}

KenyaMap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KenyaMap);
