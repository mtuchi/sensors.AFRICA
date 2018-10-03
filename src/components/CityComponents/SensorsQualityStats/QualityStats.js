import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Grid, Typography, Button } from "@material-ui/core";
import DataTable from "../../CityComponents/SensorsQualityStats/DataTable";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4,
  },
  button: {
    backgroundColor: "#164B3E",
    color: "#fff",
    height: "50px",
    width: "100px",
    borderRadius: 0
  },
  container: {
    textAlign: "center",
    paddingTop: "0.4rem"
  },
  buttonConnectText: {
    margin: "2rem"
  },
  display2: {
    color: "#2fb568"
  },
  caption: {
    textAlign: "center",
    margin: "2rem"
  },
  small: {
    paddingTop: "1rem",
    color: "#2fb568",
    fontSize: "1.5rem"
  }
});

class SensorsDataReport extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid xs={12} md={4}>
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ paddingTop: "2rem" }}
          >
            <Button variant="contained" className={classes.button}>
              03 Jan
            </Button>
            <p className={classes.buttonConnectText}>to</p>
            <Button variant="contained" className={classes.button}>
              07 Jan
            </Button>
          </Grid>

          <Grid className={classes.container}>
            <Typography variant="subheading" style={{ margin: "1rem" }}>
              SUB HEADING
            </Typography>
            <Grid container direction="row" justify="center">
              <Typography variant="display2" className={classes.display2}>
                1,234
              </Typography>
              <small className={classes.small}>Unit/H</small>
            </Grid>
            <Typography variant="body2" className={classes.caption}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              dapibus dui nec ligula semper eleifend. Quisque rhoncus tortor
              consectetur, vulputate ante sed, imperdiet orci.
            </Typography>
          </Grid>
        </Grid>
        <Grid xs={12} md={8}>
          <Grid
            container
            justify="center"
            alignItems="center"
          >
            <DataTable />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

SensorsDataReport.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SensorsDataReport);
