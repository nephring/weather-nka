import axios from "axios";

export const getData = async (city, countryISO, type) => {
  try {
    const call = await axios.get(
      `http://api.openweathermap.org/data/2.5/${type}?q=${city},${countryISO}&units=metric&appid=${
        process.env.API_KEY
      }`
    );

    const data = await call.data;
    return data;
  } catch (e) {
    throw Error(e);
  }
};

export default getData;
