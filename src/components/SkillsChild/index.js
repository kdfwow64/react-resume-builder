/**
 *
 * SkillsChild
 *
 */

import React, { memo, useState, useEffect } from 'react';
import { Paper, Grid, Box, Button, CircularProgress } from '@material-ui/core';
import { AddOutlined } from '@material-ui/icons';
import { skillsChildStyles } from './style';
import CustomInput from '../Input';
import CustomRate from '../Rate';
import CustomCheckbox from '../Checkbox';
import ConfirmDialog from '../ConfirmDialog';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { API_CALL_DELETE } from '../../constants';

import { useSelector, useDispatch } from 'react-redux';

function SkillsChild() {
   const classes = skillsChildStyles();
   const dispatch = useDispatch();
   const query = useSelector(state => state);
   const { fetching, server_data, error, deleting } = query;
   const initialValue = [{ id: 0, name: '', rate: 0 }];
   const [stateSkills, setStateSkills] = useState(initialValue);
   let [skillsLoading, setskillsLoading] = useState([]);
   const [showSkills, setShowSkills] = useState(Boolean);
   const [flagInput, setFlagInput] = useState('');
   const [lastID, setLastID] = useState(0);
   const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
   const [pendingDeleteIndex, setPendingDeleteIndex] = useState(-1);
   const allowedState = [];

   const [updateTimeouts, setUpdateTimeouts] = useState({});

   let skills = [];
   let arrayValue = [];
   server_data.skills.map((item, index) => {
      allowedState.push({ id: item.id, name: item.name, rate: item.rate });
      skills.push('success');
      arrayValue.push('success');
      if (lastID < parseInt(item.id)) setLastID(parseInt(item.id));
   });
   // skillsLoading = [...skills];

   useEffect(() => {
      setStateSkills(allowedState);
      setskillsLoading(arrayValue);
      setShowSkills(server_data.profile.showSkills);
      // setskillsLoading(skillsLoading);
   }, [server_data]);

   let index = 0;

   useEffect(() => {
      if (fetching) {
         arrayValue[flagInput] = 'loading';
      } else if (deleting) {
         arrayValue[flagInput] = 'deleting';
      } else {
         arrayValue[flagInput] = 'success';
      }
      setskillsLoading(arrayValue);
   }, [fetching, deleting]);

   const deferApiCallUpdateCheckbox = (name, value) => {
      let tout = updateTimeouts[name];
      if (tout) clearTimeout(tout);
      tout = setTimeout(() => {
         setFlagInput(name);
         let data = {};
         data[name] = value;
         dispatch({
            type: 'API_CALL_UPDATE',
            payload: { field: 'profile', id: null, json: data }
         });
      }, 500);
      updateTimeouts[name] = tout;
      setUpdateTimeouts(updateTimeouts);
   };

   const deferApiCallUpdate = (id, name, value, index) => {
      let tout = updateTimeouts[name];
      if (tout) clearTimeout(tout);
      tout = setTimeout(() => {
         setFlagInput(index);
         let data = {};
         data[name] = value;
         dispatch({
            type: 'API_CALL_UPDATE',
            payload: { field: 'skills', id: `${id}`, json: data }
         });
      }, 500);
      updateTimeouts[name] = tout;
      setUpdateTimeouts(updateTimeouts);
   };

   const handleChange = e => {
      let value = e.target.value;
      let res = e.target.name.split('-');

      let name = res[0];
      index = parseInt(res[1]);
      let id = parseInt(res[2]);

      let jsonValue = {};
      if (e.target.name === 'showSkills') {
         value = e.target.value !== 'true';
         jsonValue = {
            type: 'API_CALL_CHANGE',
            field: e.target.id,
            name: e.target.name,
            value: value
         };
      } else {
         jsonValue = {
            type: 'API_CALL_CHANGE',
            field: 'skills',
            name: name,
            value: name === 'name' ? e.target.value : `${parseFloat(e.target.value) * 2}`,
            index: index
         };
      }
      dispatch(jsonValue);

      switch (name) {
         case 'name':
            deferApiCallUpdate(id, name, value, index);
            break;
         case 'rate':
            setFlagInput(index);
            dispatch({
               type: 'API_CALL_UPDATE',
               payload: { field: 'skills', id: `${id}`, json: { rate: `${parseFloat(value) * 2}` } }
            });
            break;
         case 'showSkills':
            deferApiCallUpdateCheckbox(name, value);
            break;
         default:
            break;
      }
   };

   const handleAddChange = e => {
      dispatch({
         type: 'API_CALL_ADD',
         payload: {
            field: 'skills',
            json: { name: '', id: Math.floor(Math.random() * 1000000), rate: `${parseFloat(0) * 2}` }
         }
      });
   };

   const handleDelete = (item, index) =>{
      setPendingDeleteIndex(index);
      setDeleteConfirmOpen(true);
   }

   const handleConfirmClose = action => {
      if(action === 'ok')
         deleteSkill();
      setDeleteConfirmOpen(false);
   }

   const deleteSkill = () => {
      setFlagInput(pendingDeleteIndex);
      const item = stateSkills[pendingDeleteIndex];
      dispatch({
         type: API_CALL_DELETE,
         payload: {
            field: 'skills',
            id: item.id
         }
      });
   }

   return (
      <Box>
         <Grid container spacing={3} className={classes.container}>
            {stateSkills.map((item, index) => {
               if (!item.id) return null;
               return (
                  <React.Fragment key={index}>
                     <Grid item xs={12} md={8}>
                        <CustomInput
                           label='Skill'
                           placeholder='e.g. Teacher'
                           value={item.name}
                           state={skillsLoading[index]}
                           disabled={skillsLoading[index] !== 'success'}
                           id='skills'
                           name={`name-${index}-${item.id}`}
                           onChange={handleChange}
                        />
                     </Grid>
                     <Grid item md={3}>
                        <Box display='flex' alignItems='center' height={55}>
                           <CustomRate
                              value={item.rate}
                              name={`rate-${index}-${item.id}`}
                              onChange={handleChange}
                              disabled={skillsLoading[index] !== 'success'}
                           />
                        </Box>
                     </Grid>
                     <Grid item md={1}>
                        <Box display='flex' alignItems='center' height={55}>
                           <Button variant="contained" disabled={skillsLoading[index] !== 'success'} onClick={()=>{handleDelete(item, index)}} title='Delete Skill' >
                              { skillsLoading[index] === 'deleting' ?  <CircularProgress className={classes.loading} size={25}/> : <DeleteIcon /> }
                           </Button>
                        </Box>
                     </Grid>
                  </React.Fragment>
               );
            })}{' '}
            <Grid item xs={12} md={6}>
               <CustomCheckbox
                  label="Don't show experience level"
                  checked={!showSkills}
                  value={showSkills}
                  id='profile'
                  name='showSkills'
                  handleChange={handleChange}
               />
            </Grid>
         </Grid>
         <Grid item xs={12} style={{ marginTop: 32 }}>
            <Grid container justify='space-between'>
               <Grid xs={12} md={12} item>
                  <Button variant='contained' color='default' fullWidth onClick={handleAddChange}>
                     <AddOutlined />
                     Add skill
                  </Button>
               </Grid>
            </Grid>
         </Grid>
         <ConfirmDialog open={ deleteConfirmOpen } onClose={ handleConfirmClose } />
      </Box>
   );
}

SkillsChild.propTypes = {};

export default memo(SkillsChild);
