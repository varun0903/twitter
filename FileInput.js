import React, {Component} from 'react';


class FileInput extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }
    handleSubmit(event) {
        event.preventDefault();
            alert('Seleceted file is ${this.fileInput.current.files[0].name}');
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <label>
                Upload file:
                <input type="file" ref={this.FileInput}/>
            </label>
            <br/>
            <button type="submit">submit</button>
            </form>
            );
    }
}
export default FileInput;