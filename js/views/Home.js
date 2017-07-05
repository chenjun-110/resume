/**
 * Created by chenjun on 2017/6/30.
 */
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.css';
import styles_slider from './slider.css';
import {Link} from 'react-router-dom';
import Head from './Head.js';
import Footer from './Footer.js';
import Carousel from '../components/Carousel.js';
const Home = ()=>(
    <div styleName="main-wrapper">
        <Head />
        <div styleName="decoration"></div>
        <Carousel />
        <div styleName="decoration"></div>
        <div styleName="copyrights">Collect from <a href="http://www.cssmoban.com/"  title="网站模板">网站模板</a></div>
        <div styleName="container">
            <div>
                <h3 styleName="column-title">联系方式</h3>
                <p styleName="column-text">
                    <span styleName="column-icon icon iphone"></span>
                    手机：15874137662 <br />
                    E-mail：357201017@qq.com
                </p>
                <div styleName="clear"></div>
            </div>
        </div>
        <div styleName="container">
            <div>
                <h3 styleName="column-title">本项目详情</h3>
                <p styleName="column-text">
                    <span styleName="column-icon icon android"></span>
                    是用高性能的React框架全家桶所写 <br />
                    css部分进行了模块化处理，小图片做了base64处理。
                </p>
                <div styleName="clear"></div>
            </div>
        </div>

        <div styleName="decoration"></div>
       <Footer />

    </div>
)
export default CSSModules(Home,styles,{allowMultiple: true});