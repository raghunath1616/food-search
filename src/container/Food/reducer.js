import * as FoodActions from "./actions"

const initState = {
  isFetchingFood: false,
  foods: [],
  search: false,
  filters: ["name"],
}

export default function restaurantReducer(state = initState, action) {
  switch (action.type) {
    case FoodActions.getFoodListAction.REQUEST: {
      return {
        ...state,
        isFetchingFood: true,
      }
    }
    case FoodActions.getFoodListAction.SUCCESS: {
      return {
        ...state,
        isFetchingFood: false,
        foods: action.data,
      }
    }
    case FoodActions.getFoodListAction.FAILURE: {
      return {
        ...state,
        isFetchingFood: false,
      }
    }
    case FoodActions.SEARCH_RESULTS: {
      return {
        ...state,
        search: action.data,
      }
    }
    default:
      return state
  }
}
