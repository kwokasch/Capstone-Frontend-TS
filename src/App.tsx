import * as React from "react";
import {BrowserRouter as Router, Route, Link, Switch, RouteComponentProps} from "react-router-dom";
// import * as ReactDOM from 'react-dom';
import './App.css';
import Header from './components_ts/Header';
import NavBar from './components_ts/NavBar';
// import SubHeader from './components_ts/SubHeader';
import { User, Pet } from './TypeDefinitions';

// interface User {
//   firstName: string; 
//   lastName: string;
// }

// interface Pet {
//   name: string; 
//   breed: string;
// }

interface AppState {
  currentUser: User; 
  currentPet: Pet;
}

export default class App extends React.Component <{}, AppState> {
    state = {
        currentUser: {
          firstName: "",
          lastName: ""
        },
        currentPet: {
          name: "",
          breed: ""
        }
    };
  

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="header-container">
              <Header />
              <NavBar currentUser={this.state.currentUser}/>
            <div>
              {/* <SubHeader /> */}
            </div>
            </div>
          </header>
        </div>
        <Switch>
          {/* <Route exact path="/" component={IntroPage} /> */}
          {/* <Route exact path="/login" render={props => <LoginSignupPage {...props} setUser={this.setUser}/>} /> */}
          {/* <Route exact path="/lostfound" render={props => <LostFoundPage {...props} setPet={this.setPet}/>} /> */}
          {/* <Route exact path="/search" render={props => <SearchPage {...props} allPets={this.state.allPets}/>} /> */}
        </Switch>
      </Router>
    );
  }
}

