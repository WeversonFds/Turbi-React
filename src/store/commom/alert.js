import { createSlice } from '@reduxjs/toolkit'
export const alert = createSlice({
  name: 'alert',
  initialState: {
      alert:{'notification':false}
  },
  reducers: {
    setAlert: (state, action) => {
      state.alert = action.payload
    },
  },
})
export const { setAlert } = alert.actions

export default alert.reducer
