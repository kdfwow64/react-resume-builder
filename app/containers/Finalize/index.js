/**
 *
 * Finalize
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectFinalize from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Finalize() {
  useInjectReducer({ key: 'finalize', reducer });
  useInjectSaga({ key: 'finalize', saga });

  return (
    <div>
      <Helmet>
        <title>Finalize</title>
        <meta name="description" content="Description of Finalize" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Finalize.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  finalize: makeSelectFinalize(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Finalize);
