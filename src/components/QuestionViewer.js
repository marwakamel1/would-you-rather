import React, { Component } from 'react';
import Poll from './Poll'
import QuestionPage  from './QuestionPage'
import {connect}  from 'react-redux'


class QuestionViewer extends Component {
	state={answered:this.props.answered}
    updateState = () => {
        this.setState({answered : true})
    }    
	render(){
		const {question} =this.props
       
			if(question === null){
			 return <h1 style={{margin:"20% auto"}} className="center">404 Error</h1>
			 	}
		return(
			<div>
              {this.state.answered === true ? (<QuestionPage id={question.id}/>):(<Poll updateState={this.updateState} id={question.id}/>)}      
			</div>
			)
	}
}



function mapStateToProps ({questions,authedUser},props){
	 const {id} = props.match.params
	const question = questions[id] 
	const answered = question ? question.optionOne.votes.includes(authedUser) || 
		question.optionTwo.votes.includes(authedUser) : null
 return {question : question ? question : null ,answered}
}
export default connect(mapStateToProps)(QuestionViewer)