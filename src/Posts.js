import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Posts = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                //console.log(response.data)
                const result = response.data
                setPosts(result)
                
            })
            .catch(err => alert(err.message))
    }, [])

    return (
        <div>
            <h2> Total Posts : {posts.length} </h2>
            <ul>
                {posts.map(user => {
                    //console.log(user.id)
                    return (<li key={user.id}> <Link to={`/posts/${user.id}`}> {user.title} </Link> </li>)
                })}
            </ul>
        </div>
    )
}

export default Posts
