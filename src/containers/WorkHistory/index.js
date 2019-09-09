/**
 *
 * WorkHistory
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import MenuAppBar from '../../components/Appbar';
import { workHistoryStyles } from './styles';
import WorkChild from '../../components/WorkChild';

export function WorkHistory(props) {
	const classes = workHistoryStyles();

	return (
		<WorkChild index={props.match.params.index} history={props.history} />
	);
}

WorkHistory.propTypes = {
	// dispatch: PropTypes.func.isRequired,
};

export default WorkHistory;
