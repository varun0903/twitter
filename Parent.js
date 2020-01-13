import React from 'react';
import Child from './child';

class Parent extends React.Component{
    state ={
        counter:0
    }
    handleAction =(action) => {
        console.log('Child clicked :' + action);
        this.setState({
            counter: this.state.counter+1 

        });
    }
    render(){
        return(
            <div>
                <Child onAction={this.handleAction}/>
                <p>Clicked {this.state.counter} times.</p>
                <Child onAction={this.handleAction}/>
                <p>Clicked {this.state.counter} times.</p>
                <Child onAction={this.handleAction}/>
                <p>Clicked {this.state.counter} times.</p>
            </div>
        )
    }
}
export default Parent;