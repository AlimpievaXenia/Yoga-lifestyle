import { initState } from '../../initState';
export const bookingReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_BOOKING':
      return { ...state, ...payload }
    default:
      return state;
  }

}
