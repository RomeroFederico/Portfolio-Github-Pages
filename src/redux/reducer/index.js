import {
  CHANGE_SECTION,
  CHANGE_THEME,
  STACK_CHANGED
} from '../actions/actions';

const THEME = {
  LIGHT: 'LIGHT',
  DARK: 'DARK'
}

const initialState = {
  theme: 'DARK',
  section: 'Home',
  color: '',
  stack: null
}

const rootReducer = function(state = initialState, { type, payload }) {
  switch(type) {
    case CHANGE_SECTION:
      return {
        ...state,
        section: payload
      }
    case CHANGE_THEME:
      return {
        ...state,
        theme: state.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
      }
    case STACK_CHANGED:
      return {
        ...state,
        stack: payload.stack,
        color: payload.color
      }
    default:
      return state;
  }
}

export default rootReducer;