import React, {Component} from 'react'

class Day9 extends Component {
    constructor(){
        super()
        let d = new Date()
        this.state = {
            month : d.getMonth(),
            hour : d.getHours(),
            isLoading : true
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoading : !this.state.isLoading
            })
        }, 2000)
    }


    render(){
        console.log(this.state.hour)
        const springStyle={
            backgroundColor : "#a3ddcb"
        }
        const summerStyle={
            backgroundColor : "red"
        }
        const autumnStyle={
            backgroundColor : "blue"
        }
        const winterStyle={
            backgroundColor : "green"
        }

        return(
            <>
               {this.state.isLoading ? <h1>Loading...</h1> :
                <>
                {this.state.month < 4 ?
                    <h1 style={springStyle}>Hello, it is Spring season now!</h1> :
                    <>{this.state.month < 8 ?
                        <h1 style={summerStyle}>Hello, it is Summer season now!</h1> :
                        <>{this.state.month < 12 ? 
                            <h1 style={autumnStyle}>Hello, it is Autumn season now!</h1> : 
                            <h1 style={winterStyle}>Hello, it is Winter season now!</h1>}</>
                        }</>
                    }
                    {0 < this.state.hour && this.state.hour < 10 ?
                        <h1>Good Morning</h1> :
                        <>{10 < this.state.hour && this.state.hour < 18 ?
                            <h1>Good Afternoon</h1> :
                            <h1>Good Night</h1>
                            }</>
                    }
                    </>
                }
            </>
        )
    }


}

export default Day9