export const setPhotos = (value) => {
  return { type: 'SHOW_PHOTOS', payload: value }
}

export const getPhotos = () => async dispatch => {
  const dataPhotos = await fetch('/photo', {
    method: 'GET'
  })
  const photos = await dataPhotos.json()
  console.log(photos, 'photos')
  dispatch(setPhotos(photos));
}
