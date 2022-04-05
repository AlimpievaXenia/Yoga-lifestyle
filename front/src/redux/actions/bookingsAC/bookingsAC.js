export const setBookings = (value) => {
  return { type: 'SHOW_BOOKINGS', payload: value }
}

export const showBookings = (user) => async dispatch => {
  const data = await fetch(`/book/user/${user.id}`, {
    method: 'GET',
  })
  const bookings = await data.json()
  dispatch(setBookings(bookings))
}
