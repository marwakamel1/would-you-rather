import {RECIEVE_QUESTIONS,SAVE_QUESTION_ANSWER,ADD_QUESTION} from '../actions/questions'


export function questions (state = {},action){
	switch (action.type) {
		case RECIEVE_QUESTIONS :
		  return action.questions
		case SAVE_QUESTION_ANSWER :
		  const {authedUser,qid,answer} = action.info
		  
		  return {...state,
		  	        [qid] : {
                   	...state[qid],
                   	optionOne :{...state[qid].optionOne,votes :answer==="optionOne" ?
                   	state[qid].optionOne.votes.concat(authedUser) :state[qid].optionOne.votes } ,
                   	optionTwo :{...state[qid].optionTwo,votes : answer === "optionTwo" ? 
                   	state[qid].optionTwo.votes.concat(authedUser) : state[qid].optionTwo.votes }
                   }
		  }
		 case ADD_QUESTION :
		  
		   return {...state,
                   [action.question.id] : action.question
		    }
		default :
		  return state
	}
}

