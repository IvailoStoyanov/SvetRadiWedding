import { useContext, useState } from 'react';
import { GuestsContext } from '../../../../contexts/GuestsContext';
import styles from './index.module.scss';
import { debounce } from '../../../../utils/debounce';
import { RecordType } from '../../../../Types/types';

const FoodAlergies = () => {
  const context = useContext(GuestsContext);
  const [hasAlergies, setHasAlergies] = useState(!!context?.guestsGroupContext[0].fields.alergies);
  
  if (context === null) {
    return null;
  }
  
  const {
    guestsGroupContext,
    setGuestsGroupContext,
  } = context;

  const hasGuestAccepted = () => {
    const accepted = (guest: RecordType) => guest.fields.status === "Accepted";
    return guestsGroupContext.some(accepted);
  }

  const handleAlergiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          <textarea
            name="story"
            required
            onChange={debounce(handleAlergiesChange)}
            defaultValue={guestsGroupContext[0].fields.alergies}
          ></textarea>
        </div>}
    </div>
  )
};

export default FoodAlergies;
