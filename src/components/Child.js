import React from 'react';

class Child extends React.Component {
    handleValueChange = () => {
        this.props.nameFunctionFromParent("child")
    }

    componentWillUnmount(){
        console.log("In componentWillUnmount");
    }
    render() {
        return (
            <div>
                Child
                <button onClick={this.handleValueChange}>Change parent state value</button>
            </div>
        )
    }
}

export default Child;