/**
 * Created by chenjun on 2017/6/30.
 */
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../views/style.css';
import styles_slider from '../views/slider.css';
import Head from './Head.js';
import Footer from './Footer.js';
class Work extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div styleName="main-wrapper">
                <Head />
                <div styleName="decoration"></div>

                <div styleName="container" >
                    <h3 styleName="container-title">湖南联晶网络科技有限公司</h3>
                    <p styleName="full-width">
                        时间：2016/01 - 2017/07 <br />
                       任职：前端开发工程师 <br />
                    </p>
                </div>

                <div styleName="decoration"></div>
                <div styleName="container" >
                    <h3 styleName="container-title">湖南工程职业技术学院</h3>
                    <p styleName="full-width">
                       时间：2011/09 - 2014/07<br />
                        专业：工程造价<br />
                    </p>
                </div>
                <div styleName="decoration"></div>
                <div styleName="container" >
                    <h3 styleName="container-title">其它作品</h3>
                    <p styleName="full-width">
                        湖南联晶网络科技公司官网：<a style={{color:"white"}} href="http://www1.9669.cn/2017621test/#1F ">http://www1.9669.cn/2017621test/#1F </a><br />
                        flash小游戏：<br />
                        <a style={{color:"white"}} href="http://www4202.9669.cn/">http://www4202.9669.cn/ </a><br />
                        <a style={{color:"white"}} href="http://www.7399.com/ ">http://www.7399.com/</a><br />
                        <a style={{color:"white"}} href="http://www.4399j.com/ ">http://www.4399j.com/ </a><br />
                        <a style={{color:"white"}} href=" http://www.2344.com/"> http://www.2344.com/</a><br />
                        <a style={{color:"white"}} href=" http://www.7323.com/"> http://www.7323.com/</a>
                    </p>
                </div>
                <div styleName="decoration"></div>
                <Footer />
            </div>
        )
    }
}


export default CSSModules(Work,styles,{allowMultiple: true});
