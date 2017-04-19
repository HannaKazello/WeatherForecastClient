export const SET_FILTER = 'SET_FILTER'
export const SET_CITY = 'SET_CITY'
export const SET_WEATHER = 'SET_WEATHER'
// export const SET_IMG = 'SET_IMG'
// export const SET_DEGREE = 'SET_DEGREE'
export const Filters = {
  SHOW_CURRENT: 'SHOW_CURRENT',
  SHOW_FORECAST: 'SHOW_FORECAST'
}

export function setFilter(filter) {
  return { type: SET_FILTER, filter }
}
export function setCity(city) {
  return { type: SET_CITY, city }
}

export function setWeather(weather){
  return {type: SET_WEATHER, weather}
}
