import { CHANGE_SECTION, CHANGE_THEME, STACK_CHANGED } from './actions';

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

export const changeStack = function(stack, color) {
  return {
    type: STACK_CHANGED,
    payload: {
      stack,
      color
    }
  }
}