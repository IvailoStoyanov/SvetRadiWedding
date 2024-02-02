import React, { useContext, useState } from 'react';
import { GuestsContext } from '../../../../contexts/GuestsContext';
import styles from './index.module.scss';

const Transport = () => {
  const {
    guestsGroupContext,
    setGuestsGroupContext
  } = useContext(GuestsContext);

  const hasGuestAccepted = () => {
    const accepted = (guest) => guest.fields.status === "Accepted";
    return guestsGroupContext.some(accepted);
  }

  const guestGroupTransport = guestsGroupContext[0].fields.transport;
  const hasPreselectedTransport = () => {
    if (!!guestGroupTransport) {
      return true;
    }
    return false;
  }
  const [wantsTransport, setWantsTransport] = useState(hasPreselectedTransport);

  const handleTransportChange = (transportStatus) => {
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
      <p className={styles.transportTitle}>Желаете ли да се възползвате от организиран транспорт в посока София - Пасарел Лейк Клуб?</p>
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
