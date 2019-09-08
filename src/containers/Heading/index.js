import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { headingStyles } from './styles';
import HeadingChild from '../../components/HeadingChild';

const Heading = () => {
	const classes = headingStyles();
	// const { fetching, dog, onRequestDog, error } = this.props;
	const dispatch = useDispatch();
	const query = useSelector(state => state);
	const { fetching, server_data, onRequestDog, error } = query;
	const handleClick = e => dispatch({ type: 'API_CALL_REQUEST' });
	return (
		<HeadingChild />
	);
};

export default Heading;
