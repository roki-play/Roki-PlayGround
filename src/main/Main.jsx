//@flow
import React, { PureComponent, Element } from 'react'
import CSSAnimation from 'react-css-animations' 
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SideBar from '../components/SideBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/main.css'
type MainProps = {
 
}
type MainState = {
appear:boolean,
sidebarToggled:boolean,
pauseButton:boolean
}


export default class Main extends PureComponent {
  state:MainState
  constructor(){
    super()
    this.state={appear:false,pauseButton:true ,sidebarToggled:false}
  }
  render() {
    return (
  <div className="main-container">

<div className="navbar-inverse">
<button className="btn" onClick={()=>{this.setState({sidebarToggled:!this.state.sidebarToggled})}}>Click For More Content ></button>

</div>
{this.state.sidebarToggled?
 <SideBar/>
 :null}
<div className={this.state.sidebarToggled?"wrapper toggled":"wrapper"}>

        <CSSAnimation
      name='hello'
      iterationCount={1}
      duration={2000}
      onEnd={() => {this.setState({appear:true})}}>
          <h1 className="hello">Hello</h1>
        </CSSAnimation>
      <CSSAnimation
      name="welcome"
      iterationCount={1}
      playState={this.state.appear?"running":"paused"}
      duration={1500}>
        <h2 className="welcome">Welcome To My Playground </h2>
        <CSSAnimation
      name="contentLink"
      iterationCount={1}
      playState={this.state.appear?"running":"paused"}
      duration={1000}>
    <h2 className="contentLink">This is where i come to play with code and stuff<br/>
    All the code for this project is stored <a href="https://github.com/roki-play/Roki-PlayGround">here</a><br/></h2>
                      <CSSAnimation
                        name="haveFun"
                        iterationCount={1}
                        playState={this.state.appear?"running":"paused"}
                        duration={2500}>
                        <h2 className="haveFun">HAVE FUN !!!!!!!!</h2>
                    </CSSAnimation>
            </CSSAnimation>
            CLick :=)------>>>>>
        </CSSAnimation>
     <div className="container center">
        <CSSAnimation name="button"
        infinite
        playState={this.state.pauseButton?"running":"paused"}
        duration={1500}>   
        <button onClick={()=>this.setState({
            pauseButton:!this.state.pauseButton
        })} className="btn-primary">Click Me If You Can :P</button>
</CSSAnimation>
</div>
       </div>
</div>
    )
  }
}


