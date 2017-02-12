//@flow
import React,{Component} from 'react'
import * as osc from 'oscillators'
import webaudio from 'webaudio'
import Icon from 'react-icon'
import '../css/SoundBoard.css'


type LittleSynthProps={

}
type LittleSynthState={
waveType:number,
playing:{saw:boolean,sine:boolean,square:boolean,triangle:boolean},
frequency:number,
channelSineTo:{triangle:number,square:number,saw:number},
channelSawTo:{triangle:number,square:number,sine:number},
channelSquareTo:{triangle:number,sine:number,saw:number},
channelTriangleTo:{sine:number,square:number,saw:number}
}

export default class LittleSynth extends Component{
props:LittleSynthProps
state:LittleSynthState
constructor(){
    super()
    this.state={selected:0, frequency:440, playing:{sine:false,square:false,saw:false,triangle:false},
                                            channelSineTo:{triangle:0,square:0,saw:0},
                                            channelSawTo:{triangle:0,square:0,sine:0},
                                            channelSquareTo:{triangle:0,sine:0,saw:0},
                                            channelTriangleTo:{sine:0,square:0,saw:0}
}
}
  
 
channelSaw = webaudio((t, i)=>{
this.state.channelSawTo.sine= osc.sine(t, this.state.frequency)
this.state.channelSawTo.square= osc.sine(t, this.state.frequency)
this.state.channelSawTo.triangle= osc.sine(t, this.state.frequency)
return osc.saw(t, this.state.frequency*(this.state.channelSineTo.saw>0?this.state.channelSineTo.saw:1)*
(this.state.channelSquareTo.saw>0?this.state.channelSquareTo.saw:1)*(this.state.channelTriangleTo.saw>0?this.state.channelTriangleTo.saw:1)
)



   
})
channelSine = webaudio((t, i)=>{
this.state.channelSineTo.saw= osc.sine(t, this.state.frequency)
this.state.channelSineTo.square= osc.sine(t, this.state.frequency)
this.state.channelSineTo.triangle= osc.sine(t, this.state.frequency)
return osc.saw(t, this.state.frequency*(this.state.channelSawTo.sine>0?this.state.channelSawTo.sine:1)*
(this.state.channelSquareTo.sine>0?this.state.channelSquareTo.sine:1)*(this.state.channelTriangleTo.sine>0?this.state.channelTriangleTo.sine:1)
)
})
channelSquare = webaudio((t, i)=>{
    this.state.channelSquareTo.saw= osc.sine(t, this.state.frequency)
this.state.channelSquareTo.sine= osc.sine(t, this.state.frequency)
this.state.channelSquareTo.triangle= osc.sine(t, this.state.frequency)
return osc.saw(t, this.state.frequency*(this.state.channelSineTo.square>0?this.state.channelSineTo.square:1)*
(this.state.channelSawTo.square>0?this.state.channelSawTo.square:1)*(this.state.channelTriangleTo.square>0?this.state.channelTriangleTo.square:1)
)
})
channelTriangle = webaudio((t, i)=>{
    this.state.channelTriangleTo.saw= osc.sine(t, this.state.frequency)
this.state.channelTriangleTo.square= osc.sine(t, this.state.frequency)
this.state.channelTriangleTo.sine= osc.sine(t, this.state.frequency)
return osc.saw(t, this.state.frequency*(this.state.channelSineTo.triangle>0?this.state.channelSineTo.triangle:1)*
(this.state.channelSquareTo.triangle>0?this.state.channelSquareTo.triangle:1)*(this.state.channelSawTo.triangle>0?this.state.channelSawTo.triangle:1)
) 
})




render(){

    return(
            <div className="container fluid">
                <h1> Little Synth:::For now it works only on desktop browser :/</h1><br/>
                <h3>ADDED SOME FREQUENCY MODULATION.....<br/>PLAY MORE WAVES AT ONCE TO SEE THE RESULT :)</h3>
           
               
                       
                <h6>Frequency Level: {this.state.frequency}</h6>
                <h6>Set frequency:  </h6>    
     
           
        
                    <input value={this.state.frequency} type="range" min={220} max={1000} 
                                                    onChange={(e)=>{
                                                                this.setState({
                                                                    frequency:e.target.value
                                                                })
                                                            }
                                                    }
                    />

          
     
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

