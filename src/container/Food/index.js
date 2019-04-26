import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as FoodActions from "./actions"
import { getFavourites, getProcessedFoodResults } from "./selector"

const mapStateToProps = (state) => {
  const { app } = state
  return {
    ...app,
    favourites: getFavourites(state),
    filteredResults: getProcessedFoodResults(state),
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      getFoodLists: FoodActions.getFoodListAction.request,
      searchResults: FoodActions.searchResultsAction,
    },
    dispatch
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
