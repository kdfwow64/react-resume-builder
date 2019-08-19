import React from 'react';
import {
  Typography,
  makeStyles,
  Grid,
  Box,
  Paper,
  Link,
  Slider,
  Button,
} from '@material-ui/core';
import CustomInput from '../Input/';
import CustomCheckbox from '../Checkbox';
import { Person, AddOutlined } from '@material-ui/icons';
import './Scrollbar.css';
import CustomSlider from '../Slider';
import CustomButton from '../Button';
const useStyles = makeStyles({
  wrapper: {
    padding: 20,
  },
  success: {
    color: 'teal',
    marginRight: 5,
  },
  panel: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
  },
  heading: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  container: {
    marginTop: 32,
  },
  person: { width: 65, height: 65, color: 'grey' },
});
const Content = props => {
  const { variant } = props;
  const classes = useStyles();

  let title =
    variant === 1
      ? 'Personal Details'
      : variant === 2
      ? 'Work experience'
      : variant === 3
      ? 'Education'
      : variant === 4
      ? 'Skills'
      : variant === 5 && 'Summary';
  return (
    <div className={classes.wrapper}>
      <Typography variant="h4" className={classes.heading}>
        {title}
      </Typography>
      <Grid container spacing={3} className={classes.container}>
        {variant === 1 && (
          <>
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center">
                <Box
                  borderRadius={4}
                  bgcolor="#f7f7f7"
                  width={80}
                  height={80}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mr={1}
                >
                  <Person className={classes.person} />
                </Box>
                <Typography variant="caption">Upload photo</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="Job Title"
                placeholder="e.g. Teacher"
                state="loading"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="First Name"
                placeholder="e.g. Teacher"
                defaultValue="Jacob"
                state="success"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="Last Name"
                placeholder="e.g. Teacher"
                defaultValue="Mark"
                state="success"
              />
            </Grid>
            <Grid item xs={12}>
              <CustomInput
                label="Street Address"
                placeholder="e.g. Teacher"
                defaultValue="Mark"
                state="success"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="City"
                placeholder="e.g. Teacher"
                defaultValue="Mark"
                state="success"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CustomInput
                label="State/Province"
                placeholder="e.g. Teacher"
                defaultValue="Mark"
                state="success"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CustomInput
                label="ZIP Code"
                placeholder="e.g. Teacher"
                defaultValue="Mark"
                state="success"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="Phone"
                placeholder="e.g. Teacher"
                defaultValue="Mark"
                state="success"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="Email"
                placeholder="e.g. Teacher"
                defaultValue="Mark"
                state="success"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="Website"
                placeholder="e.g. Teacher"
                defaultValue="Mark"
                state="success"
              />
            </Grid>
          </>
        )}
        {variant === 2 && (
          <>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="Job Title"
                placeholder="e.g. Teacher"
                state="success"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="Employer"
                placeholder="e.g. Teacher"
                defaultValue="Jacob"
                state="error"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="City"
                placeholder="e.g. Teacher"
                defaultValue="Mark"
                state="success"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="State/Province"
                placeholder="e.g. Teacher"
                defaultValue="Mark"
                state="success"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CustomInput
                label="Start Date"
                placeholder="Select"
                state="success"
                type="date"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CustomInput
                label="End Date"
                placeholder="Select"
                state="success"
                type="date"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomCheckbox label="I currently work here" />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="Work Details"
                placeholder="Description"
                multiline
                rows={9}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                overflow="auto"
                height={210}
                bgcolor="#f7f7f7"
                p={2}
                borderRadius={6}
              >
                <Paper className={classes.panel}>
                  <AddOutlined className={classes.success} />
                  <Typography variant="caption">
                    Added shopping cart, streaming video files and "Try Before
                    You Buy" service to promote games.
                  </Typography>
                </Paper>
                <Paper className={classes.panel}>
                  <AddOutlined className={classes.success} />
                  <Typography variant="caption">
                    Added shopping cart, streaming video files and "Try Before
                    You Buy" service to promote games.
                  </Typography>
                </Paper>
                <Paper className={classes.panel}>
                  <AddOutlined className={classes.success} />
                  <Typography variant="caption">
                    Added shopping cart, streaming video files and "Try Before
                    You Buy" service to promote games.
                  </Typography>
                </Paper>
                <Paper className={classes.panel}>
                  <AddOutlined className={classes.success} />
                  <Typography variant="caption">
                    Added shopping cart, streaming video files and "Try Before
                    You Buy" service to promote games.
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          </>
        )}
        {variant === 3 && (
          <>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="School Name"
                placeholder="e.g. Teacher"
                state="success"
                defaultValue="Tadi"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="Degree"
                placeholder="e.g. Teacher"
                defaultValue="Jacob"
                state="error"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="City"
                placeholder="e.g. Teacher"
                defaultValue="Mark"
                state="success"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="State/Province"
                placeholder="e.g. Teacher"
                defaultValue="Mark"
                state="success"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CustomInput
                label="Start Date"
                placeholder="Select"
                state="success"
                type="date"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CustomInput
                label="End Date"
                placeholder="Select"
                state="success"
                type="date"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomCheckbox label="I currently study here" checked />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="Study Details"
                placeholder="Description"
                multiline
                rows={9}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                overflow="auto"
                height={210}
                bgcolor="#f7f7f7"
                p={2}
                borderRadius={6}
              >
                <Paper className={classes.panel}>
                  <AddOutlined className={classes.success} />
                  <Typography variant="caption">
                    Professional development completed in <Link>[Subject]</Link>
                  </Typography>
                </Paper>
                <Paper className={classes.panel}>
                  <AddOutlined className={classes.success} />
                  <Typography variant="caption">
                    Professional development completed in <Link>[Subject]</Link>
                  </Typography>
                </Paper>
                <Paper className={classes.panel}>
                  <AddOutlined className={classes.success} />
                  <Typography variant="caption">
                    Professional development completed in <Link>[Subject]</Link>
                  </Typography>
                </Paper>
                <Paper className={classes.panel}>
                  <AddOutlined className={classes.success} />
                  <Typography variant="caption">
                    Professional development completed in <Link>[Subject]</Link>
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          </>
        )}
        {variant === 4 && (
          <>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="Skill"
                placeholder="e.g. Teacher"
                defaultValue="MS Word"
                state="success"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center" height={55}>
                <CustomSlider defaultValue={30} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="Skill"
                placeholder="e.g. Teacher"
                defaultValue="AdobeXD"
                state="success"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center" height={55}>
                <CustomSlider defaultValue={65} />
              </Box>
            </Grid>{' '}
            <Grid item xs={12} md={6}>
              <CustomInput label="Skill" placeholder="e.g. Teacher" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center" height={55}>
                <CustomSlider disabled />
              </Box>
            </Grid>{' '}
            <Grid item xs={12} md={6}>
              <CustomInput label="Skill" placeholder="e.g. Teacher" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center" height={55}>
                <CustomSlider disabled />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomInput label="Skill" placeholder="e.g. Teacher" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center" height={55}>
                <CustomSlider disabled />
              </Box>
            </Grid>{' '}
            <Grid item xs={12} md={6}>
              <CustomCheckbox label="Don't show experience level" checked />
            </Grid>
          </>
        )}
        {variant === 5 && (
          <>
            <Grid item xs={12} md={6}>
              <CustomInput
                label="Summary Details"
                placeholder="Description"
                multiline
                rows={24}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                overflow="auto"
                height={494}
                bgcolor="#f7f7f7"
                p={2}
                borderRadius={6}
              >
                <Paper className={classes.panel}>
                  <AddOutlined className={classes.success} />
                  <Typography variant="caption">
                    Self-motivated Web Developer with high level of experience
                    working on multiple projects. Passionate and hardworking
                    with penchant for meeting deadlines. Interested in role with
                    company promoting best practices and offering diverse
                    customer projects
                  </Typography>
                </Paper>
                <Paper className={classes.panel}>
                  <AddOutlined className={classes.success} />
                  <Typography variant="caption">
                    Solution-driven professional excelling in highly
                    collaborative work environment, finding solutions to
                    challenges and focused on customer satisfaction. Proven
                    experience developing consumer-focused web sites using HTML,
                    CSS, JQuery, PHP and JavaScript. Experience building
                    products for desktop, phone and mobile app users, meeting
                    highest standards for web design, user experience, best
                    practices, usability and speed. Responding to challenges by
                    designing and developing solutions and building web
                    applications aligned to customer's services. Translating
                    solutions into code and working across many different APIs,
                    third-party integrations and databases.
                  </Typography>
                </Paper>
                <Paper className={classes.panel}>
                  <AddOutlined className={classes.success} />
                  <Typography variant="caption">
                    Self-motivated Web Developer with high level of experience
                    working on multiple projects. Passionate and hardworking
                    with penchant for meeting deadlines. Interested in role with
                    company promoting
                  </Typography>
                </Paper>
                <Paper className={classes.panel}>
                  <AddOutlined className={classes.success} />
                  <Typography variant="caption">
                    Added shopping cart, streaming video files and "Try Before
                    You Buy" service to promote games.
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          </>
        )}
        <Grid item xs={12}>
          <Grid container justify="space-between">
            <Grid xs={12} md={2} item>
              <Button variant="contained" color="default" fullWidth>
                Back
              </Button>
            </Grid>
            {variant !== 1 && variant !== 5 && (
              <Grid xs={12} md={variant === 3 ? 3 : 2} item>
                <Button variant="contained" color="default" fullWidth>
                  <AddOutlined />
                  Add{' '}
                  {variant === 2
                    ? 'work'
                    : variant === 3
                    ? 'education'
                    : 'skill'}
                </Button>
              </Grid>
            )}
            <Grid xs={12} md={2} item>
              <CustomButton>Next step</CustomButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Content;
