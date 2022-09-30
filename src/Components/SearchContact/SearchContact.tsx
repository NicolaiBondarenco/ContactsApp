import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { findContact, addWord } from '../../redux/searchContactSlice'
import { RootState } from '../../redux/store'
import { ContactType } from '../../redux/getContactsSlice'

const SearchContact: React.FC = () => {
  const { contacts } = useSelector((state: RootState) => state.contacts)
  const { value } = useSelector((state: RootState) => state.visibleContacts)
  const dispatch = useDispatch()

  const searchItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(addWord(e.target.value))
    let newArr: ContactType[] = []
    newArr = contacts.filter((el: ContactType) =>
      el.name.toLowerCase().indexOf(e.target.value.toLocaleLowerCase()) > -1
        ? el
        : null,
    )
    if (e.target.value === '') newArr = []
    dispatch(findContact(newArr))
  }

  return (
    <div className="searchContact">
      <input
        placeholder="Search"
        value={value}
        type="text"
        onChange={searchItem}
      />
    </div>
  )
}
export default SearchContact
