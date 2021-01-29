import React, {Component} from 'react'

class Day12 extends Component{
    constructor(){
        super()
        this.state ={
            firstName : '',
            lastName : '' ,
            country : '',
            title : '',
            isSubmitted : false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        const {name, value} = e.target 
        this.setState({
            [name] : value
        })

    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({
            isSubmitted : !this.state.isSubmitted
        })
    }

    render(){
        const {firstName, lastName, country, title} = this.state
        return(
            <div className='App'>
                <h3>Add Student</h3>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                    type='text'
                    name='firstName'
                    placeholder='First Name'
                    value={firstName}
                    onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input
                    type='text'
                    name='lastName'
                    placeholder='Last Name'
                    value={lastName}
                    onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input
                    type='text'
                    name='country'
                    placeholder='Country'
                    value={country}
                    onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input
                    type='text'
                    name='title'
                    placeholder='Title'
                    value={title}
                    onChange={this.handleChange}
                    />
                </div>

                <button class='btn btn-success'>Submit</button>
                </form>
                <div>
                    {this.state.isSubmitted ?
                    <>
                    <h1>Name : {firstName} {lastName}</h1>
                    <h1>Country : {country}</h1>
                    <h1>Title : {title}</h1>
                    </> :
                    null}
                </div>
            </div> 
        )
    }
}

export default Day12