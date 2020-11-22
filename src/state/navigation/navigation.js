import { createSlice } from '@reduxjs/toolkit';

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    currentPage: 0,
    requestCount: 0,
    mobileOpen: false,
  },
  reducers: {
    setPage: (state, action) => {
      return { 
        ...state,
        currentPage: action.payload.currentPage,
        previousPage: action.payload.previousPage,
        data: action.payload.data,
      };
    },
    incrementLoadingRequestCount: (state, action) => {
      return {
        ...state,
        loadingRequestCount: action.payload.loadingRequestCount + 1,
      };
    },
    decrementLoadingRequestCount: (state, action) => {
      return {
        ...state,
        loadingRequestCount: action.payload.loadingRequestCount - 1,
      };
    },
    setMobileOpen: state => {
      return {
        ...state,
        mobileOpen: !state.mobileOpen
      };
    }
  }
});

export const { setPage, incrementLoadingRequestCount, decrementLoadingRequestCount, setMobileOpen } = navigationSlice.actions

export const selectNavigation = state => state.navigation;
export const selectCurrentPage = state => selectNavigation(state).currentPage;
export const selectIsLoading = state => selectNavigation(state).requestCount > 0;
export const selectMobileOpen = state => selectNavigation(state).mobileOpen;

export default navigationSlice.reducer;