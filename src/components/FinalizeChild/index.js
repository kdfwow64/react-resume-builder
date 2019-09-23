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
import { TEMPLATE_KEY_CHANGE } from '../../constants';

const Templates = [
  {key: '1', name: 'Template-1', path: 'Template-1'},
  {key: '2', name: 'Template-2', path: 'Template-2'}
]

function FinalizeChild(props) {
  const classes = finalizeChildStyles();
  const dispatch = useDispatch();
  const query = useSelector(state => state);
  const {server_data, templateKey} = query;

  const [selected, setSelected] = useState("black");

  const [activeTemplateIndex, setActiveTemplateIndex] = useState(0);

  const handleAccent = color => {
    setSelected(color);
  };

  useEffect(() => {
    selectTemplateByKey(props.template);
  }, [props.template]);

  useEffect(() => {
    selectTemplateByKey(templateKey);
  }, [templateKey]);

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
      props.history.push('/finalize?template=' + tmp.key);
      dispatch({
        type: TEMPLATE_KEY_CHANGE,
        payload: {templateKey: tmp.key}
      });
      setActiveTemplateIndex(Templates.indexOf(tmp))
    }
  }

  const handlePrevTemplate = () => {
    selectTemplateByIndex(activeTemplateIndex - 1);
  }

  const handleNextTemplate = () => {
    selectTemplateByIndex(activeTemplateIndex + 1);
  }

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
              <IconButton onClick={() => handleAccent("black")}>
                <Box
                  className={
                    selected === "black"
                      ? classes.selectedBlack
                      : classes.selectedTransparent
                  }
                >
                  <Box
                    width={20}
                    height={20}
                    borderRadius={15}
                    bgcolor="black"
                  />
                </Box>
              </IconButton>
              <IconButton onClick={() => handleAccent("teal")}>
                <Box
                  className={
                    selected === "teal"
                      ? classes.selectedTeal
                      : classes.selectedTransparent
                  }
                >
                  <Box
                    width={20}
                    height={20}
                    borderRadius={15}
                    bgcolor="teal"
                  />
                </Box>
              </IconButton>
              <IconButton onClick={() => handleAccent("blue")}>
                <Box
                  className={
                    selected === "blue"
                      ? classes.selectedBlue
                      : classes.selectedTransparent
                  }
                >
                  <Box
                    width={20}
                    height={20}
                    borderRadius={15}
                    bgcolor="blue"
                  />
                </Box>
              </IconButton>
              <IconButton onClick={() => handleAccent("yellow")}>
                <Box
                  className={
                    selected === "yellow"
                      ? classes.selectedYellow
                      : classes.selectedTransparent
                  }
                >
                  <Box
                    width={20}
                    height={20}
                    borderRadius={15}
                    bgcolor="#f8c000"
                  />
                </Box>
              </IconButton>
            </Box>

            <Box>
              <Button>
                <Fullscreen className={classes.icons} /> Preview
              </Button>
            </Box>
          </Box>
          <Box boxShadow={2} borderRadius={4}>
            <Template path={Templates[activeTemplateIndex].path}/>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

FinalizeChild.propTypes = {};

export default memo(FinalizeChild);
