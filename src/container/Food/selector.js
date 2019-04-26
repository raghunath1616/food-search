import { createSelector } from "reselect"

const getRecipes = state => state.app.foods.recipes
const getFilters = state => state.app.filters
const getSearchText = state => state.app.search

export const getProcessedFoodResults = createSelector(
  [getRecipes, getFilters, getSearchText],
  (recipes = [], filters, searchText) => {
    let isFilterApplied = false
    const filterResults = recipes.filter((recipe) => {
      const j = filters.filter((key) => {
        if (searchText) {
          isFilterApplied = true
        }
        if (!recipe[key].toLowerCase().includes(searchText ? searchText.toLowerCase() : false)) {
          return false
        }
        return true
      })
      return j.length || false
    })
    if (!isFilterApplied) {
      return [...recipes]
    }
    return [...filterResults]
  }
)

export const getFavourites = createSelector(
  [getRecipes],
  (recipes = []) => {
    const favouriteOrders = recipes.filter(recipe => recipe.isFavourite)
    return [...favouriteOrders]
  }
)
