import React from 'react';
import './App.css';

import Header from './basic_class/Header';
import Paragraph from './basic_class/Paragraph';
import People from './basic_class/People';
import Squares from './lifting_state/Square/Squares';
import SignUp from './lifting_state/Password/SignUp';
import PreBuiltComp from './PreBuiltComp';
import Article from './blog/Article';
import Articles from './blog/Articles';

import Footer from './Footer';
import FourOhFour from './FourOhFour';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

const App = () => (

  <Router>
    <>
      <Header>Welcome to App Home</Header>

      <Switch>
          <Route exact path="/" component={ Paragraph }/>
    
          <Route path="/people" render={ () => (
            <People names = { ['jae', 'wine', 'tea', "James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus", "jae", 'wine', 'tea'] }  />
          )}
          />

          <Route exact path="/squares" render={ () => (
            <>
              <Squares color = "yellow"  />
              <Squares color = "lime"  />
              <Squares color = "powderblue"  />
            </>
          )}
          />

          <Route exact path="/signup" render={ () => (
            <SignUp />
          )}
          />

          <Route exact path="/prebuilt" render={ () => (
            <PreBuiltComp />
          )}
          />

            {/* create function comes first then get article/:id.
            order of routing is important 
            specific ones later  */}

          <Route exact path="/articles/:id" render={ ( { match } ) => (
            <Article article={ match.params.id } />
          ) } 
          />

          <Route exact path="/articles" render={ () => (
            <Articles />
          )}
          />

          <FourOhFour />
        </Switch>

      <Footer />
    </>
  </Router>
 
);


export default App;