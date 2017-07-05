/**
 * Created by chenjun on 2017/6/30.
 */
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';
import {Link} from 'react-router-dom';
const Footer = ()=>(
    <div styleName="footer">
        <p styleName="left-text">工作努力、团结合作、最佳实践</p>
        <p styleName="right-text">2017.7</p>
    </div>
)
export default CSSModules(Footer,styles,{allowMultiple: true});