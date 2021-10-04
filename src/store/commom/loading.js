import { createSlice } from '@reduxjs/toolkit'
export const loading = createSlice({
  name: 'loading',
  initialState: {
      loading:false,
      alert:{'notification':false}
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setAlert: (state, action) => {
      state.alert = action.payload
    },
  },
})
export const { setLoading, setAlert } = loading.actions

export default loading.reducer
