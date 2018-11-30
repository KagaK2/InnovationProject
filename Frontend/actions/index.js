import * as HelAPI from '../scripts/HelAPI.js';
import * as FBcon from '../scripts/FBcon.js';
export const SAVE_NAME_AND_PIC = 'SAVE_NAME_AND_PIC';
export const LOG_OUT = 'LOG_OUT';
export const FETCH_WEEK = 'FETCH_WEEK';
export const FETCH_DAY = 'FETCH_DAY';
export const FETCH_ATTENDING = 'FETCH_ATTENDING';
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
    let day1 = new Date(day.getFullYear(),day.getMonth(),day.getDate()+7);
    let today = day.getFullYear() + "-" + (day.getMonth()+1) + "-" + day.getDate();
    let endDate = day1.getFullYear() + "-" + (day1.getMonth()+1) + "-" + day1.getDate();
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
export function exportAttending(data){
  return {
    type: FETCH_ATTENDING,
    payload: data
  }
}

export function fetchAttending(user){
  return async (dispatch) => {
    let data = await FBcon.getUserAttending(user);
    let eventArray = await FBcon.getEventsByArray(data);
    dispatch(exportAttending(eventArray));
  }
}
