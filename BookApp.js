import React from 'react';

class BookApp extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            books: [],
            error: false,
            isLoaded: false
        }
    }
    componentDidMount(){
        fetch("http://192.168.1.107:3030/api/books/")
        .then(res => res.json())
        .then(
            (result)=>{
                this.setState({
                    books: result
                })
            },
            (error) =>{
                this.setState({
                    error
                })
            }
        )
    }
    render(){
        const { error, books } = this.state;
        if (error){
            return <div>Error: {error.message}</div>
        } else{
        return(
            <table border="1" width="100%">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>ISBN</th>
                    <th>Title</th>
                </tr>
                </thead>
                <tbody>
                    {books.map(book =>(
                        <tr key={book._id}>
                            <td>{book._id}</td>
                            <td>{book.isbn}</td>
                            <td>{book.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}
}
export default BookApp;