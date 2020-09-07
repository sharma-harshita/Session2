import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            employeeFeedback: [],
            name: "",
            contact: ""
        }
    }

    handleChange = (event) => {
        console.log(event.target);
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit = (event) => {
        // employeeFeedback= [{"name":"prepbytes", "contact":"123456"}, {"name":"prepbytes", "contact":"123456"}]
        event.preventDefault()
        const tempArray = [...this.state.employeeFeedback]
        tempArray.push({ "name": this.state.name, "contact": this.state.contact })
        this.setState({ employeeFeedback: tempArray , name:"", contact:""})
    }

    render() {
        return (
            <div>
                <h1>EMPLOYEE FEEDBACK FORM</h1>
                <form onSubmit={this.handleSubmit}>
                    Name :
                    <input type="text" id="name" value={this.state.name} onChange={this.handleChange} />
                    Contact :
                    <input type="text" id="contact" value={this.state.contact} onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
                {this.state.employeeFeedback.map((value, index) => {
                    return (
                        <div key={index}>
                            {value.name} 
                            <br/>
                            {value.contact}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Form;


