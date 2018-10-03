import React, { Component } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  jumbotron: {
    backgroundColor: "#454545",
    height: "400px",
    borderRadius: "none"
  },
  titleSection: {
    textAlign: "center",
    paddingTop: "2rem",
    paddingRight: "25%",
    paddingLeft: "25%"
  },
  menuButton: {
    color: "white"
  }
};

class JumbotronContent extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.titleSection}>
        <Typography variant="display2" style={{ color: "white" }}>
          {this.props.title}
        </Typography>
        <Typography variant="subheading" style={{ color: "white" }}>
          {this.props.subheading}
        </Typography>
      </Grid>
    );
  }
}

JumbotronContent.PropTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JumbotronContent);