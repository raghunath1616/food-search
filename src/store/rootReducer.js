import { combineReducers } from "redux"
import { routerReducer as routing } from "react-router-redux"
import restaurantReducer from "container/Food/reducer"

const rootReducer = combineReducers({
  routing,
  app: restaurantReducer,
})

export default rootReducer
