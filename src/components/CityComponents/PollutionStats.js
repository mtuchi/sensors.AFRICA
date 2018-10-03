import React, { Component } from "react";
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4,
  },
  statGrid: {
    textAlign: "center",
    borderRight: "1px solid  rgba(0, 0, 0, 0.2)",
  },
  stat: {
    height: "250px",
    textAlign: "center",
    paddingRight: "4rem",
    paddingLeft: "4rem",
  },
  statHighlight: {
    color: "#2FB56B",
    fontWeight: "500"
  }
});

class PollutionStats extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        className={classes.root}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={4} className={classes.statGrid}>
          <div className={classes.stat}>
            <div>
              <Typography variant="subheading">
                Death by air pollution in kenya yearly
              </Typography>
              <Typography variant="display2" className={classes.statHighlight}>
                5,102
              </Typography>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <Typography variant="subheading">
                Child Deaths caused by air pollution in kenya yearly
              </Typography>
              <Typography variant="display2" className={classes.statHighlight}>
                2,144
              </Typography>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={4} className={classes.statGrid}>
          <div className={classes.stat}>
              <Typography
                variant="subheading"
                style={{ paddingBottom: "1rem" }}
              >
                The top illness caused by air pollution in kenya is
              </Typography>
              <Typography variant="display1" className={classes.statHighlight}>
                ACUTE LOWER RESPIRATORY INFECTION
              </Typography>
          </div>
        </Grid>

        <Grid item xs={12} sm={4} className={classes.statGrid} style={{ borderRight: "none" }}>
          <div className={classes.stat}>
            <Typography variant="subheading">
              <b>POLLUTION LEVELS IN NAIROBI</b>
            </Typography>
            <Typography
              variant="subheading"
              style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
            >
              The air in Nairobi has an annual average of
            </Typography>
            <Typography
              variant="display1"
              className={classes.statHighlight}
              style={{ paddingBottom: "1rem" }}
            >
              17 ug/m3
            </Typography>
            <Typography variant="subheading">
              of PM2.5 particles. That is 70% more than the WHO safe level.
            </Typography>
          </div>
        </Grid>
      </Grid>
    );
  }
}

PollutionStats.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PollutionStats);
