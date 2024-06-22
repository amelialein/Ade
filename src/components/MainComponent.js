import React from 'react'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Fixtures from './FixturesComponent';
import Home from './HomeComponent';
import Stats from './StatsComponent';
import Interviews from './InterviewsComponent';
import Join from './JoinComponent';
import Contact from './ContactComponent';
import {withRouter,BrowserRouter,Route, Switch} from 'react-router-dom'



    function Main (){
        return(
            <div>
            <Header/>
            <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/fixtures' component={Fixtures}/>
            </Switch>
        
        
            <Stats/>
            <Interviews/>
            <Join/>
            <Contact/>
            <Footer/>
            </div>
        )
    }

export default withRouter(Main);