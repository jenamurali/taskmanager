import React from 'react';
import { useSelector } from "react-redux"

const User = ({}) => {
    const allUsers = useSelector(state => state.users.allUsers)
    return (
        <div className="user">
            {allUsers.map((dat,idx) =>
                <img key={idx} src={dat.picture} alt={dat.name}/>
            )}
        </div>
    )
}

export default User;