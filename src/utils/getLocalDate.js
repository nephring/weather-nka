export const getLocalDate = () => {
  const date = new Date()
  const day = date.toLocaleDateString(window.navigator.language, { weekday: 'long' })
  const hours = date.getHours()
  const minutes = date.getMinutes()

  return `${day}, ${hours}:${minutes}`
}

