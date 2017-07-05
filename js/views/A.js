import React from 'react';
import LeftSide from './LeftSide.js';
import RightSide from './RightSide.js';
class A extends React.Component{
    constructor(){
        super();
        this.hide = this.hide.bind(this);
        this.state = {
            hide:true,
        }
    }
    hide(){
        this.setState({hide:false})
    }

    render(){
        const { hide } = this.state;
        const display = hide ? "block":"none";
        return(
            <div style={{position:"relative",zIndex:9999}}>
                <LeftSide display={display}/>
                <RightSide hide={this.hide} sidebar={hide}/>
            </div>
        )
    }
}
export default A;