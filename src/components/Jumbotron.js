import React, { Component } from 'react';

//import assets
import logowhite from '../assets/images/logos/logowhite.png';

//import material components
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
    jumbotron:{
        backgroundColor:'#454545',
        height:'400px',
        borderRadius:'none'
    },
    titleSection:{
        textAlign:'center',
        paddingTop:'2rem',
        paddingRight:'25%',
        paddingLeft:'25%'
    },
    menuButton:{
        color:'white'
    }
}
class Jumbotron extends Component {
    render() { 
        const { classes } = this.props;
        return ( 
            <Paper className={classes.jumbotron}>
            <Grid container item xs={12} direction="row" justify="space-between" alignItems="flex-start">
                <img src={logowhite} alt="Sensors Africa Logo" height="100px"/>
                <i class="material-icons" style={{paddingTop:'2rem',paddingRight:'2rem',color:'white'}}>reorder</i>
            </Grid>
                <div className={classes.titleSection}>
                    <Typography variant="display2" style={{color:'white'}}>About sensors.AFRICA</Typography>
                    <Typography variant="subheading"  style={{color:'white'}}>sensors.AFRICA is a pan-African citizen science initiative
                     that uses sensors to monitor air, water and sound pollution to give citizens actionable information about their cities.
                    The initiative was seed-funded by innovateAFRICA, and is being incubated by Code For Africa</Typography>
                </div>
            </Paper>
         );
    }
}
 
Jumbotron.PropTypes = {
    classes:PropTypes.object.isRequired,
}

export default withStyles(styles)(Jumbotron);