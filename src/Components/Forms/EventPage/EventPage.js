import React, { useState, useEffect } from "react";


export function EventPage() {
    const [event, setEvent] = useState([]);
    const [id, setId] = useState(0)

    useEffect(() => {
        fetch(`/events/get-event/${id}`).then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonResponse => setEvent(jsonResponse))
    },[id])

    const checkLogin = () => {
        console.log("hello");
    }

    return (
        <>
            <div>
                <h1>name : {event.eventName}</h1>
                <h1>starting: {event.startingDate}</h1>
                <h1>info: {event.description}</h1>
                <h1>category: {event.category}</h1>
                <h1>online: {event.online}</h1>
                <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            </div>
            <div>
                <button onClick={checkLogin}>Join Now!</button>
            </div>
        </>
        
    )
}