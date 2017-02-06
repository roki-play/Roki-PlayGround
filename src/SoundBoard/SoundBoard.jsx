//@flow
import React,{Component} from 'react'
import {PlayButton} from './SoundBoardComponents/Reusables.jsx'
import '../css/SoundBoard.css'
type SoundboardProps={

}
type SoundBoardState={
play:boolean
}


export default class SoundBoard extends Component{
props:SoundboardProps
state:SoundBoardState
constructor(){
    super()
    this.state={play:true}
}

render(){
    return(

        <div>pal<PlayButton play={this.state.play} exportCLick={()=>{this.setState({play:!this.state.play})}} /></div>
    )
}




}

