/**
 *
 * WorkChild
 *
 */

import React, { memo, useState, useEffect } from 'react';
import { AddOutlined } from '@material-ui/icons';
import { Typography, Paper, Grid, Box, Button } from '@material-ui/core';
import { workChildStyles } from './style';
import CustomInput from '../Input';
import CustomCheckbox from '../Checkbox';
import CustomButton from '../Button';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function WorkChild() {
	const classes = workChildStyles();
	const dispatch = useDispatch();
	const query = useSelector(state => state);
	const { fetching, server_data, error } = query;

	const [city, setCity] = useState('');
	const [currentWork, setCurrentWork] = useState('');
	const [employer, setEmployer] = useState('');
	const [endDate, setEndDate] = useState('');
	const [id, setId] = useState('');
	const [startDate, setStartDate] = useState('');
	const [stateProvince, setStateProvince] = useState('');
	const [workTitle, setWorkTitle] = useState('');

	console.log('server_data_workhistory', server_data);

	let index = 0;

	useEffect(() => {
		setCity(server_data.workHistory[index].city);
		setCurrentWork(server_data.workHistory[index].currentWork);
		setEmployer(server_data.workHistory[index].employer);
		let res = [];
		if (server_data.workHistory[index].endDate === undefined) {
			res = ['', '', ''];
		} else {
			res = server_data.workHistory[index].endDate.split('/');
		}
		setEndDate(`${res[2]}-${res[0]}-${res[1]}`);
		setId(server_data.workHistory[index].id);
		if (server_data.workHistory[index].startDate === undefined) {
			res = ['', '', ''];
		} else {
			res = server_data.workHistory[index].startDate.split('/');
		}
		setStartDate(`${res[2]}-${res[0]}-${res[1]}`);
		setStateProvince(server_data.workHistory[index].stateProvince);
		setWorkTitle(server_data.workHistory[index].workTitle);
	}, [server_data]);

	console.log(workTitle);

	const handleChange = e => {
		let jsonValue = {};
		if (e.target.type === 'date') {
			let res = e.target.value.split('-');

			let value = `${res[1]}/${res[2]}/${res[0]}`;
			jsonValue = {
				type: 'API_CALL_CHANGE',
				field: e.target.id,
				name: e.target.name,
				value: value,
				index: index
			};
		} else if (e.target.checked !== undefined) {
			let value = e.target.value === 'true' ? 'false' : 'true';
			jsonValue = {
				type: 'API_CALL_CHANGE',
				field: e.target.id,
				name: e.target.name,
				value: value,
				index: index
			};
		} else {
			jsonValue = {
				type: 'API_CALL_CHANGE',
				field: e.target.id,
				name: e.target.name,
				value: e.target.value,
				index: index
			};
		}

		console.log(jsonValue);
		dispatch(jsonValue);
	};

	return (
		<Paper className={classes.paper} elevation={0}>
			<Grid container spacing={3} className={classes.container}>
				<Grid item md={8}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={6}>
							<CustomInput
								label='Job Title'
								placeholder='e.g. Teacher'
								state='success'
								value={workTitle}
								id='workHistory'
								name='workTitle'
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomInput
								label='Employer'
								placeholder='e.g. Teacher'
								value={employer}
								state='error'
								id='workHistory'
								name='employer'
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomInput
								label='City'
								placeholder='e.g. Teacher'
								value={city}
								state='success'
								id='workHistory'
								name='city'
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomInput
								label='State/Province'
								placeholder='e.g. Teacher'
								value={stateProvince}
								state='success'
								id='workHistory'
								name='stateProvince'
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={3}>
							<CustomInput
								label='Start Date'
								placeholder='Select'
								state='success'
								type='date'
								value={startDate}
								id='workHistory'
								name='startDate'
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={3}>
							<CustomInput
								label='End Date'
								placeholder='Select'
								state='success'
								type='date'
								value={endDate}
								id='workHistory'
								name='endDate'
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomCheckbox
								label='I currently work here'
								checked={currentWork === 'true'}
								value={currentWork}
								id='workHistory'
								name='currentWork'
								handleChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomInput label='Work Details' placeholder='Description' multiline rows={9} />
						</Grid>
						<Grid item xs={12} md={6}>
							<Box overflow='auto' height={210} bgcolor='#f7f7f7' p={2} borderRadius={6}>
								<Paper className={classes.panel}>
									<AddOutlined className={classes.success} />
									<Typography variant='caption'>
										Added shopping cart, streaming video files and "Try Before You Buy" service to
										promote games.
									</Typography>
								</Paper>
								<Paper className={classes.panel}>
									<AddOutlined className={classes.success} />
									<Typography variant='caption'>
										Added shopping cart, streaming video files and "Try Before You Buy" service to
										promote games.
									</Typography>
								</Paper>
								<Paper className={classes.panel}>
									<AddOutlined className={classes.success} />
									<Typography variant='caption'>
										Added shopping cart, streaming video files and "Try Before You Buy" service to
										promote games.
									</Typography>
								</Paper>
								<Paper className={classes.panel}>
									<AddOutlined className={classes.success} />
									<Typography variant='caption'>
										Added shopping cart, streaming video files and "Try Before You Buy" service to
										promote games.
									</Typography>
								</Paper>
							</Box>
						</Grid>
					</Grid>
					<Grid item xs={12} style={{ marginTop: 32 }}>
						<Grid container justify='space-between' className={classes.container}>
							<Grid xs={12} md={2} item>
								<Button component={Link} to='/heading' variant='contained' color='default' fullWidth>
									Back
								</Button>
							</Grid>
							<Grid xs={12} md={3} item>
								<Button variant='contained' color='default' fullWidth>
									<AddOutlined />
									Add work
								</Button>
							</Grid>
							<Grid xs={12} md={2} item>
								<CustomButton component={Link} to='/education'>
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

WorkChild.propTypes = {};

export default memo(WorkChild);
