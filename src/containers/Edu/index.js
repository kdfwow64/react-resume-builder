/**
 *
 * Edu
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import MenuAppBar from '../../components/Appbar';
import { Grid } from '@material-ui/core';
import { educationStyles } from './styles';
import EducationChild from '../../components/EducationChild';

export function Edu(props) {
	const classes = educationStyles();

	return (
		<EducationChild index={props.match.params.index} history={props.history} />
	);
}

Edu.propTypes = {
	// dispatch: PropTypes.func.isRequired,
};

export default Edu;
