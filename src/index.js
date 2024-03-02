

import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import Counter from './Counter';
import {createStore} from "redux";

const initialState = {
    count:0
};
function reducer( state = initialState, action) {

    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };

        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            state.count = 0
            return {

                count: state.count
            };
        default:
            return state;
    }

}
const store = createStore(reducer);
const App =
    () => (
      <Provider store = {store}>
          <Counter/>
      </Provider>
    );
render(<App />, document.getElementById('root'));
