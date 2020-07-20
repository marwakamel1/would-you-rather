import React, { Component } from 'react';
import {connect} from 'react-redux'
import {setUser} from '../actions/authedUser'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap';
class LogIn extends Component {
	state ={
		loggedInUser :'sarahedo'
	}
	handleChange = (e) =>{
		e.preventDefault()
		const {value} = e.target
		this.setState({loggedInUser: value})
	}
	handleSubmit =(e) => {
		e.preventDefault()
		const user = this.state.loggedInUser
        this.props.dispatch(setUser(user))    
	}
	render(){
		return(
		<div style={{margin:"10% auto"}}>
	     <form onSubmit={this.handleSubmit} className="center form-signin">
			  <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png" alt="" width="100" height="72"/>
			  <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
			               <Form.Group controlId="exampleForm.SelectCustom" style={{width:"60%",margin:"auto"}}>
						    <Form.Control as="select" custom value={this.state.value} onChange={this.handleChange}>
						      <option value="sarahedo">Sarah Edo</option>
						      <option value="tylermcginnis">Tyler McGinnis</option>
						      <option value="johndoe">John Doe</option>
						    </Form.Control>			    
						  </Form.Group>
			  	  <Button variant="outline-primary" type="submit" >
						    Submit
						  </Button>
			</form>
        </div>
			)
	}
}



function mapStateToProps ({users}){
	return {users}
}
export default connect(mapStateToProps)(LogIn)