import React from 'react';

class ControlledInputApp extends React.Component{
    state = { text: ''};
    handleChange = (event) => {
        this.setState({
            text:event.target.value
        });
    };
    render(){
        return(
            <input type='text' value={this.state.text} onChange={this.handleChange}/>
        );
    }

}
export default ControlledInputApp;