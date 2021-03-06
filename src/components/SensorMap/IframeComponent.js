import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  fullHeight: {
    display: 'inline-block',
    margin: '0 auto',
    backgroundColor: 'white'
  }
};

function KenyaMap({
  classes,
  title,
  src,
  height,
  width,
  frameBorder,
  scrolling
}) {
  return (
    <iframe
      title={title}
      key={src}
      src={src}
      height={height}
      width={width}
      frameBorder={frameBorder}
      className={classes.fullHeight}
      scrolling={scrolling}
    />
  );
}

KenyaMap.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  frameBorder: PropTypes.string,
  scrolling: PropTypes.string
};

KenyaMap.defaultProps = {
  height: '',
  width: '',
  frameBorder: '0',
  scrolling: 'auto'
};
export default withStyles(styles)(KenyaMap);
