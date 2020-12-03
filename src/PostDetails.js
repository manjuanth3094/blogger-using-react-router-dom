import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PostDetails = (props) => {
    const { id } = props.match.params
    //console.log(typeof id)
    const [user, setUser] = useState('')
    const [postDetails, setPostDetails] = useState({})
    const [comments, setComments] = useState([])
    const [idValue, setIdValue] = useState(0)

    useEffect(() => {
        // axios call to find post-details
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                //console.log(response.data)
                const result = response.data.find(e => {
                    if(e.id === +id) {
                        return e
                    }
                })                
                setPostDetails(result)
                setIdValue(result.userId)
                
            })
            .catch(err => alert(err.message))

        // axios call to find name of "id & user" based on post-id value
        if(idValue !== 0) {
            axios.get(`https://jsonplaceholder.typicode.com/users/${idValue}`)
            .then(response => {
                console.log(response.data)
                const result = response.data
                setUser(result)                                       
            })
            .catch(err => alert(err.message))
        }   

        // axios call to find coments based on id value 
        //axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => {
                //console.log(response.data)
                const result = response.data
                setComments(result)                
            })
            .catch(err => alert(err.message))                     
    }, [idValue])

    return (
        <div>
            <h2> USER NAME : {user.name} </h2>
           
            <h2> TITLE : {postDetails.title} </h2>
            <h3> BODY : <br/> {postDetails.body} </h3>

            <h2> COMMENTS </h2>
            <ul>
                {comments.map(e => <li key={e.id}> {e.body} </li>)}
            </ul>

            <Link to={`/users/${user.id}`} > More posts of author : {user.name} </Link>             
        </div>
    )
}

export default PostDetails
