/**
 *
 * SkillsChild
 *
 */

import React, { memo, useState, useEffect } from 'react';
import { Paper, Grid, Box, Button } from '@material-ui/core';
import { AddOutlined } from '@material-ui/icons';
import { skillsChildStyles } from './style';
import CustomInput from '../Input';
import CustomSlider from '../Slider';
import CustomCheckbox from '../Checkbox';
import CustomButton from '../Button';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

function SkillsChild() {
	const classes = skillsChildStyles();
	const dispatch = useDispatch();
	const query = useSelector(state => state);
	const { fetching, server_data, error } = query;
	const initialValue = [{ id: 0, name: '', rate: 0 }];
	const [stateSkills, setStateSkills] = useState(initialValue);
	let [skillsLoading, setskillsLoading] = useState([]);
	const [flagInput, setFlagInput] = useState('');
	const allowedState = [];

	let skills = [];
	let arrayValue = [];
	server_data.skills.map((item, index) => {
		allowedState.push({ id: item.id, name: item.name, rate: item.rate });
		skills.push('success');
		arrayValue.push('success');
	});
	// skillsLoading = [...skills];

	useEffect(() => {
		setStateSkills(allowedState);
		// setskillsLoading(skillsLoading);
	}, [server_data]);

	let index = 0;
	// console.log(skillsLoading);

	useEffect(() => {
		console.log(flagInput);
		console.log(arrayValue[flagInput]);

		if (fetching) {
			console.log('fetching');
			arrayValue[flagInput] = 'loading';
			console.log('arrayValue', arrayValue);
			setskillsLoading(arrayValue);
		} else {
			arrayValue[flagInput] = 'success';
			setskillsLoading(arrayValue);
		}
		console.log(skillsLoading);
	}, [fetching]);
	console.log('arrayValue', arrayValue);

	const handleChange = e => {
		let value = e.target.value;
		let res = e.target.name.split('-');

		let name = res[0];
		index = parseInt(res[1]);
		let id = parseInt(res[2]);

		let jsonValue = {};

		jsonValue = {
			type: 'API_CALL_CHANGE',
			field: e.target.id,
			name: name,
			value: e.target.value,
			index: index
		};
		dispatch(jsonValue);

		switch (name) {
			case 'name':
				setTimeout(function() {
					setFlagInput(index);
					dispatch({
						type: 'API_CALL_UPDATE',
						payload: { field: 'skills', id: id, json: { name: value } }
					});
				}, 500);
				break;
			default:
				break;
		}
	};

	return (
		<Paper className={classes.paper} elevation={0}>
			<Grid container spacing={3}>
				<Grid item md={8}>
					<Grid container spacing={3} className={classes.container}>
						{stateSkills.map((item, index) => {
							return (
								<React.Fragment key={index}>
									<Grid item xs={12} md={6}>
										<CustomInput
											label='Skill'
											placeholder='e.g. Teacher'
											value={item.name}
											state={skillsLoading[index]}
											id='skills'
											name={`name-${index}-${item.id}`}
											onChange={handleChange}
										/>
									</Grid>
						<Grid item xs={12} md={6}>
										<Box display='flex' alignItems='center' height={55}>
											<CustomSlider
												value={parseInt(item.rate)}
												id='skills'
												name={`rate-${index}`}
												// onChange={handleChange}
											/>
										</Box>
									</Grid>
								</React.Fragment>
							);
						})}{' '}
						<Grid item xs={12} md={6}>
							<CustomCheckbox label="Don't show experience level" checked />
						</Grid>
					</Grid>
					<Grid item xs={12} style={{ marginTop: 32 }}>
						<Grid container justify='space-between'>
							<Grid xs={12} md={2} item>
								<Button component={Link} to='/education' variant='contained' color='default' fullWidth>
									Back
								</Button>
							</Grid>
							<Grid xs={12} md={2} item>
								<Button variant='contained' color='default' fullWidth>
									<AddOutlined />
									Add skill
								</Button>
							</Grid>
							<Grid xs={12} md={2} item>
								<CustomButton component={Link} to='/summary'>
									Next step
								</CustomButton>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item md={4}>
					<Box boxShadow={2} borderRadius={4}>
						<img src='https://via.placeholder.com/300x450' className={classes.img} alt='cv' />
					</Box>
				</Grid>
			</Grid>
		</Paper>
	);
}

SkillsChild.propTypes = {};

export default memo(SkillsChild);
