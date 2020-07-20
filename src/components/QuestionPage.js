import React from 'react';
import {ProgressBar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Row,Col} from 'react-bootstrap';
import {connect} from 'react-redux'
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

 const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),

  },
}));
function QuestionPage (props) {
	    const classes = useStyles();
		const {question,authedUser}= props
		const total = question.optionOne.votes.length +question.optionTwo.votes.length
		const ratio1 =(question.optionOne.votes.length/total)*100
		const ratio2 =(question.optionTwo.votes.length/total)*100
		
		return(
		<div className='container' style={{margin:"10% auto", width:"70%"}}>
		<Card>
		  <Card.Header>Asked By {props.author.name}</Card.Header>
		  <Card.Body>
		    <Row className="align-items-center ">
			    <Col lg={4}>
			     <Avatar alt="Remy Sharp" style={{ margin :"auto"}} src={props.author.avatarURL} className={classes.large} />		
	            </Col>
	            <Col lg={8}>
		            <h4>Results</h4>
				    <div style={{margin:"0 0 0.7rem 0"}}>
				     {question.optionOne.text} {question.optionOne.votes.includes(authedUser) && (<span  className="text-success"><DoneIcon/></span>)} 
				    <span className="float-right text-muted" >{question.optionOne.votes.length} voted</span> 
				    <ProgressBar animated now={ratio1} label={`${ratio1}%`} />
				     </div>
				    <div>
				     {question.optionTwo.text} {question.optionTwo.votes.includes(authedUser) && (<span className="text-success" ><DoneIcon/></span>)}     
				    <span className="float-right text-muted">{question.optionTwo.votes.length} voted</span>
				    <ProgressBar animated now={ratio2} label={`${ratio2}%`}/>
				     </div>
	            </Col>
            </Row>
	 
		  </Card.Body>
		</Card>
         
		</div>
       )
	
}
function mapStateToProps ({questions,authedUser,users},props){
	 const {id} = props
	const question = questions[id]
	 const author = users[question.author]
 return {question,authedUser,author}
}
export default connect(mapStateToProps)(QuestionPage)