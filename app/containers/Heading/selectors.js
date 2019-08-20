import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the heading state domain
 */

const selectHeadingDomain = state => state.heading || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Heading
 */

const makeSelectHeading = () =>
  createSelector(
    selectHeadingDomain,
    substate => substate,
  );

export default makeSelectHeading;
export { selectHeadingDomain };
