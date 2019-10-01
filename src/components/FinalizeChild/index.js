/**
 *
 * FinalizeChild
 *
 */

import React, { memo, useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  Paper,
  Button,
  IconButton
} from "@material-ui/core";
import { ChevronRight, ChevronLeft, Fullscreen } from "@material-ui/icons";
import { finalizeChildStyles } from "./style";
import CustomButton from "../Button";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import Loadable from 'react-loadable';
import Template from "./template";
import { ACTIVE_TEMPLATE_CHANGE } from '../../constants';
import { Templates, TemplateThemes } from '../Templates';
import { SketchPicker } from 'react-color'



function FinalizeChild(props) {
  const classes = finalizeChildStyles();
  const dispatch = useDispatch();
  const query = useSelector(state => state);
  const {activeTemplate} = query;

  const [activeThemeIndex, setActiveThemeIndex] = useState(0);
  const [activeTemplateIndex, setActiveTemplateIndex] = useState(0);
  const [customColorDisplay, setCustomColorDisplay] = useState(false);
  const [customColor, setCustomColor] = useState(activeTemplate.customColor);

   useEffect(() => {
    selectTemplateByKey(props.template);
  }, [props.template]);

  useEffect(() => {
    selectTemplateByKey(activeTemplate.key);
    selectTemplateTheme(activeTemplate.theme);
  }, [activeTemplate]);

  const selectTemplateByKey = key => {
    let tmp = Templates.find(t=>t.key === key);
    if(!tmp)
      tmp = Templates[0];
    selectTemplate(tmp);
  }

  const selectTemplateByIndex = index => {
    index = Math.max(0, Math.min(index, Templates.length - 1));
    selectTemplate(Templates[index]);
  }

  const selectTemplate = tmp => {
    if(tmp.key !== Templates[activeTemplateIndex].key){
      props.history.push('/finalize/' + tmp.key);
      dispatch({
        type: ACTIVE_TEMPLATE_CHANGE,
        payload: { ...activeTemplate, key: tmp.key }
      });
      setActiveTemplateIndex(Templates.indexOf(tmp))
    }
  }

  const selectTemplateTheme = key => {
    let theme = TemplateThemes.find(t=>t.key === key);
    if(!theme)
      theme = TemplateThemes[0];
    if(theme.key !== TemplateThemes[activeThemeIndex].key){
      dispatch({
        type: ACTIVE_TEMPLATE_CHANGE,
        payload: { ...activeTemplate, theme: theme.key}
      });
      setActiveThemeIndex(TemplateThemes.indexOf(theme))
    }
  }

  const handlePrevTemplate = () => {
    selectTemplateByIndex(activeTemplateIndex - 1);
  }

  const handleNextTemplate = () => {
    selectTemplateByIndex(activeTemplateIndex + 1);
  }

  const handleAccent = color => {
    selectTemplateTheme(color);
  };

  const handleCustomColorChange = color => {
    const newColor = 'rgba(' + color.rgb.r + ',' + color.rgb.g +',' + color.rgb.b + ',' + color.rgb.a +')'
    dispatch({
      type: ACTIVE_TEMPLATE_CHANGE,
      payload: { ...activeTemplate, customColor: newColor}
    });
    setCustomColor(newColor);
  }

  const toggleCustomColorPicker = () =>{
    setCustomColorDisplay(!customColorDisplay);
  }

  return (
    <Paper className={classes.paper} elevation={0}>
      <Grid container spacing={2}>
        <Grid item md={2}>
          <Box display="flex" justifyContent="space-between" flex={1}>
            <Box
              display="flex"
              alignItems="center"
              minWidth={200}
              justifyContent="space-between"
            >
              <IconButton>
                <ChevronLeft className={classes.icons} onClick={ handlePrevTemplate } disabled = {activeTemplateIndex <= 0} />
              </IconButton>
              <Typography>{ Templates[activeTemplateIndex].name }</Typography>
              <IconButton>
                <ChevronRight className={classes.icons} onClick={ handleNextTemplate } disabled = {activeTemplateIndex >= Templates.length - 1 } />
              </IconButton>
            </Box>
            </Box>
          </Grid>
          <Grid item md={8}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography>Accent Color:</Typography>
              {
                TemplateThemes.map((t, index)=>{
                  return <IconButton onClick={() => handleAccent(t.key)}>
                          <Box
                            className={ classes.selectedBox }
                            borderColor = { activeThemeIndex === index ? t.selectColor : 'transparent' }
                          >
                            <Box
                              width={20}
                              height={20}
                              borderRadius={15}
                              bgcolor={ t.mainColor }
                            />
                          </Box>
                        </IconButton>
                })
              }
              <Box>
                <Box className={ classes.customColorPicker } onClick={ toggleCustomColorPicker } >
                    <Box width='100%' height='100%' bgcolor = { customColor }  />
                </Box>
                { customColorDisplay ? 
                    <Box className={ classes.popover }>
                      <Box className={ classes.cover } onClick={ toggleCustomColorPicker } />
                      <SketchPicker color={ customColor } onChange={ handleCustomColorChange } />
                    </Box> : null }
              </Box>
            </Box>
          </Grid>
          <Grid item md={2}>
            <Box>
              <Button>
                <Fullscreen className={classes.icons} /> Preview
              </Button>
            </Box>
          </Grid>
          <Grid item md={12}>
            <Box boxShadow={2} borderRadius={4}>
              <Template />
            </Box>
          </Grid>
        </Grid>
    </Paper>
  );
}

FinalizeChild.propTypes = {};

export default memo(FinalizeChild);
