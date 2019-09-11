import React, {useState, useEffect } from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
        minWidth: 300
    }
  })
);

function ConfirmDialog(props) {
    const classes = useStyles();
    const {title, message} = props;
    const [open, setOpen] = React.useState(false);    
    useEffect(()=>{
        setOpen(props.open);
    }, [props.open]);

    const handleClose = action => {
        if(props.onClose)
            props.onClose(action);
    };

    return (
          <Dialog
            open={open}
            keepMounted
            onClose={()=> {handleClose('cancel')}}

          >
            <DialogTitle>{title ? title : 'Confirm' }</DialogTitle>
            <DialogContent  classes = {classes}>
              <DialogContentText>
                {message ? message : 'Are you sure?'}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={()=> {handleClose('ok')}} color="primary">
                Yes
              </Button>
              <Button onClick={()=> {handleClose('cancel')}} color="primary">
                No
              </Button>
            </DialogActions>
          </Dialog>
      );
}

export default ConfirmDialog;