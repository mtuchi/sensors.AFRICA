import React, { Component } from "react";
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer";
import KenyaMap from "../../components/Maps/KenyaMap";

import Neighbourhood from "../../components/CityComponents/Neighbourhood";
import CityHeader from "../../components/CityComponents/Header/CityHeader";
import CallToAction from "../../components/CityComponents/CallToAction";
import HostSensor from "../../components/CityComponents/HostSensors/HostSensor";
import QualityStats from "../../components/CityComponents/SensorsQualityStats/QualityStats";
import PollutionStats from "../../components/CityComponents/PollutionStats";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  content: {
    [theme.breakpoints.up("lg")]: {
      width: "1170px",
    },
    [theme.breakpoints.down("md")]: {
      width: "970px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
    margin: "0 auto",
  },
  separator: {
    color: "rgba(0, 0, 0, 0.2)",
  },
});

class City extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container
            className={classes.root}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          <CityHeader />
        </Grid>
        <Grid item xs={12}>
          <Grid container
                className={classes.content}>
            <Grid item xs={12}>
              <HostSensor />
            </Grid>
            <Grid item xs={12}>
              <hr className={classes.separator} />
            </Grid>
            <Grid item xs={12}>
              <PollutionStats />
            </Grid>
            <Grid item xs={12}>
              <Neighbourhood />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <KenyaMap />
        </Grid>
        <Grid item xs={12}>
          <Grid container
                className={classes.content}>
            <Grid item xs={12}>
              <QualityStats />
            </Grid>
            <Grid item xs={12}>
              <CallToAction />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    );
  }
}

City.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(City);
