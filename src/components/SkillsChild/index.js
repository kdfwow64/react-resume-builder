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

	const initialValue = [{ id: 0, name: '', rate: 0 }];
	const [stateSkills, setStateSkills] = useState(initialValue);
	const allowedState = [];

	const { fetching, server_data, error } = query;
	server_data.skills.map((item, index) => {
		allowedState.push({ id: item.id, name: item.name, rate: item.rate });
	});

	console.log('server_data', server_data);

	useEffect(() => {
		setStateSkills(allowedState);
	}, [server_data]);

	const handleChangeFirstName = e => dispatch({ type: 'API_CALL_CHANGE', value: e.target.value });

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
											state='success'
										/>
									</Grid>
						<Grid item xs={12} md={6}>
										<Box display='flex' alignItems='center' height={55}>
											<CustomSlider value={parseInt(item.rate)} />
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
