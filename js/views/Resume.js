/**
 * Created by chenjun on 2017/6/30.
 */
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../views/style.css';
import styles_slider from '../views/slider.css';
import Head from './Head.js';
import Footer from './Footer.js';
class Resume extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div styleName="main-wrapper">
                <Head />
                <div styleName="decoration"></div>

                <div styleName="container" >
                    <h3 styleName="container-title">精通</h3>
                    <p styleName="full-width">
                        1.  Javascript：原生、ES6/7（js最新版）<br />
                        2.	html5：新特性<br />
                        3.	css3：交互<br />
                        4.	Google Chrome DevTools:断点debug、分析网页性能短板<br />
                        5.	jQuery库：会开发插件<br />
                        6.	页面布局：Flex、Rem、media响应式<br />
                        7.	游览器兼容<br />
                    </p>
                </div>

                <div styleName="decoration"></div>
                <div styleName="container" >
                    <h3 styleName="container-title">熟悉</h3>
                    <p styleName="full-width">
                        1.	React框架： Redux/React-Redux、React-Router/ React-Router-Redux、Immuteble、react-css-modules、ReactCSSTransitionGroup/react-motion/react-smooth、pure-render等常用技术栈<br />
                        2.	打包：Webpack、babel<br />
                        3.	编辑器：webstorm、sublime<br />
                        4.	UI库：Bootstrap<br />
                        5.	交互：svg、cavans<br />
                        6.	其它软件：git、cssgaga、httpwatch、Fireworks、dedecms。<br />
                        7.	其它：设计模式、面向对象思想、Ajax、fetch<br />
                    </p>
                </div>
                <div styleName="decoration"></div>
                <div styleName="container" >
                    <h3 styleName="container-title">了解</h3>
                    <p styleName="full-width">
                        1.	Php：能看懂语法及常用函数。<br />
                        2.	MySQL：知道一些SQL语句。<br />
                        3.	Nodejs：跑过一些demo。<br />
                        4.	设计软件：PS、AI<br />
                        5.	h5builder: 跑过一些app demo。<br />
                    </p>
                </div>
                <div styleName="decoration"></div>
                <div styleName="container" >
                    <h3 styleName="container-title">软技能</h3>
                    <p styleName="full-width">
                        1.	在工作中比较关注新技术、业界新闻。<br />
                        2.	开发时注重代码性能、可维护性、工程化、组件化。<br />
                        3.	会用google搜索英文资料。<br />
                        4.	以上技能都是我个人自学的，平时也勤于思考，所以善于独立解决问题，也对工作挑战充满信心。<br />
                    </p>
                </div>
                <div styleName="decoration"></div>
                <Footer />
            </div>
        )
    }
}


export default CSSModules(Resume,styles,{allowMultiple: true});
