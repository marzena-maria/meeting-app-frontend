import React,{createContext,useState} from 'react';
import './Notifications.scss'

export const NotificationContext = createContext();

function Notifications({children}) {
    const [message, setMessage] = useState("");
    const [type, setType] = useState("");

    const setNotification = (msg, alertType='neutral') => {
        setMessage(msg);
        setType(alertType);

        setTimeout(()=> {
            setMessage("")
            setType("neutral");
        }, 2000);
    }


    return (
        <NotificationContext.Provider value={setNotification}>
            { message ? (<div className={'notification_container ' + type}>{message}</div>) : ('') }
            {children}
        </NotificationContext.Provider>
    )
}

export default Notifications
