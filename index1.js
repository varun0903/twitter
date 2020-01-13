import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';

function Tweet() {
    return (
        <div className="tweet">
            Tweet
           <Avatar/>
           <Message/>
            <NameWithHandle/>
            <LikeButton/>
            <Time/>
            <ReplyButton/>
            <RetweetButton/>
            <MoreOptionButton/>
        </div>
    );
}
function Avatar() {
    return (
        <div>
        <img src="https://www.gravatar.com/avatar/noting"
        className="avatar"
        alt="avatar"/>
        </div>
    );
}

function Message(){
    return(
        <div className="message">
            This is less than 140 charcters.
        </div>
    );
}

function NameWithHandle() {
    return(
        <span className="name-with-handle">
            <span className="name">Your Name</span>
            <span className="handle">@yourhandle</span>
        </span>
    );
}
function LikeButton(){
    return(
        <i className="fa fa-heart like-button"/> 
    );
}
function Time(){
    return(
        <span className="time">3h ago</span>
    );
}
function ReplyButton(){
    return(
        <i className="fa fa-reply reply-button"/> 
    );
}
function RetweetButton(){
    return(
        <i className="fa fa-reply retweet-button"/> 
    );
}
function MoreOptionButton(){
    return(
        <i className="fa fa-ellipsis-h more-options-button"/>   
    );
}
export default Tweet;