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
import { TEMPLATE_KEY_CHANGE, TEMPLATE_THEME_CHANGE } from '../../constants';
import { Templates, TemplateThemes } from '../Templates';



function FinalizeChild(props) {
  const classes = finalizeChildStyles();
  const dispatch = useDispatch();
  const query = useSelector(state => state);
  const {server_data, activeTemplate} = query;

  const [activeThemeIndex, setActiveThemeIndex] = useState(0);
  const [activeTemplateIndex, setActiveTemplateIndex] = useState(0);

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
        type: TEMPLATE_KEY_CHANGE,
        payload: {templateKey: tmp.key}
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
        type: TEMPLATE_THEME_CHANGE,
        payload: {templateTheme: theme.key}
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

  return (
    <Paper className={classes.paper} elevation={0}>
      <Grid container spacing={7}>
        <Grid item md={12}>
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

            <Box
              display="flex"
              alignItems="center"
              minWidth={200}
              justifyContent="space-between"
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
            </Box>

            <Box>
              <Button>
                <Fullscreen className={classes.icons} /> Preview
              </Button>
            </Box>
          </Box>
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
