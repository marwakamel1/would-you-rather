import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import Avatar from '@material-ui/core/Avatar';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import {handelSaveQuestionAnswer} from '../actions/questions'


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
    large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin : "auto "
  }
}));

function Poll(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {optionOne,optionTwo,id} = props.question
    if (value === optionOne.text) {
      props.dispatch(handelSaveQuestionAnswer(id,"optionOne"))
      props.updateState()
      setError(false);
    } else if (value === optionTwo.text ) {
       props.dispatch(handelSaveQuestionAnswer(id,"optionTwo"))
        props.updateState()
      setError(true);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };
  return (
    <div  className='tweet' style={{margin:"10% auto"}}>
    <Avatar alt="Remy Sharp" src={props.author.avatarURL} className={classes.large} />
    <form onSubmit={handleSubmit} style={{margin:"auto"}}>
      <FormControl component="fieldset" error={error} className={classes.formControl}>
        <FormLabel component="legend">Whould You Rather </FormLabel>
        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
          <FormControlLabel value={props.question.optionOne.text} control={<Radio />} label={props.question.optionOne.text} />
          <FormControlLabel value={props.question.optionTwo.text}  control={<Radio />} label={props.question.optionTwo.text} />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button type="submit" variant="outlined" color="primary" className={classes.button}>
          Submit
        </Button>
      </FormControl>
    </form>
    </div>
  );
}
function mapStateToProps ({questions,users},props){
   const {id,updateState} = props
   const question = questions[id]
   const author = users[question.author] 
  return {question ,updateState,author}
}
export default connect(mapStateToProps)(Poll)