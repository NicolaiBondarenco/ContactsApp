import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ContactType = {
  id: number
  name: string
  numberPhone: string
  city: string
}

interface InitialStateContactsType {
  contacts: ContactType[]
  authorization: boolean
}

const initialState: InitialStateContactsType = {
  contacts: [],
  authorization: false,
}

export const getContactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts: (state, action: PayloadAction<ContactType[]>) => {
      state.contacts = action.payload
    },
    removeContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter((el) => el.id !== action.payload)
    },
    editedContacts: (state, action: PayloadAction<ContactType[]>) => {
      state.contacts = action.payload
    },
    succesfulAuthorization: (state, action: PayloadAction<boolean>) => {
      state.authorization = action.payload
    },
    addContactInList: (state, action: PayloadAction<ContactType>) => {
      state.contacts = [action.payload, ...state.contacts]
    },
  },
})

export const {
  addContacts,
  removeContact,
  editedContacts,
  succesfulAuthorization,
  addContactInList,
} = getContactsSlice.actions

export default getContactsSlice.reducer
