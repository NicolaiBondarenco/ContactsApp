import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ContactType } from '../redux/getContactsSlice'

interface InitialStateEditContactsType {
  classBlock: boolean
  editContact: ContactType
}

const initialState: InitialStateEditContactsType = {
  classBlock: false,
  editContact: {
    id: 0,
    name: '',
    numberPhone: '',
    city: '',
  },
}

export const editContactSlice = createSlice({
  name: 'editContacts',
  initialState,
  reducers: {
    changeClass: (state, action: PayloadAction<boolean>) => {
      state.classBlock = action.payload
    },
    addContact: (state, action: PayloadAction<ContactType>) => {
      state.editContact = action.payload
    },
    handlerChangeName: (state, action: PayloadAction<string>) => {
      state.editContact.name = action.payload
    },
    handlerChangeNumberPhone: (state, action: PayloadAction<string>) => {
      state.editContact.numberPhone = action.payload
    },
    handlerChangeCity: (state, action: PayloadAction<string>) => {
      state.editContact.city = action.payload
    },
  },
})

export const {
  changeClass,
  addContact,
  handlerChangeName,
  handlerChangeNumberPhone,
  handlerChangeCity,
} = editContactSlice.actions

export default editContactSlice.reducer
