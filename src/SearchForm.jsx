import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useGlobalContext } from './context';



const SearchForm = () => {
    
    const [userInput, setUserInput] = useState('')
    const {setSearchTerm} = useGlobalContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput.length > 0) {
            setSearchTerm(userInput);
            console.log(userInput);
            //console.log(searchValue);
        } else {
            toast.error('Please provide search keyword');
        }

    }

    return (
        <section>
            <h1 className='title'>Unsplash Gallery</h1>
            <form className='search-form' onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    name='search'
                    placeholder='cat' 
                    className='form-input search-input'
                    onChange={(e) => setUserInput(e.target.value)}>
                </input>
                <button className='btn'>Submit</button>
            </form>
        </section>
        
    )
}

export default SearchForm