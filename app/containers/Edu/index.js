/**
 *
 * Edu
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import MenuAppBar from 'components/Appbar';
import { Grid } from '@material-ui/core';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { educationStyles } from './styles';
import EducationChild from '../../components/EducationChild';

import makeSelectEdu from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Edu() {
  useInjectReducer({ key: 'edu', reducer });
  useInjectSaga({ key: 'edu', saga });
  const classes = educationStyles();

  return (
    <Grid container justify="center" className={classes.main}>
      <Grid item xs={10} md={11}>
        <MenuAppBar />
        <EducationChild />
      </Grid>
    </Grid>
  );
}

Edu.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  edu: makeSelectEdu(),
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
)(Edu);
