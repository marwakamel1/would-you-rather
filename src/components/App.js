import React, { Component } from 'react';
import {connect} from 'react-redux'
import {handelInitialData} from '../actions/shared'
//import AlignItemsList from './Poll'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import LogIn from './LogInPage'
import Nav from './Nav'
import QuestionViewer from './QuestionViewer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import  {  Fragment } from 'react'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount (){
    this.props.dispatch(handelInitialData())
  }
  render() {
    return (
      <Router>
       <Fragment>
        <LoadingBar/>
        <div className='container' >
          <Nav/>
          
          {this.props.loading === true ? <LogIn/> : 
            <div>
             <Route path='/' exact component={Home}/>
             <Route path='/add' component={NewQuestion}/>
             <Route path='/questions/:id' component={QuestionViewer}/>
             <Route path='/leaderboard' component={LeaderBoard}/>
           </div>
           }
        </div>
       </Fragment>
      </Router>
    );
  }
}

function mapStateToProp ({authedUser}){
  return {loading : authedUser ===null}
}
export default connect(mapStateToProp)(App);

//log out 
//The name of the logged in user is visible on the page
//A polling question links to details of that poll.