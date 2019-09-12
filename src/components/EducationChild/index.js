/**
 *
 * EducationChild
 *
 */

import React, {useState, useEffect, useRef} from 'react';
import {Paper, Grid, Typography, Box, Button, CircularProgress} from '@material-ui/core';
import {AddOutlined, DeleteOutlined} from '@material-ui/icons';
import CustomInput from '../Input';
import CustomCheckbox from '../Checkbox';
import {educationChildStyles} from './style';
import CustomButton from '../Button';
import SearchList from '../SearchList/SearchList';
import RichEdit from '../RichEdit/RichEdit';
import ObjectStepper from '../ObjectStepper';
import ConfirmDialog from '../ConfirmDialog';

import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import { API_CALL_DELETE } from '../../constants';

function EducationChild(props) {
  const classes = educationChildStyles();
  const dispatch = useDispatch();
  const query = useSelector(state => state);
  const {fetching, server_data, activeIndex, deleting} = query;

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [currentSchool, setCurrentSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [endDate, setEndDate] = useState('');
  const [id, setId] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [stateProvince, setStateProvince] = useState('');
  const [flagInput, setFlagInput] = useState('');
  const [summary, setSummary] = useState({});

  const [cityLoading, setCityLoading] = useState('success');
  const [countryLoading, setCountryLoading] = useState('success');
  const [schoolNameLoading, setSchoolNameLoading] = useState('success');
  const [endDateLoading, setEndDateLoading] = useState('success');
  const [startDateLoading, setStartDateLoading] = useState('success');
  const [stateProvinceLoading, setStateProvinceLoading] = useState('success');
  const [degreeLoading, setDegreeLoading] = useState('success');

  const [updateTimeouts, setUpdateTimeouts] = useState({});
  const [index, setIndex] = useState(isNaN(props.index) ? 0 : parseInt(props.index) - 1);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [pendingDelete, setPendingDelete] = useState(false);

  const richEdit = useRef();

  useEffect(() => {
    if(pendingDelete){
      setIndex(Math.min(0, index - 1));
      setPendingDelete(false);
      return;
    }
    if(index >= 0 && index < server_data.education.length){
      setId(server_data.education[index].id);
      setCity(server_data.education[index].city);
      setCountry(server_data.education[index].country);
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
      setSummary(server_data.education[index].summary);
    }
  }, [server_data, index]);

  useEffect(() => {
    if (fetching) {
      switch (flagInput) {
        case 'schoolName':
          setSchoolNameLoading('loading');
          break;
        case 'degree':
          setDegreeLoading('loading');
          break;
        case 'city':
          setCityLoading('loading');
          break;
        case 'country':
          setCountryLoading('loading');
          break;
        case 'stateProvince':
          setStateProvinceLoading('loading');
          break;
        case 'startDate':
          setStartDateLoading('loading');
          break;
        case 'endDate':
          setEndDateLoading('loading');
          break;
        default:
          break;
      }
    } else {
      switch (flagInput) {
        case 'schoolName':
          setSchoolNameLoading('success');
          break;
        case 'degree':
          setDegreeLoading('success');
          break;
        case 'city':
          setCityLoading('success');
          break;
        case 'country':
          setCountryLoading('success');
          break;
        case 'stateProvince':
          setStateProvinceLoading('success');
          break;
        case 'startDate':
          setStartDateLoading('success');
          break;
        case 'endDate':
          setEndDateLoading('success');
          break;
        default:
          break;
      }
    }
  }, [fetching, flagInput]);

  useEffect(() => {
    if(activeIndex.education != 0)
    {
      let idx = 0;
      idx = server_data.education.findIndex(x => x.id === activeIndex.education.toString());
      if (idx === -1) {
        idx = 0;
      }
      handleIndexChange(idx);
    }
  }, [activeIndex]);

  const deferApiCallUpdate = (name, value) => {
    let tout = updateTimeouts[name];
    if (tout)
      clearTimeout(tout);
    tout = setTimeout(() => {
      setFlagInput(name);
      let data = {};
      data[name] = value;
      dispatch({
        type: 'API_CALL_UPDATE',
        payload: {field: 'education', id: id, json: data}
      });
    }, 500);
    updateTimeouts[name] = tout;
    setUpdateTimeouts(updateTimeouts);
  }


  const handleChange = e => {
    let jsonValue = {};
    let value = e.target.value;
    let name = e.target.name;
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
      case 'degree':
      case 'city':
      case 'country':
      case 'stateProvince':
      case 'startDate':
      case 'endDate':
      case 'currentSchool':
      case 'summary':
        deferApiCallUpdate(name, value);
        break;
      default:
        break;
    }
  };

  const handleSearchItemSelected = item => {
    richEdit.current.addParagraph(item.description);
  }

  const handleAddEducation = () => {
    let index = Math.floor(Math.random() * 1000000);

    let obj = {
      id: index.toString(),
      currentSchool: '',
      degree: '',
      city: '',
      stateProvince: '',
      startDate: '',
      endDate: '',
      schoolName: '',
      summary: []
    };
    dispatch({
      type: 'API_CALL_ADD',
      payload: {field: 'education', id: index, json: obj}
    });
  };

  const handleIndexChange = (newIndex) =>{
    props.history.push('/education/' + (newIndex + 1));
    setIndex(newIndex);
  }

  const handleDeleteEducation = () => {
    setDeleteConfirmOpen(true);
  }

  const handleDeleteConfirmClose = action => {
    if(action === 'ok')
      deleteEducation();
    setDeleteConfirmOpen(false);
  }

  const deleteEducation = () => {
    setPendingDelete();
    dispatch({
      type: API_CALL_DELETE,
      payload: {
         field: 'education',
         id: server_data.education[index].id
      }
   });
  }

  return (
    <Box>
      <Grid container spacing={3} >
        <Grid item xs={12} md={12}>
          <h2>EDUCATION</h2>
        </Grid>
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
        <Grid item xs={12} md={6}>
          <CustomInput
            label='Country'
            placeholder='e.g. USA'
            value={country}
            state={countryLoading}
            id='education'
            name='country'
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
        <Grid item xs={12} md={12}>
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
          <RichEdit
						height={460}
            placeholder='Description'
            value={summary}
            id='education'
            name='summary'
            onChange={handleChange}
            ref={richEdit}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SearchList
            height={460}
            onItemSelected={handleSearchItemSelected}
            resource='education-suggestions'
            initialQuery={schoolName}
            userId={id}/>
        </Grid>
      </Grid>
      <Grid item xs={12}  style={{marginTop: 32}}>
        <Grid xs={12} container spacing = {2}>
          <Grid xs={12} md={9} item>
            <Button variant='contained' color='default' onClick={handleAddEducation}
                    disabled={fetching || deleting} fullWidth>
              <AddOutlined/>
              Add Work
            </Button>
          </Grid>
          <Grid xs={12} md={3} item>
            <Button variant='contained' color='default' onClick={handleDeleteEducation} title={'Delete Current Education'}
                    disabled={fetching || deleting || (server_data.education.length == 0 && index == 0)} fullWidth>
                { deleting ?  <CircularProgress className={classes.buttonLoading} size={20} /> : <DeleteOutlined /> }
              Delete Education
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{marginTop: 32}}>
        <ObjectStepper
              itemCount={server_data.education.length}
              activeIndex={index}
              onIndexChange={handleIndexChange}
              nextTooltip='Next Education'
              prevTooltip='Previous Education'
              />
      </Grid>
      <ConfirmDialog open={ deleteConfirmOpen } onClose={ handleDeleteConfirmClose } />
    </Box>
  );
}

EducationChild.propTypes = {};

export default EducationChild;
