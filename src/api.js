const API_KEY = '5a6b5c00121f2304a0a79426028fa3e1'

const  getData = async (city, country) => {
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`)
  const response = await api_call.json()
  return response
}

export default getData