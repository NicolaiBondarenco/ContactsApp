import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './ContactItem.css'
import axios from 'axios'
import {
  addContacts,
  ContactType,
  removeContact,
} from '../../redux/getContactsSlice'
import { removeContactSearch } from '../../redux/searchContactSlice'
import { changeClass, addContact } from '../../redux/editContactSlice'
import { RootState } from '../../redux/store'

const ContactItem: React.FC = () => {
  const { contacts } = useSelector((state: RootState) => state.contacts)
  const { contactsFindArr } = useSelector(
    (state: RootState) => state.visibleContacts,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    function getData() {
      return axios
        .get('http://localhost:3000/Contacts.json')
        .then((res) => dispatch(addContacts(res.data.contacts)))
        .catch((error) => console.log(error))
    }
    getData()
  }, [])

  const handleClickEdit = (obj: ContactType) => {
    dispatch(changeClass(true))
    dispatch(addContact(obj))
  }

  const removeItemFromList = (id: number) => {
    dispatch(removeContact(id))
    dispatch(removeContactSearch(id))
  }

  const renderArray = contactsFindArr.length > 0 ? contactsFindArr : contacts

  return (
    <div className="contactItem">
      {renderArray.map((el: ContactType) => {
        const { id, name, numberPhone, city } = el
        return (
          <div className="contactItem__inner" key={id}>
            <ul className="contactItem__list">
              <li className="contactItem__item"> Имя: {name} </li>
              <li className="contactItem__item">
                Номер телефона: {numberPhone}
              </li>
              <li className="contactItem__item"> Город: {city} </li>
            </ul>
            <div className="contactItem__buttons">
              <button
                className="contactItem__button"
                onClick={() => removeItemFromList(id)}
              >
                <span className="material-symbols-outlined">delete</span>
              </button>
              <button
                className="contactItem__button"
                onClick={() => handleClickEdit(el)}
              >
                <span className="material-symbols-outlined">edit_note</span>
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default ContactItem
