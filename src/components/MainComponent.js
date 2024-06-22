import React from 'react'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Fixtures from './FixturesComponent';
import Home from './HomeComponent';
import Stats from './StatsComponent';
import Interviews from './InterviewsComponent';
import Join from './JoinComponent';
import Contact from './ContactComponent';
import {withRouter,BrowserRouter,Route, Switch, Redirect} from 'react-router-dom'



    function Main (){
        return(
            <div>
            <Header/>

            <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/fixtures' component={Fixtures}/>
            <Route path='/stats' component={Stats}/>
            <Route path='/interviews' component={Interviews}/>
            <Route path='/join' component={Join}/>
            <Route path='/contact' component={Contact}/>
            <Redirect to='/home'/>
            </Switch>
        
            <Footer/>
            </div>
        )
    }

export default withRouter(Main);