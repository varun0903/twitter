import React from 'react';

function Header({searchQuery, changeSearchText,handlesearch}){
    return(
        <div>
        <SearchBook value={searchQuery}
            changeText={changeSearchText}
            searchHandler={handlesearch}/>
            <span> <button> Add new book </button> </span>
            </div>
    )
}
export default Header;