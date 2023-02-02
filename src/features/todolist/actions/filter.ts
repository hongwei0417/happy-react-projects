import * as types from "./actionTypes";

// action creator
export function setFilter(filter: any) {
  return {
    type: types.SET_FILTER,
    filter,
  };
}
