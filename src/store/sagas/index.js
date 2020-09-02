import actions from "../actions";
import { GET_DATA } from "../actions/types";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { dataRequest } from "../../api";

const { getDataSuccess, getDataFailure } = actions;

function* getDataRequest(action) {
  try {
    const terms = yield call(dataRequest, "terms");
    const brandsTerms = yield call(dataRequest, "brands_terms");
    const styles = yield call(dataRequest, "styles");

    yield put(
      getDataSuccess({
        terms: terms.data.data,
        brandsTerms: brandsTerms.data.data,
        styles: styles.data.data,
      })
    );
  } catch (err) {
    put(getDataFailure(err));
  }
}

export function* rootSaga() {
  yield all([takeEvery(GET_DATA, getDataRequest)]);
}
