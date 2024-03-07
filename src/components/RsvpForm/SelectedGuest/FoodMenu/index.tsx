import { useContext } from 'react';
import { GuestsContext } from '../../../../contexts/GuestsContext';
import styles from './index.module.scss';

const FoodMenu = () => {
  const context = useContext(GuestsContext);

  if (context === null) {
    return null;
  }

  const {
    guestsGroupContext,
    setGuestsGroupContext,
  } = context;

  const checkIfSelected = (fieldType: string, guestSelection: string) => {
    if (fieldType === guestSelection) {
      return true;
    }
    return false;
  }

  const handleMenuChange = (id: string, newMenu: string) => {
    const modifiedGuests = guestsGroupContext.map(guest => {
      if (guest.id === id) {
        const newFields = { ...guest.fields, menu: newMenu }
        return { ...guest, fields: newFields }
      }
      return guest;
    })

    setGuestsGroupContext(modifiedGuests);
  }

  if (guestsGroupContext.length > 1) {
    return guestsGroupContext.map(({ id, fields }, index) => {
      return fields.status === "Accepted" && <div className={styles.personalMenuWrapper}>
          <p className={styles.legend}>Меню за {fields.name}</p>
          <div className={styles.optionsWrapper}>
            <div className={styles.inputWrapper}>
              <input
                type="radio"
                id={`meat${index}`}
                name={`food${index}`}
                value={`meat${index}`}
                defaultChecked={checkIfSelected('Месо', fields.menu)}
                onChange={() => handleMenuChange(id, 'Месо')}
              />
              <label htmlFor={`meat${index}`}>Месо</label>
            </div>
            <div className={styles.inputWrapper}>
              <input
                type="radio"
                id={`veggie${index}`}
                name={`food${index}`}
                value={`veggie${index}`}
                defaultChecked={checkIfSelected('Вегитарианско', fields.menu)}
                onChange={() => handleMenuChange(id, 'Вегитарианско')}
              />
              <label htmlFor={`veggie${index}`}>Вегитарианско</label>
            </div>
          </div>
      </div>
    });
  }

  const singleGuest = guestsGroupContext[0];
  return singleGuest.fields.status === "Accepted" &&
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>Меню:</legend>
      <div className={styles.optionsWrapper}>
        <div className={styles.inputWrapper}>
          <input
            type="radio"
            id="meat"
            name="contact"
            value="meat"
            defaultChecked={checkIfSelected('Месо', singleGuest.fields.menu)}
            onChange={() => handleMenuChange(singleGuest.id, 'Месо')}
          />
          <label htmlFor="meat">Месо</label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="radio"
            id="veggie"
            name="contact"
            value="veggie"
            defaultChecked={checkIfSelected('Вегитарианско', singleGuest.fields.menu)}
            onChange={() => handleMenuChange(singleGuest.id, 'Вегитарианско')}
          />
          <label htmlFor="veggie">Вегетарианско</label>
        </div>
      </div>
    </fieldset>
};

export default FoodMenu;
