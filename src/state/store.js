import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import navigationReducer from './navigation/navigation';

export default configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});
