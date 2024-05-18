import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';

const initialState = {
  contacts: [
    {
      id: '1',
      title: 'hello',
    },
  ],
};

const reducer = (state = initialState) => {
  return state;
};

const enhancer = devToolsEnhancer(); //підсилювач (additional settings)

const store = createStore(reducer, enhancer);

export default store;
