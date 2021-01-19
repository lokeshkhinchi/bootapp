import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import serviceReducer from './service/serviceReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  service: serviceReducer
})

export default rootReducer;
