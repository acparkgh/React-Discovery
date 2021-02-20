import './ReactRouter.css';
import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

class ReactRouter extends Component {

  render() {
    return (
      // <div>
      //   <nav>
      //     <NavLink to="/">Home</NavLink>
      //     <NavLink to="/Introduction">Introduction</NavLink>
      //     <NavLink to="/Summary">Summary</NavLink>
      //     <NavLink to="/Body">Body</NavLink>
      //     <NavLink to="/Body/Index">Index</NavLink>
      //     <NavLink to="/Body/Page1">Page1</NavLink>
      //     <NavLink to="/Body/Page2">Page2</NavLink>
      //     <NavLink to="/Body/Page3">Page3</NavLink>
      //   </nav>

      //   <Route path="/" render={ () => <h2>Home</h2> } />
      //   <Route path="/Introduction" render={ () => <h2>Introduction</h2> } />
      //   <Route path="/Summary" render={ () => <h2>Summary</h2> } />
      //   <Route path="/Body" render={ () => <h2>Body</h2> } />
      //   <Route path="/Body/:PageNum" render={ () => <p>Page</p> } />
      //   <Route path="/Body/Index" render={ () => <h3>Index</h3> } />
        
      // </div>

<div>
        <nav>
           <NavLink to="/">Home</NavLink>
           <NavLink to="/Introduction">Introduction</NavLink>
           <NavLink to="/Summary">Summary</NavLink>
           <NavLink to="/Body">Body</NavLink>
           <NavLink to="/Body/Index">Index</NavLink>
           <NavLink to="/Body/Page1">Page1</NavLink>
           <NavLink to="/Body/Page2">Page2</NavLink>
           <NavLink to="/Body/Page3">Page3</NavLink>
        </nav>
<Route path="/" render={() => <h2>Home</h2>} />
<Route path="/Introduction" render={() => <h2>Introduction</h2>} />
<Route path="/Summary" render={() => <h2>Summary</h2>} />

<Route path="/Body" exact render={() => <h2>Body</h2>} />
<Switch>
<Route path="/Body/Index" render={() => <h3>Index</h3>} />
<Route path="/Body/:PageNum" render={() => <p>Page</p>} />
</Switch>
      </div>

    )
  }


}

export default ReactRouter;


