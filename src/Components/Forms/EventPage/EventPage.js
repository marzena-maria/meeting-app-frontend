import React, { useState, useEffect } from "react";
import axios from "axios";


export function EventPage() {
    const [event, setEvent] = useState([]);
    const [id, setId] = useState("5fdb57c7c8bbe2412fee5f27")

    useEffect(() => {
        fetch(`/events/get-event/${id}`).then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonResponse => setEvent(jsonResponse))
    },[id])

    const checkLoginStatus = () => {
        axios.get("http://localhost:4014/", {withCredentials: true})
    }

    return (
        <>
            <div>
                <h1>name : {event.eventName}</h1>
                <h1>starting: {event.startingDate}</h1>
                <h1>info: {event.description}</h1>
                <h1>category: {event.category}</h1>
                <h1>online: {event.online}</h1>
                <h1>participants: {event.participants}</h1>
                {/* <input type="text" value={id} onChange={e => setId(e.target.value)}/> */}
            </div>
            <div>
                <button onClick={checkLoginStatus}>Join Now!</button>
            </div>
        </>
    )
}