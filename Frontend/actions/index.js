import * as HelAPI from '../scripts/HelAPI.js';
export const SAVE_NAME_AND_PIC = 'SAVE_NAME_AND_PIC';
export const LOG_OUT = 'LOG_OUT';
export const FETCH_WEEK = 'FETCH_WEEK';
export function saveNameAndPic (name, picurl){
  return {
    type: SAVE_NAME_AND_PIC,
    name: name,
    picurl: picurl,
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
