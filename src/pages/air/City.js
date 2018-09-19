import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer";
import Neighbourhood from "../../components/CityComponents/Neighbourhood";
import CityHeader from "../../components/CityComponents/CityHeader";
import CallToAction from "../../components/CityComponents/CallToAction";

//import Api from "../../components/Api";
//import Typography from "@material-ui/core/Typography";

class City extends Component {
  render() {
    return (
      <Grid>
        <Navbar />
        <CityHeader />
        <Neighbourhood />
        <CallToAction />
        <Footer />
      </Grid>
    );
  }
}

export default City;
