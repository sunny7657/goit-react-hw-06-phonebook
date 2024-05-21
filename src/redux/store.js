import { reducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer }); //configureStore automatically connects with redux dev tools - we don't need "const enhancer = devToolsEnhancer();" anymore

export default store;
