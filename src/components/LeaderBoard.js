import React from 'react'
import {connect} from 'react-redux'
import User from './User'

class LeaderBoard extends React.Component {

	render(){
				return(
			<div>
			  <ul  className='dashboard-list'>
                 {this.props.users.map((user)=>(<li key={user}><User id={user}/></li>))}
			  </ul>
			</div>
			)
	}
}

function mapStateToProps ({users}){
	return {users:Object.keys(users).sort((a,b)=>((users[b].questions.length+Object.keys(users[b].answers).length) -
	( users[a].questions.length+Object.keys(users[a].answers).length)))}
}
export default connect(mapStateToProps)(LeaderBoard)