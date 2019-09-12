/**
 *
 * Summary
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import MenuAppBar from '../../components/Appbar';
import { summaryStyles } from './styles';
import SummaryChild from '../../components/SummaryChild';

export function Summary() {
	const classes = summaryStyles();

	return (
		<SummaryChild />
	);
}

Summary.propTypes = {
	// dispatch: PropTypes.func.isRequired,
};

export default Summary;
