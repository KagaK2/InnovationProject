import {SAVE_NAME_AND_PIC, LOG_OUT, FETCH_WEEK, FETCH_DAY, FETCH_ATTENDING, FETCH_ATTENDING_BY_ARRAY} from '../actions/index.js';
import _ from 'lodash';
export default function reducer(state = {}, action){
  switch(action.type){
    case SAVE_NAME_AND_PIC:
      return {name: action.name, picurl: action.picurl, id: action.id, ...state};
    case LOG_OUT:
      delete state.name;
      delete state.picurl;
      return state;
    case FETCH_WEEK:
      return {week: action.payload, ...state};
    case FETCH_DAY:
      return {day: action.payload, ...state};
    case FETCH_ATTENDING:
      return {attending: action.payload, ...state};
    case FETCH_ATTENDING_BY_ARRAY:
      console.log("DITME" + action.payload);
      return {attendingArray: action.payload, ...state};
    default:
      return state;
  }
}
