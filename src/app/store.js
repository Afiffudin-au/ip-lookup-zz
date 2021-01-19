import { configureStore } from '@reduxjs/toolkit';
import ipAddrSliceReducer from '../features/ipAddrSlice';

export default configureStore({
  reducer: {
    ipAddr: ipAddrSliceReducer,
  },
});
