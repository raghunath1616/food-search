import { takeLatest, call, put } from "redux-saga/effects"
import * as FoodActions from "./actions"
import { getFoodListAPI } from "./api"

function* getFoods() {
  try {
    const res = yield call(getFoodListAPI)
    if (res.data) {
      yield put(FoodActions.getFoodListAction.success(res.data))
    }
  } catch (e) {
    yield put(FoodActions.getFoodListAction.failure(e))
  }
}

export default function* main() {
  yield takeLatest(FoodActions.getFoodListAction.REQUEST, getFoods)
}
