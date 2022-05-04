import { configureStore } from '@reduxjs/toolkit';
import infoSliceReducer from './features/info/infoSlice';

export default configureStore({
  reducer :{
    info : infoSliceReducer,
  }
})
