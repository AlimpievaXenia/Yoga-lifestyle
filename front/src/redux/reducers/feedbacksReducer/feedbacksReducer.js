import { initState } from "../../initState";

export const feedbacksReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_FEEDBACK':
      return { ...state, ...payload };
    default:
      return state;
  }
}
