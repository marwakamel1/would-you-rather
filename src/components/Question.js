import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import {formatDate} from '../utils/DATA'

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
	

function Question (props) {

		 const classes = useStyles();
		const {id,timestamp,optionOne} = props.question
		const {avatarURL} = props.user
		return(
              <Link to={`/questions/${id}`} className='tweet'>
              
                <Avatar alt="Remy Sharp" src={avatarURL} className={classes.large} />

                <div className='tweet-info'>
		          <div>
		            <span>Would You Rather ?</span>
		            <div>{formatDate(timestamp)}</div>
                    <div>
                      <p>{optionOne.text} Or ..</p>
                     
                    </div>
                    <Button variant="outlined" color="secondary">
                       View Poll
                    </Button>
		          </div>
                </div>
              </Link>
			)
	
}
function mapStateToProps ({questions,users},{id}){
	 const question = questions[id]
	 const user = users[question.author]
     return {question,user}
}
export default connect(mapStateToProps)(Question)

