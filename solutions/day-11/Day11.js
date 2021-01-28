import React, {Component} from 'react'

export default class Day11 extends Component{
    constructor(){
        super()
        this.state = {
            left : "100px",
            top : "200px",
            score : 0

        }
        this.handleMouseOver = this.handleMouseOver.bind(this)
    }

    handleMouseOver(){
        this.setState({
            left : Math.ceil(Math.random() * 2000),
            top : Math.ceil(Math.random() * 900),
            score : this.state.score + 1
        })
    }
    

    render(){
        const style = {
            backgroundColor : "red",
            width : "250px",
            height : "250px",
            position : "relative",
            left : this.state.left,
            top : this.state.top
        }
        return(
            <>
                <h1>Score : {this.state.score}</h1>
                <div style={style} onMouseOver={this.handleMouseOver}>
                    <h1>Catch ME!</h1>
                </div>
            </>
        )
    }
       
    
}