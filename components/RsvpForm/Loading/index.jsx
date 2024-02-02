import React, { useContext, useEffect, useState } from 'react';
import styles from './index.module.scss';
import { getGroup } from '../../../pages/api/guests';
import { GuestsContext } from '../../../contexts/GuestsContext';

const NamesList = () => {
  const {
    guestsMatchContext,
    setGuestsGroupContext,
  } = useContext(GuestsContext);
  const [currentInvSelection, setCurrentInvSelection] = useState('');

  return (
    <>
      <div className={styles.optionsWrapper}>
        {guestsMatchContext.map((guest) => (
          <div className={styles.optionWrapper}>
            <input
              type="radio"
              id={guest.id}
              name="contact"
              value={guest.fields.groupName}
              onChange={() => setCurrentInvSelection(guest.fields.groupId)}
            />
            <label htmlFor={guest.id}>{guest.fields.groupName}</label>
          </div>
        ))}
      </div>
      <button
        className={styles.button}
        type="button"
        onClick={() => getGroup(currentInvSelection, setGuestsGroupContext)}
        disabled={!currentInvSelection}
      >
        Избери
      </button>
    </>
  );
};

export default NamesList;
