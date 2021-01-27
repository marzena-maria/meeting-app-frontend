import React from 'react'

function Password() {
    const [email,setEmail] = useState("")
    
    return (
        <form onSubmit={sendEmail}>
            <label>enter the registered emailId</label>
            <input type="email" value = {email} onChange={(e)=>{setEmail(e.target.value)}} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Password
