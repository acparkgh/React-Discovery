import './ReactRouter.css';
import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';


class ReactRouter extends Component {



  render() {
    return (
      <div>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/Summary'>Summary</NavLink>
          <NavLink to='/Body'>Body</NavLink>
          <NavLink to='/Body/Section'>Section</NavLink>
        </nav>

        <Route path='/' render={ () => <h2>Home</h2> } />
        <Route path='/Summary' render={ () => <h3>Summary</h3> } />
        <Route path='/Body' render={ () => <h3>Body</h3> } />
        <Route path='/Body/Section' render={ () => <p>Section</p> } />
        
      </div>
    )
  }


}

export default ReactRouter;


