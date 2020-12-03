import React from 'react'
import { Link, Route } from 'react-router-dom'

import Home from './Home'
import UsersList from './UsersList'
import Posts from './Posts'
import UserDetails from './UserDetails'
import PostDetails from './PostDetails'

const App = (props) => {
  
  return (
    <div>
      <Link to='/' > Home </Link> |
      <Link to='/users' > Users </Link> | 
      <Link to='/posts' > Posts </Link>

      <Route path="/" component={Home} exact />
      <Route path="/users" component={UsersList} exact /> 
      <Route path="/posts" component={Posts} exact />

      <Route path="/users/:id" component={UserDetails} />
      <Route path="/posts/:id" component={PostDetails} />
    </div>
  )
}

export default App
