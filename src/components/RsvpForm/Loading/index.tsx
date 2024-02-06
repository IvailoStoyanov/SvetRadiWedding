import { useContext, useState } from 'react';
import styles from './index.module.scss';
import { getGroup } from '../../../api/guests';
import { GuestsContext } from '../../../contexts/GuestsContext';
import { RecordType } from '../../../Types/types';

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
  

  return (
    <>
      <div className={styles.optionsWrapper}>
        {guestsMatchContext.map((guest: RecordType) => (
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
