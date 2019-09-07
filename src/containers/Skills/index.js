/**
 *
 * Skills
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Grid } from '@material-ui/core';
import MenuAppBar from '../../components/Appbar';
import { skillsStyles } from './styles';
import SkillsChild from '../../components/SkillsChild';

export function Skills() {
	const classes = skillsStyles();

	return (
		<SkillsChild />
	);
}

Skills.propTypes = {
	// dispatch: PropTypes.func.0isRequired,
};

export default Skills;
