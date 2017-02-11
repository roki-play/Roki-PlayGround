import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main/Main.jsx';
import Hello from './components/Hello.jsx'
import SoundBoard from './SoundBoard/SoundBoard.jsx'
import {Router, Route,browserHistory, IndexRedirect} from 'react-router'

const NotFound=<div>PAGE NOT FOUND</div>
const Routes=(props)=>(
  <Router {...props}>
    <Route path="/" component={Main} >
      <IndexRedirect  to="/hello"/>
        <Route path="hello" component={Hello}/>
        <Route path="Synth" component={SoundBoard}/>
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

ReactDOM.render(
  <Routes history={browserHistory}/>,
  document.getElementById('root')
);
