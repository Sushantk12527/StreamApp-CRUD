import _ from "lodash";
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      //this is to fetch an array of data
      //_.mapKeys() , will make the id as the key .
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_STREAM:
      //foe fetching single data
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      //for deleting a data
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
