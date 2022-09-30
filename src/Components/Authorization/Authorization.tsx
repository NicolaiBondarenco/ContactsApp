import React, { useEffect } from 'react'
import './Authorization.css'
import { useSelector, useDispatch } from 'react-redux'
import { succesfulAuthorization } from '../../redux/getContactsSlice'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { RootState } from '../../redux/store'

type FormInputs = {
  firstName: string
  nextName: string
}

const Authorization: React.FC = () => {
  const { authorization } = useSelector((state: RootState) => state.contacts)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<FormInputs>({
    mode: 'onBlur',
  })

  const addForm = () => {
    dispatch(succesfulAuthorization(true))
    reset()
  }

  useEffect(() => {
    if (authorization) navigate('/contactsList')
  }, [authorization])

  return (
    <>
      <h1 className="form__title">Авторизация</h1>
      <form
        className="form container-sm w-50 p-3"
        onSubmit={handleSubmit(addForm)}
      >
        <input
          className="form__email"
          {...register('firstName', { required: 'Обязательно заполните поле' })}
          type="email"
          placeholder="Email"
        />
        <div className="form__important">
          {errors?.firstName && (
            <p className="form__important-text">
              {errors?.firstName?.message || 'Ошибка'}
            </p>
          )}
        </div>
        <input
          className="form__pass"
          {...register('nextName', {
            required: 'Обязательно заполните поле',
            minLength: {
              value: 8,
              message: 'Не менее 8 символов',
            },
          })}
          type="password"
          placeholder="Password"
        />
        <div className="form__important">
          {errors?.nextName && (
            <p className="form__important-text">
              {errors?.nextName?.message || 'Ошибка'}
            </p>
          )}
        </div>
        <button className="form__button btn btn-primary">
          <span className="material-symbols-outlined">key</span> Войти
        </button>
      </form>
    </>
  )
}
export default Authorization
