//@flow
import React, { PureComponent, Element } from 'react'
import CSSAnimation from 'react-css-animations' 
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/main.css'
type MainProps = {
 
}
type MainState = {
appear:boolean,
sidebarToggled:boolean

}


export default class Main extends PureComponent {
  state:MainState
  constructor(){
    super()
    this.state={appear:false, sidebarToggled:false}
  }
  render() {
    return (
  <div className="main-container">

<div className="navbar-inverse">
<button className="btn" onClick={()=>{this.setState({sidebarToggled:!this.state.sidebarToggled})}}>Click For More Content ></button>

</div>
{this.state.sidebarToggled?
 <div className="sidebar-wrapper">
            <ul className="sidebar-nav">
               
                <li>
                    <a href="#">Dashboard</a>
                </li>
                <li>
                    <a href="#">Shortcuts</a>
                </li>
                <li>
                    <a href="#">Overview</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
</div>:null}
<div className={this.state.sidebarToggled?"wrapper toggled":"wrapper"}>

        <CSSAnimation
      name='hello'
      iterationCount={1}
      duration={2000}
      onEnd={() => {this.setState({appear:true})}}>
          <h1 className="Hello">Hello</h1>
        </CSSAnimation>
      <CSSAnimation
      name="welcome"
      iterationCount={1}
      playState={this.state.appear?"running":"paused"}
      duration={1500}>
        <h2 className="welcome">Welcome To My Playground </h2>
        <CSSAnimation
      name="sss"
      iterationCount={1}
      playState={this.state.appear?"running":"paused"}
      duration={1000}>
    <h2 className="welcome">This is where i come to play with code and stuff<br/>
    Everything here is made using react, bootstrap and css, i aim it to be a single page...</h2>
            </CSSAnimation>
        </CSSAnimation>
        <div className="row">
<CSSAnimation name="button"
infinite
duration={500}>
<button>Click Me If You Can </button>
</CSSAnimation>
</div>
</div>
</div>
    )
  }
}


