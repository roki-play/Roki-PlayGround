//@flow
import React from 'react';
import CSSAnimation from 'react-css-animations'
type PlayButtonProps={
play:boolean,
exportCLick:(play:boolean)=>void,
title?:string
}

export function PlayButton(props:PlayButtonProps){
  
    return(
        <div className="play-border" >
        <span className="play-border">
  
        <div className="col-sm-3 play-border" onClick={()=>props.exportCLick(props.play)}>
            <CSSAnimation
                name="PlayAnimation"
                infinite
                playState={props.play?"running":"paused"}
                duration={1500}>
                    <i className={props.play===true?"fa fa-play green":"fa fa-play"} />
            </CSSAnimation>

     <div className="col-sm-3">
    test
    
      </div>
    
  </div>
  </span>
</div>
    )
}

