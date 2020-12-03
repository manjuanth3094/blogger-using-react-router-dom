import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserDetails = (props) => {
    const { id } = props.match.params
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                //console.log(response.data)
                const result = response.data
                setUser(result)
                
            })
            .catch(err => {
                alert(err.message)
            })

        axios.get(`http://jsonplaceholder.typicode.com/posts?userid=${id}`)
            .then(response => {
                //console.log(response.data[0])
                const result = response.data.filter(ele => {
                    //console.log(e)
                    if(ele.userId === +id) {
                        return ele
                    }
                })
                console.log(result)
                setPosts(result)               
            })
    }, [])

    return (
        <div>
            <h1> USER NAME : {user.name} </h1>

            <h2> POSTS WRITTEN BY USER : </h2>
            <ul>
                {posts.map(user => {
                    return (<li key={user.id}> <Link to={`/posts/${user.id}`} > {user.title} </Link>  </li>)
                })}
            </ul>
            
        </div>
    )
}

export default UserDetails

// https://jsonplaceholder.typicode.com/posts?userid=1
