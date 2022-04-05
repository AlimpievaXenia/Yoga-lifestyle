export const setVideos = (value) => {
  return { type: 'GET_VIDEOS', payload: value }
}

export const getVideos = () => async dispatch => {
  const dataPractices = await fetch('/themes', {
    method: 'GET'
  })
  const videos = await dataPractices.json()
  console.log(videos)
  dispatch(setVideos(videos));
}
