import './ContactsList.css'
import ContactItem from '../ContactItem/ContactItem'
import SearchContact from '../SearchContact/SearchContact'
import EditBlock from '../EditBlok/EditBlock'
import NewContactPopup from '../NewContactPopup/NewContactPopup'
import { useDispatch } from 'react-redux'
import { toggleClassAddPerson } from '../../redux/addNewContactSlice'

const ContactsList: React.FC = () => {
  const dispatch = useDispatch()

  return (
    <div className="contactsList">
      <h1 className="contactsList__title">Контакты</h1>
      <div className="contactsList__btn">
        <SearchContact />
        <button
          className="contactsList__addPerson"
          type="submit"
          onClick={() => dispatch(toggleClassAddPerson(true))}
        >
          <span className="material-symbols-outlined">group_add</span>
        </button>
      </div>
      <div className="contactsList__wrapper">
        <NewContactPopup />
        <ContactItem />
        <EditBlock />
      </div>
    </div>
  )
}
export default ContactsList
