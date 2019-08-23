import React from 'react';
import { Slider, makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
	root: {
		color: 'teal'
	},
	thumb: {
		width: 15,
		height: 15
	},
	thumbDisabled: {
		width: '15px !important',
		height: '15px !important',
		marginTop: '-6px !important'
	},
	track: {
		height: 4
	},
	rail: {
		height: 4
	},
	disabled: {
		height: 4
	}
});
const CustomSlider = props => {
	const classes = useStyles();
	return (
		<Slider
			classes={{
				root: classes.root,
				thumb: props.disabled ? classes.thumbDisabled : classes.thumb,
				track: classes.track,
				rail: classes.rail,
				disabled: classes.disabled
			}}
			{...props}
		/>
	);
};

export default CustomSlider;
