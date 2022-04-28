import React, { useState } from 'react';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(e){
        e.preventDefault()
        props.filterGames(searchTerm)
    }


    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type='text' placeholder='Search by name...'></input>
            <button type='submit' >Search</button> 
            </form>
        </div>
       
        </>

    )
}






















// const SearchBar = (props) => {  
//     return ( 
//         <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type='text' placeholder='Search by name...'></input>
//      );
// }
 
export default SearchBar;



