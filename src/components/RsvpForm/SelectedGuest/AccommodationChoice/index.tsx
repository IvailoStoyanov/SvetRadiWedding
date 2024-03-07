import { useContext, useState } from 'react';
import { GuestsContext } from '../../../../contexts/GuestsContext';
import styles from './index.module.scss';
import { debounce } from '../../../../utils/debounce';
import { RecordType } from '../../../../Types/types';

const AccommodationChoice = () => {
  const context = useContext(GuestsContext);
  const [wantsAccommodation, setWantsAccommodation] = useState(!!context?.guestsGroupContext[0].fields.accommodation);
  
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

  const handleAccommodationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const modifiedGuests = guestsGroupContext.map(guest => {
      const newFields = { ...guest.fields, accommodation: e.target.value }
      return { ...guest, fields: newFields };
    })
    setGuestsGroupContext(modifiedGuests);
  }

  if (!hasGuestAccepted()) {
    return null;
  }
  

  return (
    <div>
      <p className={styles.accommodationTitle}>Желаете ли да бъдете настанени?</p>
      <div className={styles.answersWrapper}>
        <div className={styles.accommodationAnswer}>
          <input
            type="radio"
            id="accommodationYes"
            name="accommodation"
            value="accommodationYes"
            defaultChecked={wantsAccommodation}
            onChange={() => setWantsAccommodation(true)}
          />
          <label htmlFor="accommodationYes">Да</label>
        </div>
        <div className={styles.accommodationAnswer}>
          <input
            type="radio"
            id="accommodationNo"
            name="accommodation"
            value="accommodationNo"
            defaultChecked={!wantsAccommodation}
            onChange={() => setWantsAccommodation(false)}
          />
          <label htmlFor="accommodationNo">Не</label>
        </div>
      </div>
      {wantsAccommodation &&
        <div className={styles.accommodationTextFieldWrapper}>
          <label htmlFor="story">Моля, напишете името на избраното от вас бунгало, дата за настаняване и дата за напускане:</label>
          <textarea
            name="story"
            required
            onChange={debounce(handleAccommodationChange)}
            defaultValue={guestsGroupContext[0].fields.accommodation}
          ></textarea>
        </div>}
    </div>
  )
};

export default AccommodationChoice;
