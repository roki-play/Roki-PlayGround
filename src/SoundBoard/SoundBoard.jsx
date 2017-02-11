//@flow
import React,{Component} from 'react'
import {PlayButton} from './SoundBoardComponents/Reusables.jsx'
import webaudio from 'webaudio'
import '../css/SoundBoard.css'
type SoundboardProps={

}
type SoundBoardState={
selected:number,
playing:boolean,
frequency:number
}
var fakeitems=[
    {name:"item",link:"none"},
    {name:"item",link:"none"},
    {name:"item",link:"none"},
    {name:"item",link:"none"},
]

export default class SoundBoard extends Component{
props:SoundboardProps
state:SoundBoardStateitem
constructor(){
    super()
    this.state={selected:0}
}
   tau = Math.PI * 2
   frequency = 440
;

     
 channel = webaudio((time, i)=>{
  return Math.sin(time * this.tau * this.frequency)
})
render(){

this.state.playing?this.channel.play():this.channel.stop()



  

    return(
<div>
<span>
Set frequency:
<input/>
</span>

<PlayButton play={this.state.playing?true:false} exportCLick={(buttonKey)=>{this.setState({playing:!this.state.playing})}}/>  

 </div>
    )
}




}

