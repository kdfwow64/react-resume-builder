import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the education state domain
 */

const selectEducationDomain = state => state.education || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Education
 */

const makeSelectEducation = () =>
  createSelector(
    selectEducationDomain,
    substate => substate,
  );

export default makeSelectEducation;
export { selectEducationDomain };
