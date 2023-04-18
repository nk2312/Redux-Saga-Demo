
// import { takeEvery, put } from 'redux-saga/effects'
// import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant';

// function* getProducts() {
//     let data = yield fetch('http://localhost:3500/products');
//     data = yield data.json();
//     console.warn("action is called", data)
//     yield put({type: SET_PRODUCT_LIST, data})
// }

// function* searchProducts(data) {
//     let result = yield fetch(`http://localhost:3500/products?q=${data.query}`);
//     result = yield result.json();
//     console.warn("action is called", result)
//     yield put({type: SET_PRODUCT_LIST, data:result})
// }

// function* productSaga() {
//     yield takeEvery(PRODUCT_LIST, getProducts)
//     yield takeEvery(SEARCH_PRODUCT, searchProducts)

// }

// export default productSaga;
import {call,put,takeEvery} from 'redux-saga/effects';
import { fetchSuccess } from './reducer';

function* getCats(){
    const catsData=yield call(()=>fetch("https://api.thecatapi.com/v1/breeds"));
    const catJson=yield catsData.json();
    const formattedData=catJson.slice(0,10);
    yield put(fetchSuccess(formattedData))
}

export default function* catSaga(){
    yield takeEvery('cats/fetchData',getCats)
}

