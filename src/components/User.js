import React from 'react'
import {connect} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Row,Col} from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
 
class User extends React.Component {
	render(){
		const {name,avatarURL,questions,answers} = this.props.user
		const score = questions.length+Object.keys(answers).length
		const myStyle= {
			margin: "5px",
			color : "red"
		}
		return(
            <div>
                <Card className="tweet-info">
                 
				  
				  <Card.Body>
				      <Row className="align-items-center">
		           <Col lg={4}>
		           	 <Avatar alt="Remy Sharp" src={avatarURL} style={{width:"120px",height:"120px",margin :"auto"}} />		
                    </Col>
                   <Col lg={8}>
				    <Card.Title><span>{name}</span></Card.Title>

				      <p style={myStyle}>asked {questions.length} questions</p>
				      <p style={myStyle}>answered {Object.keys(answers).length} questions</p>
				      <p  style={myStyle}>score : {score}</p>

				    </Col>
				  </Row>
				  </Card.Body>
			
				</Card>
			</div>
			)
	}
}

function mapStateToProps ({users},{id}){
	return {user: users[id]}
}
export default connect(mapStateToProps)(User)