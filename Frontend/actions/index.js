export const SAVE_NAME_AND_PIC = 'SAVE_NAME_AND_PIC';
export const LOG_OUT = 'LOG_OUT';
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
};
