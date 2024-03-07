import { useContext, useState } from 'react';
import { GuestsContext } from '../../../../contexts/GuestsContext';
import styles from './index.module.scss';
import { RecordType } from '../../../../Types/types';
import tick from '../../../../assets/tick.svg';
import cross from '../../../../assets/cross.svg';


const Affirmation = () => {
  const context = useContext(GuestsContext);

  if (context === null) {
    return null;
  }

  const {
    guestsGroupContext,
    setGuestsGroupContext,
  } = context;


  const isActive = (guest: RecordType, initiator: string) => {
    const { status } = guest.fields;

    if ((status === 'Accepted' || status === 'Declined') && status === initiator) {
      return true
    }
    return false;
  };

  const handleStatusChange = (id: string, newStatus: string) => {
    const modifiedGuests = guestsGroupContext.map(guest => {
      if (guest.id === id) {
        const newFields = { ...guest.fields, status: newStatus }
        return { ...guest, fields: newFields }
      }
      return guest;
    })

    setGuestsGroupContext(modifiedGuests);
  }

  return (
    <ul className={styles.list}>
      {guestsGroupContext.map((guest, i) => <li key={i}>
        <div className={styles.name}>
          {guestsGroupContext.length > 1 && <p>{guest.fields.name}</p>}
        </div>
        <div className={styles.yesNoWrapper}>
          <div
            className={`${styles.answer} ${isActive(guest, "Accepted") && styles.active}`}
            onClick={() => handleStatusChange(guest.id, "Accepted")}>
            Да, идвам!
          </div>
          <div
            className={`${styles.answer} ${isActive(guest, "Declined") && styles.active}`}
            onClick={() => handleStatusChange(guest.id, "Declined")}>
            Не, няма да дойда.
          </div>
        </div>
      </li>
      )}
    </ul>
  )
};

export default Affirmation;
