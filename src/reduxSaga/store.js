import { configureStore } from "@reduxjs/toolkit";
import catSlice from "./reducer";
import createSagaMiddleware from 'redux-saga';
import  catSaga  from "./saga";

const sagaMiddleware = createSagaMiddleware();


export const store = configureStore({
  reducer: { cat: catSlice.reducer },
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(catSaga);
