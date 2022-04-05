import { initState } from '../../initState';
export const photosReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SHOW_PHOTOS':
      return { ...state, ...payload };
    default:
      return state;
  }

}
