import React, { useContext, useState } from 'react';
import styles from './index.module.scss';
import { getGuestMatch } from '../../../pages/api/guests';

import { GuestsContext } from '../../../contexts/GuestsContext';
const NamesComponent = () => {
  const {
    setGuestsMatchContext,
    setIsFetching,
  } = useContext(GuestsContext);

  const [name, setName] = useState('');

  const handleNameInput = (e) => {
    setName(e.target.value);
  }

  const handleNameSubmit = (e) => {
    if (name.length > 2 && e.keyCode === 13) {
      getGuestMatch(name, setGuestsMatchContext, setIsFetching);
    }
  }

  const handleFindInvitation = (name, setGuestsMatchContext) => {
    getGuestMatch(name, setGuestsMatchContext, setIsFetching)
  }

  return (
    <>
      <div className={styles.inputsWrapper}>
        <div className={styles.nameInputWrapper}>
          <label htmlFor="firstName">Вашето име:</label>
          <input type="text" id="firstName" name="name" onChange={handleNameInput} onKeyDown={handleNameSubmit} value={name} />
        </div>
      </div>
      <button
        className={styles.button}
        onClick={() => handleFindInvitation(name, setGuestsMatchContext)}
        type="button"
        disabled={name.length < 3}
      >
        Намери поканата
      </button>
    </>
  );
};

export default NamesComponent;
