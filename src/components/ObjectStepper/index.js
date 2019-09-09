import React, {memo, useState, useEffect, useRef} from 'react';
import {AddOutlined} from '@material-ui/icons';
import {Typography, Paper, Grid, Box, Button} from '@material-ui/core';
import CustomInput from '../Input';
import CustomCheckbox from '../Checkbox';
import CustomButton from '../Button';
import SearchList from '../SearchList/SearchList';
import RichEdit from '../RichEdit/RichEdit';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import StepLabel from '@material-ui/core/StepLabel';
import { makeStyles, createStyles } from "@material-ui/core/styles";
import _ from 'lodash';

import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
        flexWrap:'wrap',
        margin: 0,
        padding: 0,
        justifyContent:'center'
    }
  })
);

const stepperButtonStyles = makeStyles((theme) =>
  createStyles({
    root: {
        padding:0,
        margin:0,
        marginTop:2,
        marginBottom:2
      }
  })
);

const stepperIconStyles = makeStyles((theme) =>
  createStyles({
    root: {
        padding:0,
        margin:0,
        "&$active": {
          color: "#13806c",
        }
      },
    active: {
        color: "#13806c"
      },
  })
);

function ObjectStepper(props) {
    const {itemCount, onIndexChange, nextTooltip, prevTooltip} = props;
    const classes = useStyles();
    const buttonClasses = stepperButtonStyles();
    const iconClasses = stepperIconStyles();
    const items = _.times(itemCount);
    const [activeIndex, setActiveIndex] = useState(props.activeIndex ? props.activeIndex  : 0);

    useEffect(()=>{
        setActiveIndex(props.activeIndex);
    }, [props.activeIndex]);

    const changeIndex = index => {
        setActiveIndex(index);
        if(onIndexChange)
            onIndexChange(index);
    }

    return (
        <Grid container justify='space-between' alignItems='center'>
            <Grid xs={12} md={2} item>
            <Button onClick={()=>{ changeIndex(activeIndex - 1) }} variant='contained' color='default' fullWidth disabled={activeIndex <= 0} title={prevTooltip}>
                Previous
            </Button>
            </Grid>
            <Grid xs={12} md={8} item>
            <Stepper nonLinear activeStep={activeIndex} classes={classes} connector={false}>
                {items.map((item, idx) => {
                    return (
                    <Step key={idx}>
                        <StepButton icon={" "} classes={buttonClasses}>
                            <StepLabel classes={buttonClasses.label}
                                StepIconProps={{
                                    classes: iconClasses
                                }}
                                onClick={() => {
                                    changeIndex(idx);
                                }}
                            />
                        </StepButton>
                    </Step>
                    );
                })}
            </Stepper>
            </Grid>
            <Grid xs={12} md={2} item>
            <CustomButton onClick={()=>{ changeIndex(activeIndex + 1) }} disabled={ activeIndex >= itemCount- 1} title={nextTooltip}>
                Next
            </CustomButton>
            </Grid>
        </Grid>
    );
}

export default ObjectStepper;