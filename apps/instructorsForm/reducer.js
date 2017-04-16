import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const instructor = (
  state = {},
  action
)=>{
  return {
    name: "mr instructor"
  }
}


export default combineReducers({
  instructor,
  form: formReducer
});