//API link :- https://jsonplaceholder.typicode.com/users

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UsersList = (props) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/users`)
            .then(response => {
                //console.log(response.data)
                const result = response.data
                setUsers(result)
            })
            .catch(err => {
                alert(err.message)
            })
    }, [])

    return (
        <div>
            <h2> Listing Users - {users.length} </h2>

            <ul>
                {users.map(user => (<li key={user.id}> 
                                        <Link to={`/users/${user.id}`} > {user.name} </Link> 
                                    </li>))}
            </ul>
        </div>
    )
}

export default UsersList
