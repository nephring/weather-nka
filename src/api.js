export const getData = async (city, countryISO, type) => {
  const api_call = await fetch(
    `http://api.openweathermap.org/data/2.5/${type}?q=${city},${countryISO}&units=metric&appid=${
      process.env.REACT_APP_API_KEY
    }`
  )
  const response = await api_call.json()
  return response
}

export default getData
