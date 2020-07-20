import React from 'react'
import {handelAddQuestion} from '../actions/questions'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class NewQuestion extends React.Component {
	state = {
	 	firstOption: '',
	 	secondOption : '',
	 	isHome : false
	 }
    handelChange = (e) => {
    	e.preventDefault()
    	const {value,name} = e.target
    	this.setState({[name]:value})
    	
    }
	handelSubmit = (e) =>{
		e.preventDefault()
		const {firstOption,secondOption} = this.state
        this.props.dispatch(handelAddQuestion(firstOption,secondOption))
        this.setState({isHome:true})
	}
	render(){
		const {firstOption,secondOption,isHome} = this.state
		      if (isHome === true) {
        return <Redirect to='/' />
          }
		return (
			<div className='container'>
			 <h3 className='center'>Create New Question</h3>
			<Form onSubmit={this.handelSubmit} className="center" style={{margin:"10% auto",width:'60%'}}>
			  <Form.Group controlId="formBasicEmail">
			    <h4>Would You Rather !</h4>
			   
			    <Form.Control name="firstOption" type="text" value={firstOption} onChange={this.handelChange} placeholder="Option One .." />
			  </Form.Group>
			  <Form.Group controlId="formBasicPassword">
			
			    <Form.Control name="secondOption" type="text" value={secondOption} onChange={this.handelChange} placeholder="Option Two .." />
			  </Form.Group>
			  <Button variant="outline-primary" type="submit" disabled={firstOption === '' || secondOption === ''}>
			    Submit
			  </Button>
			</Form>
			</div>
			)
	}
}

export default connect()(NewQuestion)