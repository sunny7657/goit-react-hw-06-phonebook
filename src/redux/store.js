import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({ reducer: rootReducer }); //configureStore automatically connects with redux dev tools - we don't need "const enhancer = devToolsEnhancer();" anymore

export default store;
