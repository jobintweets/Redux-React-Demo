import { createStore } from "redux";
import reducers  from '../redux/reducers/index';
//store takes intial values like the reducers, middilewares( redux thunk , or redux sage and and inital state)
//  const store = createStore(
//    reducer, /* preloadedState, */
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//  );

const store = createStore(
    reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;