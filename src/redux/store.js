import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';

const sagaMidleware = createSagaMiddleware();

const middlewares = [sagaMidleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// sagaMidleware.run()

export const persistor = persistStore(store);