import React, { Component } from "react";
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import ArrowCards from "./ArrowCards";
import HostCard from "../HostSensors/HostCard";
import HostSensorButtons from "../HostSensors/HostSensorButtons";

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4,
  },
  description: {
    marginTop: theme.spacing.unit * 4,
  },
  arrowDescription: {
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing.unit * 4,
    },
  },
  hostDescription: {
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing.unit * 4,
    },
  },
});

class HostSensor extends Component {
  render() {
    const { classes } = this.props;
    return (
        <Grid
          container
          className={classes.root}
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12}>
            <HostSensorButtons />
          </Grid>

          <Grid item xs={12}>
            <Grid
              container
              className={classes.description}
              justify="center"
              alignItems="center">
              <Grid item xs={12} sm={6}
                    className={classes.arrowDescription}
              >
                <ArrowCards />
              </Grid>
              <Grid item xs={12} sm={6}
                    className={classes.hostDescription}
              >
                <HostCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    );
  }
}

HostSensor.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HostSensor);
