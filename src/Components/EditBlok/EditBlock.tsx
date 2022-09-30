import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  changeClass,
  handlerChangeName,
  handlerChangeCity,
  handlerChangeNumberPhone,
} from '../../redux/editContactSlice'
import { editedContacts } from '../../redux/getContactsSlice'
import { editedContactsSearch, addWord } from '../../redux/searchContactSlice'
import { RootState } from '../../redux/store'
import { ContactType } from '../../redux/getContactsSlice'
import './EditBlock.css'

export const _RegExp = /^[\d\+][\d\(\)\ -]{4,14}\d$/

const EditBlock: React.FC = () => {
  const [messageError, setMessageError] = useState<boolean>(false)
  const { classBlock, editContact } = useSelector(
    (state: RootState) => state.editContacts,
  )
  const { contacts } = useSelector((state: RootState) => state.contacts)
  const dispatch = useDispatch()

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(handlerChangeName(e.target.value))
  }

  const changeNumberPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(handlerChangeNumberPhone(e.target.value))
  }

  const changeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(handlerChangeCity(e.target.value))
  }

  const handleClickEditForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    const valid = _RegExp.test(editContact.numberPhone)
    if (!valid) return setMessageError(true)
    const idx = contacts.findIndex(
      (el: ContactType) => el.id === editContact.id,
    )
    const oldArr: ContactType[] = contacts
    const newArr: ContactType[] = [
      ...oldArr.slice(0, idx),
      editContact,
      ...oldArr.slice(idx + 1),
    ]
    dispatch(editedContacts(newArr))
    dispatch(editedContactsSearch(newArr))
    dispatch(changeClass(false))
    dispatch(addWord(''))
    setMessageError(false)
  }

  return (
    <div className={classBlock ? 'editBlock' : 'editBlock__hide'}>
      <button
        className="editBlock__close"
        onClick={() => dispatch(changeClass(false))}
      >
        <span className="material-symbols-outlined">close</span>
      </button>
      <form className="editBlock__form" onSubmit={handleClickEditForm}>
        <input
          className="editBlock__inpName indentDown"
          type="text"
          placeholder="Имя"
          onChange={changeName}
          value={editContact.name || ''}
        />
        {messageError && (
          <p className="editBlock__messageError">
            При наборе номера допускаются только цифры
          </p>
        )}
        <input
          className="editBlock__inpPhone indentDown"
          type="tel"
          placeholder="Номер телефона"
          onChange={changeNumberPhone}
          value={editContact.numberPhone || ''}
        />
        <input
          className="editBlock__inpCity indentDown"
          type="text"
          placeholder="Город"
          onChange={changeCity}
          value={editContact.city || ''}
        />
        <button className="btn btn-success">Редактировать</button>
      </form>
    </div>
  )
}

export default EditBlock
