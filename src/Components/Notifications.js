import React,{createContext,useState} from 'react'

export const NotificationContext = createContext();

 function Notifications({children}) {
    const [message,setMessage] = useState("");

    const setNotification = (msg)=>{
        setMessage(msg);

        setTimeout(()=>{
            setMessage("")
        },2000);
    }

    return (
        <NotificationContext.Provider value={setNotification}>
            {message}
            {children}
        </NotificationContext.Provider>
    )
}

export default Notifications
