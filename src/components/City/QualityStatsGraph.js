import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import { VictoryChart, VictoryTheme, VictoryLine, VictoryAxis } from 'victory';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  chartContainer: {
    textAlign: 'center',
    marginBottom: '3rem',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '59.625rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '79.5rem'
    }
  }
});

function QualityStatsGraph({ classes, data, width }) {
  let chartWidth = window.innerWidth;
  let labelAngle = 45;
  if (isWidthUp('md', width)) {
    chartWidth = 59.625 * 16;
    labelAngle = 0;
    if (isWidthUp('lg', width)) {
      chartWidth = 79.5 * 16;
    }
  }
  const chartHeight = chartWidth * (6 / 16) + 20;

  return (
    <Grid
      container
      color="secondary"
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <div className={classes.chartContainer}>
          <VictoryChart
            theme={VictoryTheme.material}
            style={{ parent: { width: '100%' } }}
            height={chartHeight}
            width={chartWidth}
          >
            <VictoryAxis
              style={{
                axis: {
                  stroke: 'rgba(0,0,0,0.1)',
                  strokeWidth: 1
                },
                grid: {
                  stroke: 'rgba(0,0,0,0.1)',
                  strokeDasharray: ''
                },
                ticks: {
                  // padding: 20
                },
                tickLabels: {
                  fontFamily: '"Montserrat", "sans-serif"',
                  fontWeight: 'bold',
                  angle: labelAngle
                }
              }}
            />
            <VictoryAxis
              dependentAxis
              style={{
                axis: {
                  stroke: 'rgba(0,0,0,0.1)',
                  strokeWidth: 1
                },
                grid: {
                  stroke: 'rgba(0,0,0,0.1)',
                  strokeDasharray: ''
                },
                tickLabels: {
                  fontFamily: '"Montserrat", "sans-serif"',
                  fontWeight: 'bold'
                }
              }}
              fixLabelOverlap
            />
            <VictoryLine
              data={data}
              x="date"
              y="averagePM"
              style={{
                data: { stroke: '#1a995b' }
              }}
            />
          </VictoryChart>
        </div>
      </Grid>
    </Grid>
  );
}

QualityStatsGraph.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles)(QualityStatsGraph));
