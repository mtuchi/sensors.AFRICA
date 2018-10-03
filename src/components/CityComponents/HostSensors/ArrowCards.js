import React, { Component } from "react";
import "../../../assets/css/App.css";

import {
  Card,
  Grid,
  Typography,
  ListItem,
  List,
  CardContent,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import shadows from "@material-ui/core/styles/shadows";

const styles = theme => ({
  findOutMore: {
    color: "#164B3E"
  },
  browseMoreWrapper: {
    width: "100%",
    textAlign: "left",
  },
  buttonBrowseMore: {
    backgroundColor: "#2FB56B",
    color: "#fff",
    borderRadius: 0,
    marginTop: theme.spacing.unit * 2,
    marginBotton: theme.spacing.unit * 2,
    marginLeft: "180px",
    textTransform: "uppercase",
  },
  body2: {
    color: "black",
    opacity: "0.8"
  }
});

class ArrowCards extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography
          variant="body2"
          style={{ marginLeft: "4.5rem", color: "green" }}
        >
          WHO CAN I REPORT AIR SENSORS QUALITY TO?
        </Typography>
        <List className="list-ic vertical">
          <ListItem className={classes.list}>
            <span />

            <Card
              className="card"
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <CardContent
                style={{ textDecoration: "underline", textAlign: "center" }}
              >
                <Typography variant="body2" className={classes.body2}>
                  Local Government
                </Typography>
                <Typography variant="body2" className={classes.body2}>
                  Environment Ministry
                </Typography>
              </CardContent>
            </Card>
          </ListItem>

          <ListItem>
            <span />
            <Card
              className="card"
              constainer
              direction="row"
              justify="center"
              alignItems="center"
            >
              <CardContent style={{ textAlign: "center" }}>
                <Typography variant="body2" className={classes.body2}>
                  <b>
                    <u>@david</u>
                  </b>{" "}
                  answered the question about
                </Typography>
                <Typography variant="body2" className={classes.body2}>
                  <u>What Reports have been sent</u>
                </Typography>
              </CardContent>
            </Card>
          </ListItem>

          <ListItem>
            <span />
            <Card
              className="card"
              constainer
              direction="row"
              justify="center"
              alignItems="center"
            >
              <CardContent style={{ textAlign: "center" }}>
                <Typography variant="body2" className={classes.body2}>
                  <b>
                    <u>@david</u>
                  </b>{" "}
                  answered the question about
                </Typography>
                <Typography variant="body2" className={classes.body2}>
                  <u>What Reports have been sent</u>
                </Typography>
              </CardContent>
            </Card>
          </ListItem>

          <ListItem>
            <span />
            <Card
              className="card"
              constainer
              direction="row"
              justify="center"
              alignItems="center"
            >
              <CardContent style={{ textAlign: "center" }}>
                <Typography variant="body2" className={classes.body2}>
                  <b>
                    <u>@david</u>
                  </b>{" "}
                  answered the question about
                </Typography>
                <Typography variant="body2" className={classes.body2}>
                  <u>What Reports have been sent</u>
                </Typography>
              </CardContent>
            </Card>
          </ListItem>
        </List>

        <div className={classes.browseMoreWrapper}>
          <Button
            variant="contained"
            size="large"
            className={classes.buttonBrowseMore}
            >
            Browse More
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ArrowCards);
