import * as HelAPI from '../scripts/HelAPI.js';
export const SAVE_NAME_AND_PIC = 'SAVE_NAME_AND_PIC';
export const LOG_OUT = 'LOG_OUT';
export const FETCH_WEEK = 'FETCH_WEEK';
export const FETCH_DAY = 'FETCH_DAY';
export function saveNameAndPic (name, picurl, id){
  return {
    type: SAVE_NAME_AND_PIC,
    name: name,
    picurl: picurl,
    id: id,
  }
};
export function logOut() {
  return {
    type: LOG_OUT
  }
}
export function exportWeekEvent(data){
  return {
    type: FETCH_WEEK,
    payload: data
  }
}
export function fetchWeekEvent(){
  return async (dispatch) => {
    let day = new Date();
    let today = "" + day.getFullYear() + "-" + (day.getMonth()+1) + "-" + day.getDate();
    let endDate = "" + day.getFullYear() + "-" + (day.getMonth()+1) + "-" + (day.getDate()+7);
    let data = await HelAPI.getEventsByDate(today,endDate);
    dispatch(exportWeekEvent(data.data));
  }
}

export function exportTodayEvent(data){
  return {
    type: FETCH_DAY,
    payload: data
  }
}

export function fetchTodayEvent(){
  return async (dispatch) => {
    let data = await HelAPI.getTodaysEvents();
    dispatch(exportTodayEvent(data.data));
  }
}
