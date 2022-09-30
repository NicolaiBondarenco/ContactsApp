import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  toggleClassAddPerson,
  addNewCity,
  addNewName,
  addNewNumberPhone,
} from '../../redux/addNewContactSlice'
import { addContactInList } from '../../redux/getContactsSlice'
import { RootState } from '../../redux/store'
import { _RegExp } from '../EditBlok/EditBlock'

let _idContact = 5

const NewContactPopup: React.FC = () => {
  const [messageError, setMessageError] = useState<boolean>(false)
  const { classAddPerson, newName, newNumberPhone, newCity } = useSelector(
    (state: RootState) => state.newContact,
  )
  const dispatch = useDispatch()
  const addElementInList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const valid = _RegExp.test(newNumberPhone)
    if (!valid) return setMessageError(true)

    const newObj = {
      id: _idContact++,
      name: newName,
      numberPhone: newNumberPhone,
      city: newCity,
    }
    dispatch(addContactInList(newObj))
    dispatch(toggleClassAddPerson(false))
    dispatch(addNewName(''))
    dispatch(addNewNumberPhone(''))
    dispatch(addNewCity(''))
    setMessageError(false)
  }

  return (
    <div className={classAddPerson ? 'editBlock' : 'editBlock__hide'}>
      <button
        className="editBlock__close"
        onClick={() => dispatch(toggleClassAddPerson(false))}
      >
        <span className="material-symbols-outlined">close</span>
      </button>
      <form className="editBlock__form" onSubmit={addElementInList}>
        <input
          className="editBlock__inpName indentDown"
          type="text"
          placeholder="Имя"
          onChange={(e) => dispatch(addNewName(e.target.value))}
          value={newName}
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
          onChange={(e) => dispatch(addNewNumberPhone(e.target.value))}
          value={newNumberPhone}
        />
        <input
          className="editBlock__inpCity indentDown"
          type="text"
          placeholder="Город"
          onChange={(e) => dispatch(addNewCity(e.target.value))}
          value={newCity}
        />
        <button className="btn btn-success">Добавить</button>
      </form>
    </div>
  )
}
export default NewContactPopup
