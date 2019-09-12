/**
 *
 * SummaryChild
 *
 */

import React, {memo, useState, useEffect, useRef} from 'react';
import {Grid, Box, Typography, Paper, Button} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux';
import {AddOutlined} from '@material-ui/icons';
import CustomInput from '../Input';
import {summaryChildStyles} from './style';
import CustomButton from '../Button';
import {Link} from 'react-router-dom';
import SearchList from '../SearchList/SearchList';
import RichEdit, {} from '../RichEdit/RichEdit';


function SummaryChild() {
  const classes = summaryChildStyles();
  const dispatch = useDispatch();
  const richEdit = useRef();
  const [id, setId] = useState('');
  const [summary, setSummary] = useState({});
  const query = useSelector(state => state);
  const {fetching, server_data, error} = query;
  const [updateTimeouts, setUpdateTimeouts] = useState({});
  const [flagInput, setFlagInput] = useState('');

  let index = 0;

  useEffect(() => {
    setId(server_data.education[index].id);
    //setSummary(server_data.summary[index]);
  }, [server_data]);

  const handleSearchItemSelected = item => {
    richEdit.current.addParagraph(item.description);
  }

  const handleChange = e => {
    let jsonValue = {};
    let value = e.target.value;
    let name = e.target.name;
    // if (e.target.type === 'date') {
    // 	let res = e.target.value.split('-');

    // 	value = `${res[1]}/${res[2]}/${res[0]}`;
    // 	jsonValue = {
    // 		type: 'API_CALL_CHANGE',
    // 		field: e.target.id,
    // 		name: e.target.name,
    // 		value: value,
    // 		index: index
    // 	};
    // } else {
    // 	jsonValue = {
    // 		type: 'API_CALL_CHANGE',
    // 		field: e.target.id,
    // 		name: e.target.name,
    // 		value: value,
    // 		index: index
    // 	};
    // }

    //dispatch(jsonValue);

    switch (e.target.name) {
      case 'summary':
        deferApiCallUpdate(name, value);
        break;
      default:
        break;
    }
  };

  const deferApiCallUpdate = (name, value) => {
    let tout = updateTimeouts[name];
    if (tout)
      clearTimeout(tout);
    tout = setTimeout(() => {
      setFlagInput(name);
      dispatch({
        type: 'API_CALL_UPDATE',
        payload: {field: 'summary', id: id, json: value}
      });
    }, 500);
    updateTimeouts[name] = tout;
    setUpdateTimeouts(updateTimeouts);
  }

  return (
    <Box>
      <Grid container spacing={3} >
        <Grid item xs={12} md={12}>
          <h2>SUMMARY</h2>
        </Grid>
        <Grid item xs={12} md={6}>
          <RichEdit
            height={460}
            placeholder='Summary Details'
            value={summary}
            id='summary'
            name='summary'
            onChange={handleChange}
            ref={richEdit}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <SearchList
            height={460}
            onItemSelected={handleSearchItemSelected}
            resource='summary-suggestions'
            userId={id}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

SummaryChild.propTypes = {};

export default memo(SummaryChild);
