import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InitialStateContactInfoType {
  newName: string
  newNumberPhone: string
  newCity: string
  classAddPerson: boolean
}

const initialState: InitialStateContactInfoType = {
  newName: '',
  newNumberPhone: '',
  newCity: '',
  classAddPerson: false,
}

export const addNewContactSlice = createSlice({
  name: 'newContact',
  initialState,
  reducers: {
    toggleClassAddPerson: (state, action: PayloadAction<boolean>) => {
      state.classAddPerson = action.payload
    },
    addNewName: (state, action: PayloadAction<string>) => {
      state.newName = action.payload
    },
    addNewNumberPhone: (state, action: PayloadAction<string>) => {
      state.newNumberPhone = action.payload
    },
    addNewCity: (state, action: PayloadAction<string>) => {
      state.newCity = action.payload
    },
  },
})

export const {
  toggleClassAddPerson,
  addNewName,
  addNewNumberPhone,
  addNewCity,
} = addNewContactSlice.actions

export default addNewContactSlice.reducer
