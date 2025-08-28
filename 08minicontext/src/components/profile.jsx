import React,{useContext} from 'react'
import Usercontext from '../context/usercontext'

function Profile() {
    const{user}=useContext(Usercontext)
    
if(!user) return <div>please Login</div>

return <div>welcome {user.username}</div>
}

export default Profile