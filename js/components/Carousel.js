/**
 * Created by chenjun on 2017/7/3.
 */
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../views/style.css';
import styles_slider from '../views/slider.css';
class Carousel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            img:['1.jpg','2.jpg','3.jpg','4.jpg'],
            current:0, //当前索引
            prev:3
        }
    }
    changeImg(direction){
        const { current,prev } = this.state;
        let diffvalue = null;
        if (-1<current && current<4) {
            if(direction === "left" && current===0){
                return this.setState({
                    current:3,
                    prev:current
                })

            }if(direction === "right" && current===3){
                return this.setState({
                    current:0,
                    prev:current
                })
            }
            diffvalue = direction === "left" ? current - 1 : current + 1;
            console.log("run " + current);
        }
            this.setState({
                current:diffvalue,
                prev:current
            })
    }

    render(){
        return(
            <div>
                <div id="" className="slider" styleName="swipe">
                    <ul>
                        {this.state.img.map((v,i,arr)=>(
                            <li key={v} style={this.state.current===i?{display:"block"}:{display:"none"}}>
                                <div>
                                    <img styleName="swipe-img" src={require("../images/slider/"+v)} alt="img"/>
                                    <p styleName="swipe-text">{v}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <a  styleName="next-but-swipe" onClick={this.changeImg.bind(this,"right")}>
                    <img width="30" src={require("../images/slider/next.png")} alt="img"/>
                </a>
                <a  styleName="prev-but-swipe" onClick={this.changeImg.bind(this,"left")}>
                    <img width="30" src={require("../images/slider/prev.png")} alt="img"/>
                </a>
                <h3 styleName="slider-heading">陈俊</h3>
                <p styleName="slider-text">男|2年工作经验|1992年8月|未婚|现居住于湖南长沙|大专 </p>
            </div>
        )
    }
}
Carousel.defaultProps = {

}
export default CSSModules(Carousel,styles,{allowMultiple: true});
