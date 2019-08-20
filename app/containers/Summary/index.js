/**
 *
 * Summary
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
import Tabs from 'components/Tabs';
import makeSelectSummary from './selectors';
import reducer from './reducer';
import saga from './saga';
import { summaryStyles } from './styles';

export function Summary() {
  useInjectReducer({ key: 'summary', reducer });
  useInjectSaga({ key: 'summary', saga });
  const classes = summaryStyles();

  return (
    <Grid container justify="center" className={classes.main}>
      <Grid item xs={10} md={11}>
        <MenuAppBar />
        <Tabs variant={5} />
      </Grid>
    </Grid>
  );
}

Summary.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  summary: makeSelectSummary(),
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
)(Summary);
