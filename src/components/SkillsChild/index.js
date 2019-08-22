/**
 *
 * SkillsChild
 *
 */

import React, { memo } from 'react';
import { Paper, Grid, Box, Button } from '@material-ui/core';
import { AddOutlined } from '@material-ui/icons';
import { skillsChildStyles } from './style';
import CustomInput from '../Input';
import CustomSlider from '../Slider';
import CustomCheckbox from '../Checkbox';
import CustomButton from '../Button';
import { Link } from 'react-router-dom';

function SkillsChild() {
	const classes = skillsChildStyles();
	return (
		<Paper className={classes.paper} elevation={0}>
			<Grid container spacing={3}>
				<Grid item md={8}>
					<Grid container spacing={3} className={classes.container}>
						<Grid item xs={12} md={6}>
							<CustomInput
								label='Skill'
								placeholder='e.g. Teacher'
								defaultValue='MS Word'
								state='success'
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box display='flex' alignItems='center' height={55}>
								<CustomSlider defaultValue={30} />
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomInput
								label='Skill'
								placeholder='e.g. Teacher'
								defaultValue='AdobeXD'
								state='success'
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box display='flex' alignItems='center' height={55}>
								<CustomSlider defaultValue={65} />
							</Box>
						</Grid>{' '}
						<Grid item xs={12} md={6}>
							<CustomInput label='Skill' placeholder='e.g. Teacher' />
						</Grid>
						<Grid item xs={12} md={6}>
							<Box display='flex' alignItems='center' height={55}>
								<CustomSlider disabled />
							</Box>
						</Grid>{' '}
						<Grid item xs={12} md={6}>
							<CustomInput label='Skill' placeholder='e.g. Teacher' />
						</Grid>
						<Grid item xs={12} md={6}>
							<Box display='flex' alignItems='center' height={55}>
								<CustomSlider disabled />
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							<CustomInput label='Skill' placeholder='e.g. Teacher' />
						</Grid>
						<Grid item xs={12} md={6}>
							<Box display='flex' alignItems='center' height={55}>
								<CustomSlider disabled />
							</Box>
						</Grid>{' '}
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
