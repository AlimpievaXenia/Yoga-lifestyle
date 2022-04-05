export const setBooking = (value) => {
  return { type: 'ADD_BOOKING', payload: value }
}

export const addBooking = (date, trainingType, id) => async dispatch => {
  console.log(date,trainingType, id, '333')
  const data = await fetch('/book', {
    method: 'POST',
    body: JSON.stringify({ date, trainingType, id }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const booking = await data.json()
  dispatch(setBooking(booking))
}
