import React, { Component } from 'react';
import {connect} from 'react-redux'
import Question from './Question'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class Home extends Component {
	state = {
		answered : false
	} 
	handleChange =()=>{
		this.setState((prevState)=>({answered:!prevState.answered}))
	}
	render(){
		const {answeredIDs,unAnsweredIDs} = this.props
		const {answered} = this.state
		return(
			<div className="container">
		
             <FormControlLabel
          control={	<Switch onChange={this.handleChange} name="checkedA" inputProps={{ 'aria-label': 'secondary checkbox' }}/>}
          label={answered === false ? 'Unanswered Questions' : 'Answered Questions'}
        />
		    {answered === false ?    
		     <ul  className='dashboard-list'>
               {unAnsweredIDs.map((q) => (<li key={q}><Question id={q}/></li>))}
             </ul> :
             <ul  className='dashboard-list'>
               {answeredIDs.map((q) => (<li key={q}><Question id={q}/></li>))}
             </ul>
         }
            </div>
			)
		}
	}

function mapStateToProps({questions,authedUser}){

	const answeredQuestions = Object.keys(questions).filter(key => (questions[key].optionOne.votes.includes(authedUser) || questions[key].optionTwo.votes.includes(authedUser) ))
	const unAnsweredQuestions = Object.keys(questions).filter(key => (!(questions[key].optionOne.votes.includes(authedUser) || questions[key].optionTwo.votes.includes(authedUser))))
  return {answeredIDs :answeredQuestions.sort((a,b)=>(questions[b].timestamp - questions[a].timestamp)),
   unAnsweredIDs :unAnsweredQuestions.sort((a,b)=>(questions[b].timestamp - questions[a].timestamp)),
  }
}
export default connect(mapStateToProps)(Home)