/**
 *
 * SummaryChild
 *
 */

import React, { memo } from 'react';
import { Grid, Box, Typography, Paper, Button } from '@material-ui/core';
import { AddOutlined } from '@material-ui/icons';
import CustomInput from '../Input';
import { summaryChildStyles } from './style';
import CustomButton from '../Button';
import { Link } from 'react-router-dom';

function SummaryChild() {
	const classes = summaryChildStyles();
	return (
		<Paper className={classes.paper} elevation={0}>
			<Grid container spacing={3}>
				<Grid item md={8}>
					<Grid container spacing={3} className={classes.container}>
						<Grid item xs={12} md={6}>
							<CustomInput label='Summary Details' placeholder='Description' multiline rows={24} />
						</Grid>
						<Grid item xs={12} md={6}>
							<Box overflow='auto' height={494} bgcolor='#f7f7f7' p={2} borderRadius={6}>
								<Paper className={classes.panel}>
									<AddOutlined className={classes.success} />
									<Typography variant='caption'>
										Self-motivated Web Developer with high level of experience working on multiple
										projects. Passionate and hardworking with penchant for meeting deadlines.
										Interested in role with company promoting best practices and offering diverse
										customer projects
									</Typography>
								</Paper>
								<Paper className={classes.panel}>
									<AddOutlined className={classes.success} />
									<Typography variant='caption'>
										Solution-driven professional excelling in highly collaborative work environment,
										finding solutions to challenges and focused on customer satisfaction. Proven
										experience developing consumer-focused web sites using HTML, CSS, JQuery, PHP
										and JavaScript. Experience building products for desktop, phone and mobile app
										users, meeting highest standards for web design, user experience, best
										practices, usability and speed. Responding to challenges by designing and
										developing solutions and building web applications aligned to customer's
										services. Translating solutions into code and working across many different
										APIs, third-party integrations and databases.
									</Typography>
								</Paper>
								<Paper className={classes.panel}>
									<AddOutlined className={classes.success} />
									<Typography variant='caption'>
										Self-motivated Web Developer with high level of experience working on multiple
										projects. Passionate and hardworking with penchant for meeting deadlines.
										Interested in role with company promoting
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
						<Grid container justify='space-between'>
							<Grid xs={12} md={2} item>
								<Button component={Link} to='/skills' variant='contained' color='default' fullWidth>
									Back
								</Button>
							</Grid>
							<Grid xs={12} md={2} item>
								<CustomButton component={Link} to='/finalize'>
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

SummaryChild.propTypes = {};

export default memo(SummaryChild);
