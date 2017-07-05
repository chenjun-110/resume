/**
 * Created by chenjun on 2017/6/30.
 */
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../views/style.css';
import styles_slider from '../views/slider.css';
import Head from './Head.js';
import Footer from './Footer.js';
class About extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            imglist:['001.jpg','002.jpg','003.jpg','004.jpg','005.jpg','006.jpg','007.jpg','008.jpg','009.jpg'],
        }
    }
    render(){
        return(
            <div styleName="main-wrapper">
                <Head />
                <div styleName="decoration"></div>

                <div styleName="container" >
                    <h3 styleName="container-title">图片画廊</h3>
                    <p styleName="full-width">大量。。。</p>
                </div>

                <div styleName="decoration"></div>

                <div styleName="container">
                    <ul className="gallery" styleName="gallery">
                        {
                            this.state.imglist.map((v)=>{
                                return(
                                    <li key={v}><a href={"js/images/swype/full/"+v}>
                                        <img src={require("../images/swype/thumb/"+v)} alt="Caption Title One" />
                                    </a></li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div styleName="decoration"></div>
                <Footer />

            </div>
        )
    }
}


export default CSSModules(About,styles,{allowMultiple: true});
