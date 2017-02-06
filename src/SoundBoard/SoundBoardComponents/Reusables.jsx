//@flow
import React from 'react';
import CSSAnimation from 'react-css-animations'
type PlayButtonProps={
play:boolean,
exportCLick:(play:boolean)=>void,
buttonKey:number
}


type SoundTableProps={
items:{name:string,link:string}[],
itemsPerColumn?:number,

}
export function PlayButton(props:PlayButtonProps){
  
    return(
        <div className="play-border" >
        <span className="play-border">
  
        <div className="col-sm-3 play-border" onClick={()=>props.exportCLick(props.buttonKey)}>         
            <i className={props.play===true?"fa fa-play green":"fa fa-play"} />
     <div className="col-sm-3">
    test
    
      </div>
    
  </div>
  </span>
</div>
    )
}

export function SoundTable(props:SoundTableProps){
let Rows=[]
let Cols=[]
let itemsPerColumn=props.itemsPerColumn?props.itemsPerColumn:6
/* multi col...todo....
for (let i=0;i<itemsPerColumn;i++){
props.items[i]?
Rows.push(<td>{props.items[i].name}</td>)
:null
}
*/
props.items.forEach(
    item=>{
        Rows.push(<td><PlayButton play={false} exportCLick={(play)=>{this.play=!this.play}}/>{item.name}</td>)
    }
)


}