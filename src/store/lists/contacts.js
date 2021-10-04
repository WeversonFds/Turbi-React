import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'contacts',
  initialState: {
    list: [{'name':'weve', 'email':'teste@live.com', 'id':1}],
    fulllist: [],
  },
  reducers: {
    addAllData: (state, action) => {
      state.list.push(...action.payload)
      state.fulllist = state.list
    },
    addData: (state, action) => {
      if(state.list.length == 0) { action.payload.id = 1 }
      (!action.payload.id) ? action.payload.id = (state.list.at(-1).id) + 1 :  action.payload.id = action.payload.id
      state.list.push(action.payload)
      state.fulllist = state.list
    },
    removeData: (state, action) =>{
      let temp = state.list.filter(element =>{
        return element.id != action.payload
      })
      state.list = temp
      state.fulllist = state.list
    },
    listOrder:(state,action) =>{
      let direction = parseInt(action.payload)
      let temp = state.list.sort((a,b) => {
        return (a.name > b.name) ? direction : (direction * -1)
      })
      state.list = temp
    },
    listQuery:(state,action) =>{
      if(action.payload){
        let temp = state.fulllist.filter((element) => {
          return (element.name.toLowerCase().indexOf(action.payload.toLowerCase()) >= 0)
        })
        state.list = temp
      }
      else{
        state.list = state.fulllist
      }
    }
  },
})
export const { addAllData, addData, removeData, listOrder, listQuery } = counterSlice.actions

export default counterSlice.reducer
