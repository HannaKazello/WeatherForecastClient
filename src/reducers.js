import {
    Filters,
    SET_FILTER,
    SET_CITY,
    SET_WEATHER
} from './actions'


const initialState = {
    visibilityFilter: Filters.SHOW_CURRENT,
    city: null,
    weather: {
        degree: null,
        img: null
    }
}

function App(state = initialState, action) {
    switch (action.type) {
        case SET_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        case SET_CITY:
            return Object.assign({}, state, {
                city: action.city
            })
        case SET_WEATHER:
            return Object.assign({}, state, {
                weather: {
                  degree: action.weather.degree,
                  img: action.weather.img
                }
            })
        default:
            return state
    }
}

function reducer(state = {}, action) {
    return {
        App: App(state, action)
    }
}
export default reducer;
