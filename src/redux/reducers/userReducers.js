import * as types from "../types/userTypes";
import initialState from "./initialState";

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.API_CALL_SUCCESS:
      return {
        ...state,
        users: [...state.users, ...action.user],
        isLoading: 0,
      };
    case types.FETCH_FROM_CACHE:
      return { ...state, users: [...state.users, ...action.cache] };
    case types.API_CALL_BEGIN:
      return {
        ...state,
        isLoading: 1,
      };
    case types.API_CALL_FAILURE:
      return {
        ...state,
        isLoading: -1,
      };
    case types.API_CALL_SUCCESS_CACHE:
      return { ...state, cache: [...action.cache], isLoading: 0 };
    case types.SET_USER_SEARCH:
      return { ...state, search: action.data };
    case types.SET_NATIONSLITY:
      return { ...state, nat: action.nat };
    case types.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: [
          {
            key: 1,
            street: action.data.location.street.name,
            city: action.data.location.city,
            state: action.data.location.state,
            postcode: action.data.location.postcode,
            phone: action.data.phone,
            cell: action.data.cell,
          },
        ],
      };
    case types.UPDATE_PAGE:
      return {
        ...state,
        pagination: {
          currentPage: state.pagination.page + 1,
          perPage: state.pagination.perPage,
        },
      };
    default:
      return state;
  }
}
