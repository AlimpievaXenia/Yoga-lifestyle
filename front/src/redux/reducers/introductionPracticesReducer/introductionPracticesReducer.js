import { initState } from '../../initState';
export const introductionPracticesReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_VIDEOS':
      return { ...state, ...payload };
    default:
      return state;
  }

}
