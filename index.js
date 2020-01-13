import React from 'react';
import ReactDOM from 'react-dom';
// import FileInput from './FileInput';
// import SignupForm from './SignupForm';
// import BookApp from './BookApp';
import TodoApp from './TodoApp';

// class ErrorCatcher extends React.Component{
//     state = { error:null}

//     componentDidCatch(error, info){
//         console.log('[componentDidCatch]', error);
//         console.log(info);
//         this.setState({error: info.componentStack});
//     }
//     render(){
//         if(this.state.error) {
//             return (
//                 <div>
//                     An error occured:{this.state.error}
//                 </div>
//             )
//         }

//         return this.props.children;
//     }
// }
// class LifecycleDemo extends React.Component {
//     state ={counter: 0};
//     constructor(props) {
//         super(props);
//         console.log('[constructor]');
//         console.log ( 'State already set:', this.state);
//     }
//     componentDidMount() {
//         console.log('[componentDidMount]', 'Mounted');
//     }
//     static getDerivedStateFromProps(nextProps, prevState) {
//         console.log('[getDerivedStateFromProps]');
//         console.log(' Next props:', nextProps);
//         console.log(' Prev state:', prevState);
//         return null;
//     }
//     shouldComponentUpdate(nextProps,nextState){
//         console.log('[shouldCommentUpdate]', 'Deciding to update');
//         return true;
//     }
//     getSnapshotBeforeUpdate(nextProps, nextState){
//         console.log('[getSnapshotBeforeUpdate]', 'About to update...');
//         return `Time is ${Date.now()}`;
//     }
//     componentDidUpdate(prevProps,prevState,snapshot) {
//         console.log('[componentDidUpdate]', 'Updated.');
//         console.log(' snapshot:', snapshot);
//     }
//     componentWillUnmount(){
//         console.log('[componentWillUpdate', 'Goodbye cruel world. ');
//     }
//     handleClick = () => {
//         this.setState({
//             counter: this.state.counter + 1
//         });
//     };
//     causeErrorNextRender = () => {
//         this.setState({
//             causeError:true
//         });
//     };
//     render() {
//         console.log('[render]');
//         if(this.state.causeError) {
//             throw new Error('oh no!!');
//         }
//         return(
//             <div>
//                 <p>Counter: {this.state.counter}</p>
//                 <button onClick={this.handleClick}>Increment Counter</button>
//                 <button onClick={this.causeErrorNextRender}>
//                     Throw an error
//                 </button>
//             </div>
//         );
//     }
// }
// ReactDOM.render(
//     <ErrorCatcher>
//         <LifecycleDemo/>
//     </ErrorCatcher>,
//     document.querySelector('#root')
    ReactDOM.render(<TodoApp/>, document.getElementById('root'));
    
