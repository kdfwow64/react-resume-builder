/**
 *
 * Heading
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import MenuAppBar from 'components/Appbar';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Grid } from '@material-ui/core';
import makeSelectHeading from './selectors';
import reducer from './reducer';
import saga from './saga';
import { headingStyles } from './styles';
import HeadingChild from '../../components/HeadingChild';

export function Heading() {
  useInjectReducer({ key: 'heading', reducer });
  useInjectSaga({ key: 'heading', saga });
  const classes = headingStyles();

  return (
    <Grid container justify="center" className={classes.main}>
      <Grid item xs={10} md={11}>
        <MenuAppBar />
        <HeadingChild />
      </Grid>
    </Grid>
  );
}

Heading.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  heading: makeSelectHeading(),
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

export default compose(withConnect)(Heading);
