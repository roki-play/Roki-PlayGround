//@flow
import React,{Component} from 'react'
import * as osc from 'oscillators'
import webaudio from 'webaudio'
import Icon from 'react-icon'
import '../css/SoundBoard.css'

const WaveTypes={
    sine:1,
    saw:2,
    square:3,
    triangle:4
}
type SoundboardProps={

}
type SoundBoardState={
waveType:number,
playing:boolean,
frequency:number
}

export default class SoundBoard extends Component{
props:SoundboardProps
state:SoundBoardState
constructor(){
    super()
    this.state={selected:0, frequency:440, waveType:WaveTypes.sine}
}
  
 
channelSaw = webaudio((t, i)=>{
return osc.saw(t, this.state.frequency)  
})
channelSine = webaudio((t, i)=>{
return osc.sine(t, this.state.frequency)
})
channelSquare = webaudio((t, i)=>{
return osc.square(t, this.state.frequency)
})
channelTriangle = webaudio((t, i)=>{
return  osc.triangle(t, this.state.frequency) 
})

stopOsc(state){
    switch (state){
    case WaveTypes.saw:this.channelSaw.stop()
    break
    case WaveTypes.sine:this.channelSine.stop()
    break
    case WaveTypes.square:this.channelSquare.stop()
    break
    case WaveTypes.triangle:this.channelTriangle.stop()
    break
    
}
this.setState({playing:false})
}


render(){

    return(
            <div>
                <h3> Little Synth:::For now it works only on desktop browser :/</h3>
           
                        <h6>Select Wave Type</h6>  
                        <select onChange={(e)=>{this.stopOsc(this.state.waveType);this.setState({waveType:e.target.value})}}>
                            <option value={WaveTypes.sine}>Sine</option>
                            <option value={WaveTypes.saw}>Saw</option>
                            <option value={WaveTypes.square}>Square</option>
                            <option value={WaveTypes.triangle}>Triangle</option>
                        </select>
              
                <h6>Frequency Level: {this.state.frequency}</h6>
                <h6>Set frequency:  </h6>    
                <span className="FreqSlidebar" >
                    <input type="range" min={220} max={1000} 
                                                    onChange={(e)=>{
                                                                this.setState({
                                                                    frequency:e.target.value
                                                                })
                                                            }
                                                    }
                    />
                </span>
                 <h6>{this.state.playing?"Pause":"Play"}!!  </h6>
               {this.state.waveType===WaveTypes.sine?<button onClick={()=>{!this.state.playing?this.channelSine.play():this.channelSine.stop();this.setState({playing:!this.state.playing})}}>
                    <Icon glyph={this.state.playing?"pause":"play"} />
                </button> :null}

                {this.state.waveType===WaveTypes.saw?<button onClick={()=>{!this.state.playing?this.channelSaw.play():this.channelSaw.stop();this.setState({playing:!this.state.playing})}}>
                    <Icon glyph={this.state.playing?"pause":"play"} />
                </button> :null}

                {this.state.waveType===WaveTypes.square?<button onClick={()=>{!this.state.playing?this.channelSquare.play():this.channelSquare.stop();this.setState({playing:!this.state.playing})}}>
                    <Icon glyph={this.state.playing?"pause":"play"} />
                </button> :null}

                {this.state.waveType===WaveTypes.triangle?<button onClick={()=>{!this.state.playing?this.channelTriangle.play():this.channelTriangle.stop();this.setState({playing:!this.state.playing})}}>
                    <Icon glyph={this.state.playing?"pause":"play"} />
                </button> :null}
               
            </div>
    )
}




}

