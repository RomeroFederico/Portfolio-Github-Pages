import { CHANGE_SECTION, CHANGE_THEME } from './actions';

export const changeSection = function(section) {
  return {
    type: CHANGE_SECTION,
    payload: section
  }
}

export const changeTheme = function() {
  return {
    type: CHANGE_THEME
  }
}