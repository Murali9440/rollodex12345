import React from 'react'
import { Form } from 'react-bootstrap'
import './Search.styles.css'

const Search = (props) =>{
    return(
        <>
            <Form.Control
            className="Search-box"
            name="search" 
            onChange = {props.handleSearch}
            size="lg" 
            type="text" 
            placeholder="search monster" />

            
        </>
    )
}

export default Search