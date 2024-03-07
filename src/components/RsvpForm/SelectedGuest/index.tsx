import { useContext, useState } from 'react';
import FoodAlergies from './FoodAlergies';
import AccommodationChoice from './AccommodationChoice';
import Transport from './Transport';
import FoodMenu from './FoodMenu';
import Affirmation from './Affirmation';
import styles from './index.module.scss';
import { GuestsContext } from '../../../contexts/GuestsContext';
import { updateGuestGroup } from '../../../api/guests';
import user from '../../../assets/user.svg';
import group from '../../../assets/group.svg';
import { useNavigate } from 'react-router-dom';

const SelectedGuest = () => {
  const context = useContext(GuestsContext);

  if (context === null) {
    return null;
  }

  const {
    guestsGroupContext,
  } = context;

  const navigate = useNavigate();

  const handleSubmit = () => {
    updateGuestGroup(guestsGroupContext);
    navigate('/formSuccess');
  }

  const isValidSubmit = () => {
    const inactiveGuestStatus = guestsGroupContext.find(guest => guest.fields.status === "Waiting for reply");

    return !!inactiveGuestStatus
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>
        <img
          src={guestsGroupContext.length === 1 ? user : group}
          alt="Netlify Logo"
          className={styles.icon} />
        {guestsGroupContext[0].fields.groupName}
      </h3>

      <Affirmation />
      <FoodMenu/>
      <FoodAlergies />
      <AccommodationChoice />
      <Transport />
      <button className={styles.button} onClick={handleSubmit} disabled={isValidSubmit()}>Изпрати потвърждението</button>
    </div>
  )
};

export default SelectedGuest;
