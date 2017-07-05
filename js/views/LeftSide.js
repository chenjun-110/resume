/**
 * Created by chenjun on 2017/6/30.
 */
import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './style.css';
class LeftSide extends React.Component {
    render() {
        const { display } = this.props;
        return (
            <div styleName="left-side" style={{display: display}}>
                <img styleName="logo replace-2x" width="150" src={require("../images/logo.png")} alt="img"/>
                <div styleName="clear"></div>
                <img styleName="phon-icon replace-2x" width="17" src={require("../images/nav/phone.png")} alt="img"/>
                <div styleName="clear"></div>
                <img styleName="mail-icon replace-2x" width="17" src={require("../images/nav/mail.png")} alt="img"/>
            </div>
        )
    }
}
export default CSSModules(LeftSide,styles,{allowMultiple: true});
//export default LeftSide;