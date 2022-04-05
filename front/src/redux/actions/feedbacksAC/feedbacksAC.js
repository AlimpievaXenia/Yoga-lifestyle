export const addFeedback = (value) => {
  return { type: 'ADD_FEEDBACK', payload: value }
}

export const createFeedback = (input, id) => async dispatch => {
  const feedbackData = await fetch('/feedback', {
    method: 'POST',
    body: JSON.stringify({ input, id }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const feedback = await feedbackData.json();
  dispatch(addFeedback(feedback))
};
