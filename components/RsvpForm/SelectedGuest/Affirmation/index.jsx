import React, { useContext, useState } from 'react';
import { GuestsContext } from '../../../../contexts/GuestsContext';
import styles from './index.module.scss';

const Affirmation = () => {
  const {
    guestsGroupContext,
    setGuestsGroupContext,
  } = useContext(GuestsContext);

  return (
    <ul className={styles.list}>
      {guestsGroupContext.map((guest, i) => {
        const checkStatus = () => {
          if (guest.fields.status === 'Accepted') {
            return true
          }
          return false;
        };

        const handleStatusChange = (id, newStatus) => {
          const modifiedGuests = guestsGroupContext.map(guest => {
            if (guest.id === id) {
              const newFields = { ...guest.fields, status: newStatus }
              return { ...guest, fields: newFields }
            }
            return guest;
          })

          setGuestsGroupContext(modifiedGuests);
        }

        return <li key={i}>
          <div className={styles.name}>
            {guestsGroupContext.length > 1 &&
              <>
              <p>
                {guest.fields.name}
              </p>
                <img
                  src={checkStatus() ? "/tick.svg" : "/cross.svg"}
                  alt="Netlify Logo"
                  className={styles.icon} />
              </>
            }
          </div>
          <div className={styles.yesNoWrapper}>
            <div
              className={`${styles.answer} ${checkStatus() && styles.active}`}
              onClick={() => handleStatusChange(guest.id, "Accepted")}>
              Да, ще пия с вас!
            </div>
            <div
              className={`${styles.answer} ${!checkStatus() && styles.active}`}
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
