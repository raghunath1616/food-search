import { fork } from "redux-saga/effects"
import restaurantSaga from "container/Food/saga"

export default function* main() {
  yield fork(restaurantSaga)
}
