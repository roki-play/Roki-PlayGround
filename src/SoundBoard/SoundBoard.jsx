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
playing:{saw:boolean,sine:boolean,square:boolean,triangle:boolean},
frequency:number
}

export default class SoundBoard extends Component{
props:SoundboardProps
state:SoundBoardState
constructor(){
    super()
    this.state={selected:0, frequency:440, playing:{sine:false,square:false,saw:false,triangle:false}}
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




render(){

    return(
            <div>
                <h3> Little Synth:::For now it works only on desktop browser :/</h3>
           
                      
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
                <h4>SINE:</h4>

                <button onClick={()=>{!this.state.playing.sine?
                                        this.channelSine.play():
                                        this.channelSine.stop();
                                    this.setState({playing:{triangle:this.state.playing.triangle,
                                                            square:this.state.playing.square,
                                                            saw:this.state.playing.saw,
                                                            sine:!this.state.playing.sine}})
                                    }}>
                    <Icon glyph={this.state.playing.sine?"pause":"play"} />
                </button>
                 <h4>SAW:</h4>

                 <button onClick={()=>{!this.state.playing.saw?
                                        this.channelSaw.play():
                                        this.channelSaw.stop();
                                    this.setState({playing:{triangle:this.state.playing.triangle,
                                                            square:this.state.playing.square,
                                                            saw:!this.state.playing.saw,
                                                            sine:this.state.playing.sine}})
                                    }}>
                    <Icon glyph={this.state.playing.saw?"pause":"play"} />
                </button> 
                <h4>SQUARE:</h4>

                <button onClick={()=>{!this.state.playing.square?
                                        this.channelSquare.play():
                                        this.channelSquare.stop();
                                    this.setState({playing:{triangle:this.state.playing.triangle,
                                                            square:!this.state.playing.square,
                                                            saw:this.state.playing.saw,
                                                            sine:this.state.playing.sine}})
                                    }}>
                    <Icon glyph={this.state.playing.square?"pause":"play"} />
                </button> 
                                
                <h4>TRIANGLE:</h4>

                <button onClick={()=>{!this.state.playing.triangle?
                                        this.channelTriangle.play():
                                        this.channelTriangle.stop();
                                    this.setState({playing:{triangle:!this.state.playing.triangle,
                                                            square:this.state.playing.square,
                                                            saw:this.state.playing.saw,
                                                            sine:this.state.playing.sine}})
                                    }}>
                    <Icon glyph={this.state.playing.triangle?"pause":"play"} />
                </button> 

                
                 
               
            </div>
    )
}




}

