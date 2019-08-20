/**
 *
 * Skills
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
import makeSelectSkills from './selectors';
import reducer from './reducer';
import saga from './saga';
import { skillsStyles } from './styles';
import SkillsChild from '../../components/SkillsChild';

export function Skills() {
  useInjectReducer({ key: 'skills', reducer });
  useInjectSaga({ key: 'skills', saga });
  const classes = skillsStyles();

  return (
    <Grid container justify="center" className={classes.main}>
      <Grid item xs={10} md={11}>
        <MenuAppBar />
        <SkillsChild />
      </Grid>
    </Grid>
  );
}

Skills.propTypes = {
  // dispatch: PropTypes.func.0isRequired,
};

const mapStateToProps = createStructuredSelector({
  skills: makeSelectSkills(),
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
)(Skills);
