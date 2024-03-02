import { useContext } from 'react';
import { GuestsContext } from '../../../../contexts/GuestsContext';
import styles from './index.module.scss';
import { RecordType } from '../../../../Types/types';

const Transport = () => {
  const context = useContext(GuestsContext);

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

  const guestGroupTransport = guestsGroupContext[0].fields.transport;
  const hasPreselectedTransport = () => {
    if (guestGroupTransport) {
      return true;
    }
    return false;
  }
  const wantsTransport = hasPreselectedTransport();

  const handleTransportChange = (transportStatus: string) => {
    const modifiedGuests = guestsGroupContext.map(guest => {
      const newFields = { ...guest.fields, transport: transportStatus }
      return { ...guest, fields: newFields };
    })
    setGuestsGroupContext(modifiedGuests);
  }

  if (!hasGuestAccepted()) {
    return null;
  }

  return (
    <>
      <p className={styles.transportTitle}>Имате ли нужда от организиран транспорт?</p>
      <div className={styles.answersWrapper}>
        <div className={styles.transportAnswer}>
          <input
            type="radio"
            id="transportYes"
            name="transport"
            value="transportYes"
            onChange={() => handleTransportChange('да')}
            defaultChecked={wantsTransport}
          />
          <label htmlFor="transportYes">Да</label>
        </div>
        <div className={styles.transportAnswer}>
          <input
            type="radio"
            id="transportNo"
            name="transport"
            value="transportNo"
            defaultChecked={wantsTransport}
            onChange={() => handleTransportChange('не')}
          />
          <label htmlFor="transportNo">Не</label>
        </div>
      </div>
    </>
  )
};

export default Transport;
