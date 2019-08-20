/**
 *
 * Education
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import MenuAppBar from 'components/Appbar';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Grid } from '@material-ui/core';
import makeSelectEducation from './selectors';
import reducer from './reducer';
import saga from './saga';
import { educationStyles } from './styles';
import EducationChild from '../../components/EducationChild';

export function Education() {
  useInjectReducer({ key: 'education', reducer });
  useInjectSaga({ key: 'education', saga });
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

Education.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  education: makeSelectEducation(),
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
)(Education);
