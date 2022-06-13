import {
  CHANGE_SECTION,
  CHANGE_THEME
} from '../actions/actions';

const THEME = {
  LIGHT: 'LIGHT',
  DARK: 'DARK'
}

const initialState = {
  theme: 'DARK',
  section: 'Home'
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
    default:
      return state;
  }
}

export default rootReducer;