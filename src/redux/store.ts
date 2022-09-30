import { configureStore } from '@reduxjs/toolkit'
import addNewContactSlice from './addNewContactSlice'
import getContactsSlice from './getContactsSlice'
import searchContactSlice from './searchContactSlice'
import editContactSlice from './editContactSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    contacts: getContactsSlice,
    newContact: addNewContactSlice,
    visibleContacts: searchContactSlice,
    editContacts: editContactSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
