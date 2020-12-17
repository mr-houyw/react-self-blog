import { combineReducers } from 'redux';
import { SHOW_BACKGROUND } from '../actions';

const initialState = {
  showBackground: SHOW_BACKGROUND,
  show: true,
}
function changeBackground(state = initialState, action) {
  // if (typeof state === 'undefined') {
  //   return initialState
  // }
  switch (action.type) {
    case SHOW_BACKGROUND:
      return { ...state, show: action.show }
    default:
      return state
  }
}

const blogApp = combineReducers({
  changeBackground,
})

export default blogApp