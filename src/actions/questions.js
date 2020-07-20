import {saveQuestionAnswer,saveQuestion} from '../utils/api'
import {showLoading,hideLoading} from 'react-redux-loading'
export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER ='SAVE_QUESTION_ANSWER'
export const ADD_QUESTION ='ADD_QUESTION'

export function recieveQuestions(questions){
	return {
		type : RECIEVE_QUESTIONS,
		questions
	}
}

export function handelSaveQuestionAnswer (qid, answer ){
	return (dispatch,getState)=>{
		const {authedUser} = getState()
		const info ={authedUser,qid,answer} 
        return saveQuestionAnswer(info)
         .then(()=>(dispatch(SaveQuestionAnswer(info))))
	}
}

function SaveQuestionAnswer(info){
	return {
		type : SAVE_QUESTION_ANSWER,
        info
	}
}

export function handelAddQuestion(optionOne,optionTwo){
	return (dispatch,getState) => {
		const {authedUser} = getState()
		const question = {optionOneText:optionOne,optionTwoText:optionTwo,author:authedUser}
		dispatch(showLoading())
		return saveQuestion(question)
		          .then ((question)=>(dispatch(SaveQuestion(question))))
		          .then (()=>{dispatch(hideLoading())})
	}
}

function SaveQuestion (question){
	return {
		type : ADD_QUESTION,
		question
	}
}