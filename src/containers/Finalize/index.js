/**
 *
 * Finalize
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
import MenuAppBar from "../../components/Appbar";
import { Grid } from "@material-ui/core";
import { finalizeChildStyles } from "./styles";
import FinalizeChild from "../../components/FinalizeChild";

export function Finalize(props) {
  const classes = finalizeChildStyles();

  return (
      <FinalizeChild templateKey={props.match.params.templateKey} history={props.history} />
  );
}

Finalize.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

export default Finalize;
