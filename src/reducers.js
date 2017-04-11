import { Filters, SET_FILTER, SET_CITY, SET_IMG, SET_DEGREE } from './actions'


const initialState = {
  visibilityFilter: Filters.SHOW_CURRENT,
  city: {},
  // img: {},
  // degree: {}
}

function App(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
    })
    //  case SET_IMG:
    //     return Object.assign({}, state, {
    //       img: action.img
    //   })
      case SET_CITY:
        return Object.assign({}, state, {
          city: action.city
        })
        // case SET_DEGREE:
        //   return Object.assign({}, state, {
        //     degree: action.degree
        //   })
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
