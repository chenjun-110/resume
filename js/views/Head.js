/**
 * Created by chenjun on 2017/6/30.
 */
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';
import {Link} from 'react-router-dom';
const Head = ()=>(
        <div styleName="container">
            <div styleName="logo-section">
                <h4 styleName="second-logo">陈俊</h4>
                <p styleName="sub-logo">个人简历</p>
            </div>
            <div styleName="go-home-section">
                <a href="index.html"><img styleName="go-home-image replace-2x" width="32" src={require("../images/icons/home.png")} alt="img" /></a>
                <a styleName="go-home-href" href="index.html">回到最初</a>
            </div>
            <div styleName="clear"></div>
        </div>
)
export default CSSModules(Head,styles,{allowMultiple: true});