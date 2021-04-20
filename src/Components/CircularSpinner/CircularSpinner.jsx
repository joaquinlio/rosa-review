import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

// Inspired by the former Facebook spinners.
const useStylesFacebook = makeStyles((theme) => ({
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'dark' ? 700 : 200],
  },
  top: {
    color: theme.palette.grey[theme.palette.type === 'dark' ? 700 : 200],
    animationDuration: '550ms',
  },
  circle: {
    strokeLinecap: 'round',
  },
}));

export default function FacebookCircularProgress(props) {
  const classes = useStylesFacebook();

  return (
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={14}
        thickness={4}
        {...props}
      />
  );
}
