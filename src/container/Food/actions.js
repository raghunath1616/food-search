import { createSignalAction, createActionCreator } from "shared/reduxUtils"

const BASE = "APP"

export const SEARCH_RESULTS = "SEARCH_RESULTS"

export const getFoodListAction = createSignalAction(BASE, "GET_FOOD_LIST")

export const searchResultsAction = createActionCreator(SEARCH_RESULTS)
