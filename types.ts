export enum REDUCERS {
    SET_LOADING = "SET_LOADING",
  }
  
  export type ActionType = {
    payload: any;
    type: REDUCERS;
  };
  
  export type ScreenMobileType = "true" | "false" | "unactive";
  
  