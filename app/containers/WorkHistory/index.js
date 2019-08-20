/**
 *
 * WorkHistory
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Grid } from '@material-ui/core';
import MenuAppBar from 'components/Appbar';
import makeSelectWorkHistory from './selectors';
import reducer from './reducer';
import saga from './saga';
import { workHistoryStyles } from './styles';
import WorkChild from '../../components/WorkChild';

export function WorkHistory() {
  useInjectReducer({ key: 'workHistory', reducer });
  useInjectSaga({ key: 'workHistory', saga });
  const classes = workHistoryStyles();

  return (
    <Grid container justify="center" className={classes.main}>
      <Grid item xs={10} md={11}>
        <MenuAppBar />
        <WorkChild />
      </Grid>
    </Grid>
  );
}

WorkHistory.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  workHistory: makeSelectWorkHistory(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(WorkHistory);
