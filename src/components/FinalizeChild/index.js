/**
 *
 * FinalizeChild
 *
 */

import React, { memo, useState } from "react";
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
import Index from "../Templates/Template-1";

function FinalizeChild() {
  const classes = finalizeChildStyles();
  const [selected, setSelected] = useState("black");
  const handleAccent = color => {
    setSelected(color);
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
                <ChevronLeft className={classes.icons} />
              </IconButton>
              <Typography>Template 1</Typography>
              <IconButton>
                <ChevronRight className={classes.icons} />
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
            <Index/>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

FinalizeChild.propTypes = {};

export default memo(FinalizeChild);
