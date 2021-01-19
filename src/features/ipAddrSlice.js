import { createSlice } from '@reduxjs/toolkit';

export const ipAddrSlice = createSlice({
  name: 'ipAddr',
  initialState: {
    lookupIpBlocks : {
      loading : null,
      lookupIpResults : []
    }
  },
  reducers: {
    addIpLookup : (state, action) => {
     state.lookupIpBlocks.loading = action.payload.loading
     state.lookupIpBlocks.lookupIpResults = action.payload.ipResults || []
    },
  },
});

export const { addIpLookup } = ipAddrSlice.actions;
export const selectLookupIpBlocks = state => state.ipAddr.lookupIpBlocks;
export default ipAddrSlice.reducer;
