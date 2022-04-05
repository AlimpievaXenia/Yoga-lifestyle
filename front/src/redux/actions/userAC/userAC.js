export const regUser = (value) => {
  return { type: "REG_USER", payload: value };
};

export const createUser = (input) => async (dispatch) => {
  const regUserData = await fetch("/registration", {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const userCreated = await regUserData.json();
  dispatch(regUser(userCreated));
};

export const setLogUser = (value) => {
  return { type: "LOGIN", payload: value };
};

export const getLogUser = (input) => async (dispatch) => {
  const logUserData = await fetch("/login", {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const logUser = await logUserData.json();
  dispatch(setLogUser(logUser));
};

export const setUser = (value) => {
  return { type: "LOGIN", payload: value };
};

export const getUser = () => async (dispatch) => {
  const data = await fetch(`/user`, {
    method: "GET",
  });
  const user = await data.json();
  dispatch(setUser(user));
};

export const setLogoutUser = () => {
  console.log(123)
  return { type: "LOGOUT" };
};

export const getLogoutUser = () => async (dispatch) => {
  const res  = await fetch(`/logout`, {
    method: "GET",
  });

  if(res.ok) {
    dispatch(setLogoutUser())
  }
};

export const setUserPhoto = (value) => {
  return { type: "ADD_PHOTO", payload: value };
};

export const getUserPhoto = (result) => async (dispatch) => {
  dispatch(setUserPhoto(result));
};
