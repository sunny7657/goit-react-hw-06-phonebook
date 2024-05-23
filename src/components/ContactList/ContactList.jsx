import { ContactItem } from 'components/ContactItem/ContactItem';
import { useDispatch } from 'react-redux';
import {
  deleteContact,
  updateContact,
} from '../../redux/contacts/contacts-slice';
import { useState } from 'react';
import UpdateModal from '../UpdateModal/UpdateModal';

export const ContactList = ({ contacts }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [itemId, setItemId] = useState('');
  const dispatch = useDispatch();

  const onClickDelete = id => {
    dispatch(deleteContact(id));
  };

  const onClickUpdate = id => {
    setItemId(id);
    setIsOpenModal(true);

    dispatch(updateContact(id));
  };

  const setModalClose = () => setIsOpenModal(false);

  return (
    <ul>
      {Boolean(contacts.length) &&
        contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onClickDelete={onClickDelete}
            onClickUpdate={onClickUpdate}
          />
        ))}
      {isOpenModal && (
        <UpdateModal setModalClose={setModalClose} itemId={itemId} />
      )}
    </ul>
  );
};
