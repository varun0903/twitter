import React from 'react';

class TodoApp extends React.Component {
    constructor (props) {
      super (props);
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {items: [], text : ''};
    }
    
    render() {
      return (
        <div className="container">
          <h2>To Do List</h2>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <input placeholder=" Enter Descrptition"onChange={this.handleChange} value={this.state.text} />
            <button className="btn btn-primary">{'Add '+ (this.state.items.length + 1)}</button>
          </form>
        </div>
      );
    }
    
    handleChange(e) {
      this.setState({text:e.target.value})
    }
    
    handleSubmit(e) {
      e.preventDefault();    
      var newItem = {
        text : this.state.text,
        id   : Date.now()
      };
      this.setState((prevState) => ({
        items: prevState.items.concat(newItem),
        text : ''
      }));
    }  
  }
  
  class TodoList extends React.Component {
    render() {
      return (
        <div>
          <ol>
            {this.props.items.map(item => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ol>
         </div>
      );
    }
  }
  
  
  export default TodoApp;