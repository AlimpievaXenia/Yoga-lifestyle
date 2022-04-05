import { combineReducers } from 'redux';
import { bookingReducer } from '../bookingReducer/bookingReducer';
import { bookingsReducer } from '../bookingsReducer/bookingsReducer';
import { introductionPracticesReducer } from '../introductionPracticesReducer/introductionPracticesReducer';
import { photosReducer } from '../photosReducer/photosReducer';
import { userReducer } from '../usersReducer/usersReducer';
import { feedbacksReducer } from '../feedbacksReducer/feedbacksReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  booking: bookingReducer,
  bookings: bookingsReducer,
  photos: photosReducer,
  videos: introductionPracticesReducer,
  feedback: feedbacksReducer,
})
