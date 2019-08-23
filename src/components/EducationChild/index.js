/**
 *
 * EducationChild
 *
 */

import React, { useState, useEffect } from 'react';
import { Paper, Grid, Typography, Box, Button } from '@material-ui/core';
import { AddOutlined } from '@material-ui/icons';
import CustomInput from '../Input';
import CustomCheckbox from '../Checkbox';
import { educationChildStyles } from './style';
import CustomButton from '../Button';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function EducationChild() {
	const classes = educationChildStyles();
	const dispatch = useDispatch();
	const query = useSelector(state => state);
	const { fetching, server_data, error } = query;

	const [city, setCity] = useState('');
	const [currentSchool, setCurrentSchool] = useState('');
	const [degree, setDegree] = useState('');
	const [endDate, setEndDate] = useState('');
	const [id, setId] = useState('');
	const [schoolName, setSchoolName] = useState('');
	const [startDate, setStartDate] = useState('');
	const [stateProvince, setStateProvince] = useState('');

	const [cityLoading, setCityLoading] = useState('success');
	const [schoolNameLoading, setSchoolNameLoading] = useState('success');
	const [endDateLoading, setEndDateLoading] = useState('success');
	const [startDateLoading, setStartDateLoading] = useState('success');
	const [stateProvinceLoading, setStateProvinceLoading] = useState('success');
	const [degreeLoading, setDegreeLoading] = useState('success');

	let index = 0;

	useEffect(() => {
		setId(server_data.education[index].id);
		setCity(server_data.education[index].city);
		setCurrentSchool(server_data.education[index].currentSchool);
		setDegree(server_data.education[index].degree);
		let res = [];
		if (server_data.education[index].endDate === undefined) {
			res = ['', '', ''];
		} else {
			res = server_data.education[index].endDate.split('/');
		}
		setEndDate(`${res[2]}-${res[0]}-${res[1]}`);
		setId(server_data.education[index].id);
		setSchoolName(server_data.education[index].schoolName);
		if (server_data.education[index].startDate === undefined) {
			res = ['', '', ''];
		} else {
			res = server_data.education[index].startDate.split('/');
		}
		setStartDate(`${res[2]}-${res[0]}-${res[1]}`);
		setStateProvince(server_data.education[index].stateProvince);
	}, [server_data]);

	const handleChange = e => {
		let jsonValue = {};
		let value = e.target.value;
		if (e.target.type === 'date') {
			let res = e.target.value.split('-');

			value = `${res[1]}/${res[2]}/${res[0]}`;
			jsonValue = {
				type: 'API_CALL_CHANGE',
				field: e.target.id,
				name: e.target.name,
				value: value,
				index: index
			};
		} else if (e.target.name === 'currentSchool') {
			value = e.target.value === 'true' ? 'false' : 'true';
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
				value: value,
				index: index
			};
		}

		dispatch(jsonValue);

		switch (e.target.name) {
			case 'schoolName':
				setTimeout(function() {
					setSchoolNameLoading('loading');
					dispatch({
						type: 'API_CALL_UPDATE',
						payload: { field: 'education', id: id, json: { schoolName: value } }
					});
					setSchoolNameLoading('success');
				}, 500);
				break;
			case 'degree':
				setTimeout(function() {
					setDegreeLoading('loading');
					dispatch({
						type: 'API_CALL_UPDATE',
						payload: { field: 'education', id: id, json: { degree: value } }
					});
					setDegreeLoading('success');
				}, 500);
				break;
			case 'city':
				setTimeout(function() {
					setCityLoading('loading');
					dispatch({
						type: 'API_CALL_UPDATE',
						payload: { field: 'education', id: id, json: { city: value } }
					});
					setCityLoading('success');
				}, 500);

				break;
			case 'stateProvince':
				setTimeout(function() {
					setStateProvinceLoading('loading');
					dispatch({
						type: 'API_CALL_UPDATE',
						payload: { field: 'education', id: id, json: { stateProvince: value } }
					});
					setStateProvinceLoading('success');
				}, 500);
				break;
			case 'startDate':
				setTimeout(function() {
					setStartDateLoading('loading');
					dispatch({
						type: 'API_CALL_UPDATE',
						payload: { field: 'education', id: id, json: { startDate: value } }
					});
					setStartDateLoading('success');
				}, 500);

				break;
			case 'endDate':
				setTimeout(function() {
					setEndDateLoading('loading');
					dispatch({
						type: 'API_CALL_UPDATE',
						payload: { field: 'education', id: id, json: { endDate: value } }
					});
					setEndDateLoading('success');
				}, 500);

				break;
			case 'currentSchool':
				setTimeout(function() {
					dispatch({
						type: 'API_CALL_UPDATE',
						payload: { field: 'education', id: id, json: { currentSchool: value } }
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
						<Grid item xs={12} md={6}>
							<CustomInput
								label='School Name'
								placeholder='e.g. Teacher'
								state={schoolNameLoading}
								value={schoolName}
								id='education'
								name='schoolName'
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomInput
								label='Degree'
								placeholder='e.g. Teacher'
								value={degree}
								state={degreeLoading}
								id='education'
								name='degree'
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomInput
								label='City'
								placeholder='e.g. Teacher'
								defaultValue='Mark'
								state={cityLoading}
								value={city}
								id='education'
								name='city'
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomInput
								label='State/Province'
								placeholder='e.g. Teacher'
								value={stateProvince}
								state={stateProvinceLoading}
								id='education'
								name='stateProvince'
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={3}>
							<CustomInput
								label='Start Date'
								placeholder='Select'
								state={startDateLoading}
								type='date'
								value={startDate}
								id='education'
								name='startDate'
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={3}>
							<CustomInput
								label='End Date'
								placeholder='Select'
								state={endDateLoading}
								type='date'
								value={endDate}
								id='education'
								name='endDate'
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomCheckbox
								label='I currently study here'
								checked={currentSchool === 'true'}
								value={currentSchool}
								id='education'
								name='currentSchool'
								handleChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomInput label='Study Details' placeholder='Description' multiline rows={9} />
						</Grid>
						<Grid item xs={12} md={6}>
							<Box overflow='auto' height={210} bgcolor='#f7f7f7' p={2} borderRadius={6}>
								<Paper className={classes.panel}>
									<AddOutlined className={classes.success} />
									<Typography variant='caption'>
										Professional development completed in [Subject]
									</Typography>
								</Paper>
								<Paper className={classes.panel}>
									<AddOutlined className={classes.success} />
									<Typography variant='caption'>
										Professional development completed in [Subject]
									</Typography>
								</Paper>
								<Paper className={classes.panel}>
									<AddOutlined className={classes.success} />
									<Typography variant='caption'>
										Professional development completed in [Subject]
									</Typography>
								</Paper>
								<Paper className={classes.panel}>
									<AddOutlined className={classes.success} />
									<Typography variant='caption'>
										Professional development completed in [Subject]
									</Typography>
								</Paper>
							</Box>
						</Grid>
					</Grid>
					<Grid item xs={12} style={{ marginTop: 32 }}>
						<Grid container justify='space-between'>
							<Grid xs={12} md={2} item>
								<Button
									component={Link}
									to='/work-history'
									variant='contained'
									color='default'
									fullWidth
								>
									Back
								</Button>
							</Grid>
							<Grid xs={12} md={3} item>
								<Button variant='contained' color='default' fullWidth>
									<AddOutlined />
									Add education
								</Button>
							</Grid>
							<Grid xs={12} md={2} item>
								<CustomButton component={Link} to='/skills'>
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

EducationChild.propTypes = {};

export default EducationChild;
