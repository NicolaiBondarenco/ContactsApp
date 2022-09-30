import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ContactsFindArrType = {
  id: number
  name: string
  numberPhone: string
  city: string
}

interface InitialStateVisibleContactsType {
  contactsFindArr: ContactsFindArrType[]
  value: string
}

const initialState: InitialStateVisibleContactsType = {
  contactsFindArr: [],
  value: '',
}

export const searchContactSlice = createSlice({
  name: 'visibleContacts',
  initialState,
  reducers: {
    findContact: (state, action: PayloadAction<ContactsFindArrType[]>) => {
      state.contactsFindArr = action.payload
    },
    removeContactSearch: (state, action: PayloadAction<number>) => {
      state.contactsFindArr = state.contactsFindArr.filter(
        (el) => el.id !== action.payload,
      )
    },
    editedContactsSearch: (
      state,
      action: PayloadAction<ContactsFindArrType[]>,
    ) => {
      state.contactsFindArr = action.payload
    },
    addWord: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const {
  findContact,
  removeContactSearch,
  editedContactsSearch,
  addWord,
} = searchContactSlice.actions

export default searchContactSlice.reducer
