/**
 * Created by chenjun on 2017/6/30.
 */
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';
import {Link} from 'react-router-dom';
class RightSide extends React.Component {
    constructor(p){
        super(p);
        this.state = {width:"1"}
    }
    showSideBar(){
        this.props.hide()
    }
    fangDa(){
        this.setState({width:""})
    }
    suoXiao(){
        this.setState({width:"10px"})
    }
    render(){
        const { sidebar } = this.props;
        const { width } = this.state;
        const width10 = sidebar ? "" : width;
        return(
            <div styleName="right-side" style={{width:width10}} className={sidebar ? "":"sidebar"} onMouseEnter={this.fangDa.bind(this)} onMouseLeave={this.suoXiao.bind(this)}>
                <ul styleName="navigation">
                    <li styleName="navigation-item"><Link to="/home" onClick={this.showSideBar.bind(this)}>Home</Link></li>
                    <li styleName="navigation-item"><Link to="/about" onClick={this.showSideBar.bind(this)}>About</Link></li>
                    <li styleName="navigation-item"><Link to="/resume" onClick={this.showSideBar.bind(this)}>Resume</Link></li>
                    <li styleName="navigation-item"><Link to="/work" onClick={this.showSideBar.bind(this)}>Work</Link></li>
                    <li styleName="navigation-item"><Link to="/contact" onClick={this.showSideBar.bind(this)}>Contact</Link></li>
                </ul>
                <ul styleName="contact-footer">
                    <li><a href="tel:+1 23 4567 890">拨打电话!</a></li>
                    <li><a href="mailto:357201017@qq.com">请发邮件给我!</a></li>
                </ul>
            </div>
        )
    }
}
export default CSSModules(RightSide,styles,{allowMultiple: true});
//export default RightSide;