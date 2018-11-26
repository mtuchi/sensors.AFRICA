import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/index';
import backgroundImage from '../assets/images/background/bgsupport.jpg';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    backgroundImage: `url(${backgroundImage})`
  },
  bodyCopy: {
    margin: '8rem',
    textAlign: 'center'
  },
  button: {
    color: 'white',
    margin: '1rem'
  },
  typography: {
    color: 'white'
  }
});

class NotFoundErrorPage extends Component {
  handleBack = () => {
    this.props.history.goBack();
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid container item xs={12} className={classes.root}>
        <Navbar />
        <Grid
          item
          xs={12}
          container
          direction="column"
          justify="center"
          alignItem="center"
          className={classes.bodyCopy}
        >
          <Typography variant="h1" className={classes.typography}>
            404
          </Typography>
          <Typography variant="h5" className={classes.typography}>
            OPPS! wE CANT SEEM TO FIND THE PAGE YOU ARE LOOKING FOR.
          </Typography>

          {/*<Typography variant="h5">
            <Button
              variant="outlined"
              onClick={this.handleBack}
              className={classes.button}
            >
              {' '}
              GO BACK
            </Button>
    </Typography>*/}
        </Grid>
        <Footer />
      </Grid>
    );
  }
}

NotFoundErrorPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(NotFoundErrorPage));
