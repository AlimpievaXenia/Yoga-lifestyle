import { initState } from "../../initState";

export const userReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "REG_USER":
      return { ...state, ...payload };
    case "LOGIN":
      return { ...state, ...payload };
      case "ADD_PHOTO":
      return { ...state, ...payload };
    case "LOGOUT":
      return {
        ...state,
        firstname: null,
        lastname: null,
        email: null,
        password: null,
        phone: null,
        role: 0,
      };
    default:
      return state;
  }
};
