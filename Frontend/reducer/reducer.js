import {SAVE_NAME_AND_PIC, LOG_OUT} from '../actions/index.js';
import _ from 'lodash';
export default function reducer(state = {}, action){
  switch(action.type){
    case SAVE_NAME_AND_PIC:
      return {name: action.name, picurl: action.picurl, ...state};
    case LOG_OUT:
      delete state.name;
      delete state.picurl;
      console.log(state);
      return state;
    default:
      return state;
  }
}
