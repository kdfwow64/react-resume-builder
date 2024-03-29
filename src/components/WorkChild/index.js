/**
 *
 * WorkChild
 *
 */

import React, {memo, useState, useEffect, useRef} from 'react';
import {AddOutlined, DeleteOutlined } from '@material-ui/icons';
import {Typography, Paper, Grid, Box, Button, CircularProgress} from '@material-ui/core';
import {workChildStyles} from './style';
import CustomInput from '../Input';
import CustomCheckbox from '../Checkbox';
import CustomButton from '../Button';
import SearchList from '../SearchList/SearchList';
import RichEdit from '../RichEdit/RichEdit';
import ObjectStepper from '../ObjectStepper';
import ConfirmDialog from '../ConfirmDialog';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import { API_CALL_DELETE } from '../../constants';

function WorkChild(props) {
  const classes = workChildStyles();
  const dispatch = useDispatch();
  const query = useSelector(state => state);
  const {fetching, server_data, activeIndex, deleting} = query;

  const [city, setCity] = useState('');
  // MS:
  const [country, setCountry] = useState('');
  const [currentWork, setCurrentWork] = useState('');
  const [employer, setEmployer] = useState('');
  const [endDate, setEndDate] = useState('');
  const [id, setId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [stateProvince, setStateProvince] = useState('');
  const [workTitle, setWorkTitle] = useState('');
  const [flagInput, setFlagInput] = useState('');
  const [summary, setSummary] = useState({});

  const [cityLoading, setCityLoading] = useState('success');
  // MS:
  const [countryLoading, setCountryLoading] = useState('success');
  const [employerLoading, setEmployerLoading] = useState('success');
  const [endDateLoading, setEndDateLoading] = useState('success');
  const [startDateLoading, setStartDateLoading] = useState('success');
  const [stateProvinceLoading, setStateProvinceLoading] = useState('success');
  const [workTitleLoading, setWorkTitleLoading] = useState('success');

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
    if(index >= 0 && index < server_data.workHistory.length){
      setId(server_data.workHistory[index].id);
      setCity(server_data.workHistory[index].city);
      setCountry(server_data.workHistory[index].country)
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
      setSummary(server_data.workHistory[index].summary);
    }
  }, [server_data, index]);

  useEffect(() => {
    if (fetching) {
      switch (flagInput) {
        case 'workTitle':
          setWorkTitleLoading('loading');
          break;
        case 'employer':
          setEmployerLoading('loading');
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
        case 'workTitle':
          setWorkTitleLoading('success');
          break;
        case 'employer':
          setEmployerLoading('success');
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
  }, [fetching]);

  useEffect(() => {
    if(activeIndex.workHistory != 0)
    {
      let idx = 0;
      idx = server_data.workHistory.findIndex(x => x.id === activeIndex.workHistory.toString());
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
        payload: {field: 'workHistory', id: activeIndex.workHistory, json: data}
      });
    }, 500);
    updateTimeouts[name] = tout;
    setUpdateTimeouts(updateTimeouts);
  }

  const handleChange = e => {
    let jsonValue = {};
    let name = e.target.name;
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
    } else if (e.target.name === 'currentWork') {
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
      case 'workTitle':
      case 'employer':
      case 'city':
      case 'country':
      case 'stateProvince':
      case 'startDate':
      case 'endDate':
      case 'currentWork':
      case 'summary':
        deferApiCallUpdate(name, value);
        break;
      default:
        break;
    }
  };

  const handleSummaryChange = data => {
    deferApiCallUpdate('summary', data);
  };

  const handleSearchItemSelected = item => {
    richEdit.current.addParagraph(item.description);
  }

  const handleAddWork = () => {
    let index = Math.floor(Math.random() * 1000000);

    let obj = {
      id: index.toString(),
      workTitle: '',
      employer: '',
      city: '',
      stateProvince: '',
      startDate: '',
      endDate: '',
      currentWork: '',
      summary: [],
      country: ''
    };
    dispatch({
      type: 'API_CALL_ADD',
      payload: {field: 'workHistory', id: index, json: obj}
    });
  };

  const handleIndexChange = (newIndex) =>{
    props.history.push('/work-history/' + (newIndex + 1));
    setIndex(newIndex);
  }

  const handleDeleteWork = () => {
    setDeleteConfirmOpen(true);
  }

  const handleDeleteConfirmClose = action => {
    if(action === 'ok')
      deleteWork();
    setDeleteConfirmOpen(false);
  }

  const deleteWork = () => {
    setPendingDelete();
    dispatch({
      type: API_CALL_DELETE,
      payload: {
         field: 'workHistory',
         id: server_data.workHistory[index].id
      }
   });
  }

  return (
    <Box>
      <Grid container spacing={3} >
        <Grid item xs={12} md={12}>
          <h2>WORK HISTORY</h2>
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomInput
            label='Job Title'
            placeholder='e.g. Teacher'
            state={workTitleLoading}
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
            state={employerLoading}
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
            state={cityLoading}
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
            state={stateProvinceLoading}
            id='workHistory'
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
            id='workHistory'
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
            id='workHistory'
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
            id='workHistory'
            name='endDate'
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={12}>
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
          <RichEdit
            height={460}
            placeholder='Description'
            value={summary}
            id='workHistory'
            name='summary'
            onChange={handleChange}
            ref={richEdit}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SearchList
            height={460}
            onItemSelected={handleSearchItemSelected}
            resource='work-suggestions'
            initialQuery={workTitle}
            userId={id}/>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{marginTop: 32}}>
        <Grid xs={12} container spacing = {2}>
          <Grid xs={12} md={9} item >
            <Button variant='contained' color='default' onClick={handleAddWork}
                    disabled={fetching || deleting} fullWidth>
              <AddOutlined/>
              Add work
            </Button>
          </Grid>
          <Grid xs={12} md={3} item >
            <Button variant='contained' color='default' onClick={handleDeleteWork} title={'Delete Current Work'}
                    disabled={fetching || deleting || (server_data.workHistory.length === 0 && index === 0)} fullWidth>
                { deleting ?  <CircularProgress className={classes.buttonLoading} size={20}/> : <DeleteOutlined /> }
              Delete work
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{marginTop: 32}}>
          <ObjectStepper
            itemCount={server_data.workHistory.length}
            activeIndex={index}
            onIndexChange={handleIndexChange}
            nextTooltip='Next Work'
            prevTooltip='Previous Work'
            />
      </Grid>
      <ConfirmDialog open={ deleteConfirmOpen } onClose={ handleDeleteConfirmClose } />
    </Box>
  );
}

WorkChild.propTypes = {};

export default memo(WorkChild);
