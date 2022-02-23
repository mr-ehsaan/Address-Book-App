import * as types from "../types/userTypes";
import getUsers from "../../Services/HomeService";

export function loadUsersSuccess(user) {
  return { type: types.API_CALL_SUCCESS, user };
}

export function loadUsersFromCache(cache) {
  return { type: types.FETCH_FROM_CACHE, cache };
}

export function updatePaginition() {
  return { type: types.UPDATE_PAGE };
}

export function setUserSearch(data) {
  return function (dispatch) {
    return dispatch({ type: types.SET_USER_SEARCH, data });
  };
}

export function setNationality(nat) {
  return { type: types.SET_NATIONSLITY, nat };
}

export function setUserDetails(data) {
  return function (dispatch) {
    return dispatch({ type: types.SET_USER_DETAILS, data });
  };
}

export function apiCallBegin() {
  return { type: types.API_CALL_BEGIN };
}

export function apiCallFailure() {
  return { type: types.API_CALL_FAILURE };
}

export function loadCacheSuccess(cache) {
  return { type: types.API_CALL_SUCCESS_CACHE, cache };
}

export function loadCache(page, perPage, nat) {
  return function (dispatch) {
    console.log("Isloading ... ");
    return getUsers(`?page=${page}&results=${perPage}&nat=${nat}`)
      .then((res) => {
        let cache = res.results;
        console.log("User Cache data > ", cache);

        dispatch(loadCacheSuccess(cache));
      })
      .catch((error) => {
        console.log(error);
        dispatch(apiCallFailure());
      });
  };
}

export function loadUsers(page, perPage, nat) {
  return function (dispatch, getState) {
    const checkUsers = getState().userData.users;
    const cacheData = getState().userData.cache;
    if (checkUsers.length > 1) {
      dispatch(loadUsersFromCache(cacheData));
      if (page < 20) {
        console.log("Page No. ", page, " PerPage > ", perPage, " Nat > ", nat);
        dispatch(apiCallBegin());
        dispatch(loadCache(page + 1, perPage, nat));
      }
      dispatch(updatePaginition());
    } else {
      dispatch(apiCallBegin());
      return getUsers(`?page=${page}&results=${perPage}&nat=${nat}`)
        .then((res) => {
          let user = res.results;
          dispatch(loadUsersSuccess(user));
          dispatch(loadCache(page + 1, perPage, nat));
        })
        .catch((error) => {
          dispatch(apiCallFailure());
          console.log("Error > ", error);
        });
    }
  };
}
