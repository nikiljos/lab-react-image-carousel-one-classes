import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(){
        super();
        this.state={
            currentSlide:0,
        }
    }
    
    changeImage(isForward){
        this.setState((prevState)=>{
            let next=prevState.currentSlide;
            next=isForward?next+1:next-1;
            if(next<0){
                next=0;
            }
            else if(next>2){
                next=2;
            }
            return {
                currentSlide: next,
            };
        })
    }

    render(){
        let data=images[this.state.currentSlide]
        return (
            <div className="Carousel">
                <button onClick={() => this.changeImage(false)} className="back"> <ArrowBackIosIcon sx={{ color:"#ffffff",fontSize: 30, padding:"5px" }}/> </button>
                <button onClick={() => this.changeImage(true)} className="forward"> <ArrowForwardIosIcon sx={{ color:"#ffffff",fontSize: 30, padding:"5px" }}/> </button>

                <div className="content">
                    <h1 className="overlay">{data.title}</h1>
                    <h3 className="overlay">{data.subtitle}</h3>
                    <img src={data.img} alt="" />
                </div>
            </div>
        );
    }
}

export default Carousel;