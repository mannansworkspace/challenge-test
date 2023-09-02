import React from 'react';
import useInit from './hooks/init.hook';
import { userKeys } from './constants';
import SectorSelectBox from './components/views/sectorSelectBox.view';
import NotificationBar from './components/common/notifications/index.notification';
const App = () => {

  const [sectors, user, updateUser, upsertUser, notification, clearNotification] = useInit()

  return (
    <div className='container'>
      <div className='container__modal' >
        <h1 className='container__modal__heading'>Please enter your name and pick the Sectors you are currently involved in.</h1>
        <div className='container__modal__NameInput'>
          <p className='text'>Name</p>
          <input className='input' placeholder='Enter your Name' value={user[userKeys.NAME]} type="text" onChange={(e) => updateUser(userKeys.NAME, e.target.value)} />
        </div>
        <SectorSelectBox sectors={sectors} user={user} updateUser={updateUser} />
        <div className='container__modal__AgreeInput' >
          <input checked={user[userKeys.AGREE_TO_TERMS]} onChange={(e) => updateUser(userKeys.AGREE_TO_TERMS, e.target.checked)} type="checkbox" />
          <p>Agree to terms</p>
        </div>
        {
          // place message here
          !!notification?.message?.length && <NotificationBar message ={notification.message} theme = {notification.theme} onClose={clearNotification} />

        }
        <div className='container__modal__SaveBtn'>
          <button class="button-85" onClick={upsertUser} type="submit" value="Save">Save</button>
        </div>
      </div>
    </div>
  );
}


export default App;
