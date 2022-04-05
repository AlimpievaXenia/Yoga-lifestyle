import { initState } from '../../initState';
export const bookingsReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SHOW_BOOKINGS':
      return { ...state, ...payload };
    default:
      return state;
  }

}
