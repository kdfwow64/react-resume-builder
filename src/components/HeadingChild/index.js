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

	console.log('server_data', server_data);

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

	const handleChangeFirstName = e => dispatch({ type: 'API_CALL_CHANGE', value: e.target.value });
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
							<CustomInput label='Job Title' placeholder='e.g. Teacher' state='loading' />
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomInput
								name='profile'
								label='First Name'
								placeholder='e.g. Teacher'
								value={firstName}
								onChange={handleChangeFirstName}
								state='success'
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomInput
								label='Last Name'
								placeholder='e.g. Teacher'
								value={lastName}
								state='success'
							/>
						</Grid>
						<Grid item xs={12}>
							<CustomInput
								label='Street Address'
								placeholder='e.g. Teacher'
								value={street}
								state='success'
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomInput label='City' placeholder='e.g. Teacher' value={city} state='success' />
						</Grid>
						<Grid item xs={12} md={3}>
							<CustomInput
								label='State/Province'
								placeholder='e.g. Teacher'
								value={stateProvince}
								state='success'
							/>
						</Grid>
						<Grid item xs={12} md={3}>
							<CustomInput label='ZIP Code' placeholder='e.g. Teacher' value={zipcode} state='success' />
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomInput label='Phone' placeholder='e.g. Teacher' value={phone} state='success' />
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomInput label='Email' placeholder='e.g. Teacher' value={email} state='success' />
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomInput label='Website' placeholder='e.g. Teacher' value={website} state='success' />
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
