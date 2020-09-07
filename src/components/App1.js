import React from 'react';
import Child from './Child';

class App1 extends React.Component {
    constructor(props) {
        super(props)
        console.log("In constructor");
    }
    state = {
        a: 1,
        name: "Parent",
        showChild: true
    }

    componentDidMount() {
        console.log("In componentDidMount");
    }

    componentDidUpdate() {
        console.log("In componentDidUpdate");
    }

    onClickhandler = () => {
        this.setState({ a: this.state.a + 1 })
    }

    displayName = (value) => {
        this.setState({ name: value })
    }

    render() {
        console.log("In render");
        return (
            <div>
                Hello
                {" " + this.state.name}
                {this.state.showChild == true 
                    ?
                    <Child aFromParent={this.state.name} nameFunctionFromParent={this.displayName} />
                    :
                    null
                }
                <button onClick={()=>{this.setState({showChild:false})}} >Unmount Child </button>
                <br />
            </div>
        )
    }
}

export default App1;