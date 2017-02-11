//@flow
import React, {PureComponent} from 'react'

import Logo from '../Assets/Logo.png'
 
export default class Hello extends PureComponent{


    render(){
        return(
            <div className="hello-wrapper">
                <img src={Logo}/>
                <h2>Welcome To My Playground </h2>
                <h3>    This is where i come to play with code and stuff<br/>
                        All the code for this project is stored  <a target="_blank" 
                                                                href="https://github.com/roki-play/Roki-PlayGround">
                                                                here
                                                                </a><br/>
                       
                        HAVE FUN !!!!!!!!
                </h3>
               

           
            </div>
        )

    }
}