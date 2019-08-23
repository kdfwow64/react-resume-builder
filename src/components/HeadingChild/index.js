/**
 *
 * HeadingChild
 *
 */

import React, { memo, useState, useEffect } from 'react';
import { Paper, Grid, Box, Typography, Button } from '@material-ui/core';
import { Person } from '@material-ui/icons';
import { headingChildStyles } from './style';
import CustomInput from '../Input';
import CustomButton from '../Button';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

function HeadingChild() {
	const classes = headingChildStyles();
	const dispatch = useDispatch();
	const query = useSelector(state => state);
	const { fetching, server_data, error } = query;

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [website, setWebsite] = useState('');
	const [street, setStreet] = useState('');
	const [stateProvince, setStateProvince] = useState('');
	const [city, setCity] = useState('');
	const [zipcode, setZipcode] = useState('');
	const [flagInput, setFlagInput] = useState('');

	const [firstNameLoading, setFirstNameLoading] = useState('success');
	const [lastNameLoading, setLastNameLoading] = useState('success');
	const [emailLoading, setEmailLoading] = useState('success');
	const [phoneLoading, setPhoneLoading] = useState('success');
	const [websiteLoading, setWebsiteLoading] = useState('success');
	const [streetLoading, setStreetLoading] = useState('success');
	const [stateProvinceLoading, setStateProvinceLoading] = useState('success');
	const [cityLoading, setCityLoading] = useState('success');
	const [zipcodeLoading, setZipcodeLoading] = useState('success');

	useEffect(() => {
		setFirstName(server_data.profile.firstName);
		setLastName(server_data.profile.lastName);
		setEmail(server_data.profile.email);
		setPhone(server_data.profile.phone);
		setWebsite(server_data.profile.website);
		setStreet(server_data.address.street);
		setStateProvince(server_data.address.stateProvince);
		setCity(server_data.address.city);
		setZipcode(server_data.address.zipcode);
	}, [server_data]);

	useEffect(() => {
		console.log(flagInput);
		if (fetching) {
			switch (flagInput) {
				case 'firstName':
					setFirstNameLoading('loading');
					break;
				case 'lastName':
					setLastNameLoading('loading');
					break;
				case 'email':
					setEmailLoading('loading');
					break;
				case 'phone':
					setPhoneLoading('loading');
					break;
				case 'website':
					setWebsiteLoading('loading');
					break;
				case 'street':
					setStreetLoading('loading');
					break;
				case 'stateProvince':
					setStateProvinceLoading('loading');
					break;
				case 'city':
					setCityLoading('loading');
					break;
				case 'zipcode':
					setZipcodeLoading('loading');
					break;
				default:
					break;
			}
		} else {
			switch (flagInput) {
				case 'firstName':
					setFirstNameLoading('success');
					break;
				case 'lastName':
					setLastNameLoading('success');
					break;
				case 'email':
					setEmailLoading('success');
					break;
				case 'phone':
					setPhoneLoading('success');
					break;
				case 'website':
					setWebsiteLoading('success');
					break;
				case 'street':
					setStreetLoading('success');
					break;
				case 'stateProvince':
					setStateProvinceLoading('success');
					break;
				case 'city':
					setCityLoading('success');
					break;
				case 'zipcode':
					setZipcodeLoading('success');
					break;
				default:
					break;
			}
		}
	}, [fetching]);

	const handleChange = e => {
		let value = e.target.value;
		let name = e.target.name;
		let jsonValue = {
			type: 'API_CALL_CHANGE',
			field: e.target.id,
			name: e.target.name,
			value: e.target.value
		};
		dispatch(jsonValue);
		switch (e.target.name) {
			case 'firstName':
				setTimeout(function() {
					// setFirstNameLoading('loading');
					setFlagInput(name);
					dispatch({
						type: 'API_CALL_UPDATE',
						payload: { field: 'profile', id: null, json: { firstName: value } }
					});
					// setFirstNameLoading('success');
				}, 500);
				break;
			case 'lastName':
				setTimeout(function() {
					setFlagInput(name);
					dispatch({
						type: 'API_CALL_UPDATE',
						payload: { field: 'profile', id: null, json: { lastName: value } }
					});
				}, 500);
				break;
			case 'email':
				setTimeout(function() {
					setFlagInput(name);
					dispatch({
						type: 'API_CALL_UPDATE',
						payload: { field: 'profile', id: null, json: { email: value } }
					});
				}, 500);

				break;
			case 'phone':
				setTimeout(function() {
					setFlagInput(name);
					dispatch({
						type: 'API_CALL_UPDATE',
						payload: { field: 'profile', id: null, json: { phone: value } }
					});
				}, 500);
				break;
			case 'website':
				setTimeout(function() {
					setFlagInput(name);
					dispatch({
						type: 'API_CALL_UPDATE',
						payload: { field: 'profile', id: null, json: { website: value } }
					});
				}, 500);

				break;
			case 'street':
				setTimeout(function() {
					setFlagInput(name);
					dispatch({
						type: 'API_CALL_UPDATE',
						payload: { field: 'address', id: null, json: { street: value } }
					});
				}, 500);

				break;
			case 'stateProvince':
				setTimeout(function() {
					setFlagInput(name);
					dispatch({
						type: 'API_CALL_UPDATE',
						payload: { field: 'address', id: null, json: { stateProvince: value } }
					});
				}, 500);

				break;
			case 'city':
				setTimeout(function() {
					setFlagInput(name);
					dispatch({
						type: 'API_CALL_UPDATE',
						payload: { field: 'address', id: null, json: { city: value } }
					});
				}, 500);

				break;
			case 'zipcode':
				setTimeout(function() {
					setFlagInput(name);
					dispatch({
						type: 'API_CALL_UPDATE',
						payload: { field: 'address', id: null, json: { zipcode: value } }
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
					<Grid container spacing={3}>
						<Grid item xs={12} md={6}>
							<Box display='flex' alignItems='center'>
								<Box
									borderRadius={4}
									bgcolor='#f7f7f7'
									width={80}
									height={80}
									display='flex'
									justifyContent='center'
									alignItems='center'
									mr={1}
								>
									<Person className={classes.person} />
								</Box>
								<Typography variant='caption'>Upload photo</Typography>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomInput label='Job Title' placeholder='e.g. Teacher' state='success' />
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomInput
								label='First Name'
								placeholder='e.g. Teacher'
								value={firstName}
								state={firstNameLoading}
								id='profile'
								name='firstName'
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomInput
								label='Last Name'
								placeholder='e.g. Teacher'
								value={lastName}
								state={lastNameLoading}
								id='profile'
								name='lastName'
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<CustomInput
								label='Street Address'
								placeholder='e.g. Teacher'
								value={street}
								state={streetLoading}
								id='address'
								name='street'
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomInput
								label='City'
								placeholder='e.g. Teacher'
								value={city}
								state={cityLoading}
								id='address'
								name='city'
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={3}>
							<CustomInput
								label='State/Province'
								placeholder='e.g. Teacher'
								value={stateProvince}
								state={stateProvinceLoading}
								id='address'
								name='stateProvince'
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={3}>
							<CustomInput
								label='ZIP Code'
								placeholder='e.g. Teacher'
								value={zipcode}
								state={zipcodeLoading}
								id='address'
								name='zipcode'
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomInput
								label='Phone'
								placeholder='e.g. Teacher'
								value={phone}
								state={phoneLoading}
								id='profile'
								name='phone'
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomInput
								label='Email'
								placeholder='e.g. Teacher'
								value={email}
								state={emailLoading}
								id='profile'
								name='email'
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomInput
								label='Website'
								placeholder='e.g. Teacher'
								value={website}
								state={websiteLoading}
								id='profile'
								name='website'
								onChange={handleChange}
							/>
						</Grid>

						<Grid item xs={12} style={{ marginTop: 32 }}>
							<Grid container justify='space-between'>
								<Grid xs={12} md={2} item>
									<Button variant='contained' color='default' fullWidth disabled>
										Back
									</Button>
								</Grid>

								<Grid xs={12} md={2} item>
									<CustomButton component={Link} to='/work-history'>
										Next step
									</CustomButton>
								</Grid>
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

HeadingChild.propTypes = {};

export default memo(HeadingChild);
