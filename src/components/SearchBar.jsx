import React from 'react'
import styled from 'styled-components'
import Input from './Input'

const SearchBar = ({ searchTerm, setSearchTerm, placeholder, custom}) => {
    const searchIcon = 'images/icon-search.png'

    return (
        <SearchContainer custom={custom}>
            <Input
                placeholder={placeholder}
                custom={custom}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img className='sm:w-5 w-3' src={searchIcon} alt="search-icon" />
        </SearchContainer>
    )
}

const SearchContainer = styled.div`
    padding: ${({custom}) => (custom ? '0 0 0 13px' : '0 13px 0 0 ')} ;
    border: 0.5px solid #BDBDBD;
    display: flex;
    flex-direction: ${({custom}) => (custom ? 'row-reverse' : '')} ;
    gap:0 6px;
    align-items: center;
    justify-content: space-between;
    width: ${({custom}) => (custom ? '350px' : '441px')} ;
    background:${({custom}) => (custom ? '#fff' : '#FAFAFC')} ;
    border-radius: 10px;

    /* @media screen and (max-width: 1024px){
       margin-bottom: 40px;
       width: 100%;
    }

    @media screen and (max-width: 640px){
       margin-bottom: 20px;
    } */

  

`

export default SearchBar;