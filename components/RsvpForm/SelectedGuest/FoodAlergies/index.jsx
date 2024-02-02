import React, { useContext, useState, useCallback } from 'react';
import { GuestsContext } from '../../../../contexts/GuestsContext';
import styles from './index.module.scss';
import { debounce } from '../../../../utils/debounce';

const FoodAlergies = () => {
  const {
    guestsGroupContext,
    setGuestsGroupContext
  } = useContext(GuestsContext);

  const guestGroupAlergies = guestsGroupContext[0].fields.alergies;
  const hasPreselectedAlergies = () => {
    if (!!guestGroupAlergies) {
      return true;
    }
    return false;
  }
  const [hasAlergies, setHasAlergies] = useState(hasPreselectedAlergies);

  const hasGuestAccepted = () => {
    const accepted = (guest) => guest.fields.status === "Accepted";
    return guestsGroupContext.some(accepted);
  }

  const hasGuestAlergies = () => {
    return guestsGroupContext[0].fields.alergies;
  }

  const handleAlergiesChange = (e) => {
    const modifiedGuests = guestsGroupContext.map(guest => {
      const newFields = { ...guest.fields, alergies: e.target.value }
      return { ...guest, fields: newFields };
    })
    setGuestsGroupContext(modifiedGuests);
  }

  if (!hasGuestAccepted()) {
    return null;
  }

  return (
    <div>
      <p className={styles.alergiesTitle}>Имате ли хранителни алергии или други диетични рестрикции?</p>
      <div className={styles.answersWrapper}>
        <div className={styles.alergiesAnswer}>
          <input
            type="radio"
            id="alergiesYes"
            name="alergies"
            value="alergiesYes"
            defaultChecked={hasAlergies}
            onChange={() => setHasAlergies(true)}
          />
          <label htmlFor="alergiesYes">Да</label>
        </div>
        <div className={styles.alergiesAnswer}>
          <input
            type="radio"
            id="alergiesNo"
            name="alergies"
            value="alergiesNo"
            defaultChecked={!hasAlergies}
            onChange={() => setHasAlergies(false)}
          />
          <label htmlFor="alergiesNo">Не</label>
        </div>
      </div>
      {hasAlergies &&
        <div className={styles.alergiesTextFieldWrapper}>
          <label htmlFor="story">Моля, попълнете ги тук:</label>
          <textarea name="story" required onChange={debounce(e => handleAlergiesChange(e))} defaultValue={hasGuestAlergies()}></textarea>
        </div>}
    </div>
  )
};

export default FoodAlergies;
