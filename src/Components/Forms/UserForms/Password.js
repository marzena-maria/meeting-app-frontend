import React from 'react'

function Password() {
    const [email,setEmail] = useState("")
    return (
        <div>
            <label>enter the registered emailId</label>
            <input type="email" value = {email} onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
    )
}

export default Password
