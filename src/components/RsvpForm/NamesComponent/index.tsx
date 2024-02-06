import { useContext, useState, KeyboardEvent } from 'react';
import styles from './index.module.scss';
import { getGuestMatch } from '../../../api/guests';

import { GuestsContext } from '../../../contexts/GuestsContext';

const NamesComponent = () => {
  const context = useContext(GuestsContext);
  const [name, setName] = useState('');

  if (context === null) {
    return null;
  }

  const {
    setGuestsMatchContext,
    setIsFetching
  } = context;


  const handleNameInput = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  }

  const handleNameSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (name.length > 2 && e.key === 'Enter') {
      getGuestMatch(name, setGuestsMatchContext, setIsFetching);
    }
  }

  const handleFindInvitation = (name: string ) => {
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
        onClick={() => handleFindInvitation(name)}
        type="button"
        disabled={name.length < 3}
      >
        Намери поканата
      </button>
    </>
  );
};

export default NamesComponent;
