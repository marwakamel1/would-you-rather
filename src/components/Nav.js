import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {nav} from 'react-bootstrap';
import {connect} from 'react-redux'
import {deleteUser} from '../actions/authedUser'
class Nav extends React.Component {
  logOut =() =>{
     this.props.dispatch(deleteUser(this.props.authedUser))
  }
  render(){
    
  return (
    <div>
    <nav className='nav'>
      <ul  className="mr-auto">
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/add' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leader Board
          </NavLink>
        </li>
      </ul>
      {this.props.user && (   <ul className="ml-auto">
       <li className='nav-item'>
        Welcome {this.props.user.name}
       </li>
       <li className='nav-item'>
       <a href="#" onClick={this.logOut} >
        Log Out
        </a>
       </li>
      </ul>)}
   
    </nav>
    </div>
  )
} 
}
function mapStateToProps ({authedUser,users}){
  const user= users[authedUser]
  return {user}
}
export default connect(mapStateToProps)(Nav)
