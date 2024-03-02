import { useContext, useState } from 'react';
import styles from './index.module.scss';
import { getGroup } from '../../../api/guests';
import { GuestsContext } from '../../../contexts/GuestsContext';

const NamesList = () => {
  const context = useContext(GuestsContext);
  const [currentInvSelection, setCurrentInvSelection] = useState('');

  if (context === null) {
    return null;
  }

  const {
    guestsMatchContext,
    setGuestsGroupContext,
  } = context;

  if (!guestsMatchContext.length) {
    return null;
  }

  return (
    <>
      <div className={styles.optionsWrapper}>
        {guestsMatchContext.map((guest) => (
          <div className={styles.optionWrapper} key={guest.id}>
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

