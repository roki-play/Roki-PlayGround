//@flow
import React, { PureComponent, Element } from 'react'
import CSSAnimation from 'react-css-animations' 
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SideBar from '../components/SideBar.jsx'
import {Navbar,NavbarToggler,NavbarBrand} from 'reactstrap'
import Drawing from '../Assets/Logo.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/main.css'
import '../css/font-awesome-4.7.0/font-awesome-4.7.0/css/font-awesome.min.css'
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

<div className="navbar navbar-inverse">
 <span>
<button className="toggler" onClick={()=>{this.setState({sidebarToggled:!this.state.sidebarToggled})}}><img height="25px" width="25px" src={Drawing}/></button>
<a className="homelink" href="/hello">Back Home</a>
 </span>
</div>
{this.state.sidebarToggled?
 <SideBar/>
 :null}
<div className={this.state.sidebarToggled?"wrapper toggled":"wrapper"}>
   {this.props.children}
       </div>
</div>
    )
  }
}


