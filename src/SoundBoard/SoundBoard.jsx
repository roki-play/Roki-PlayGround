//@flow
import React,{Component} from 'react'
import {PlayButton} from './SoundBoardComponents/Reusables.jsx'
import '../css/SoundBoard.css'
type SoundboardProps={

}
type SoundBoardState={
selected:number
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

render(){
    let i=0
    let Rows=[]
          fakeitems.forEach(
    item=>{
        Rows.push(<tr><td key={i}><PlayButton buttonKey={i} play={this.state.selected==i?true:false} exportCLick={(buttonKey)=>{this.setState({selected:buttonKey})}}/>{item.name}</td></tr>)
        i++
    }
)

    return(
<div>{Rows} 
    MORE SOON!!!      </div>


    )
}




}

