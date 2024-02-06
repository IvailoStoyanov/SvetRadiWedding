import { useContext } from 'react';
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

  const checkStatus = (guest: RecordType) => {
    if (guest.fields.status === 'Accepted') {
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
      {guestsGroupContext.map((guest, i) => {
        return <li key={i}>
          <div className={styles.name}>
            {guestsGroupContext.length > 1 &&
              <>
                <p>
                  {guest.fields.name}
                </p>
                <img
                  src={checkStatus(guest) ? tick : cross}
                  alt="Netlify Logo"
                  className={styles.icon} />
              </>
            }
          </div>
          <div className={styles.yesNoWrapper}>
            <div
              className={`${styles.answer} ${checkStatus(guest) && styles.active}`}
              onClick={() => handleStatusChange(guest.id, "Accepted")}>
              Да, ще пия с вас!
            </div>
            <div
              className={`${styles.answer} ${!checkStatus(guest) && styles.active}`}
              onClick={() => handleStatusChange(guest.id, "Declined")}>
              Не, ще пия в нас.
            </div>
          </div>
        </li>
      }
      )}
    </ul>
  )
};

export default Affirmation;
