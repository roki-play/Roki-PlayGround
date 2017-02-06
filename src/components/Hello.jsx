//@flow
import React, {PureComponent, Element} from 'react'
import CSSAnimation from 'react-css-animations' 
import Logo from '../Assets/Logo.png'
export default class Hello extends PureComponent{


    render(){
        return(
            <div>
                                <img src={Logo}/>
                <h2>Welcome To My Playground </h2>
                <h3>    This is where i come to play with code and stuff<br/>
                        All the code for this project is stored 
                            <a href="https://github.com/roki-play/Roki-PlayGround"> here</a><br/>
                        HAVE FUN !!!!!!!!
                </h3>
               

           
            </div>
        )

    }
}