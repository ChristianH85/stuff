import React, { useState } from 'react';
import{Row,Col} from 'react-materialize'
import './search.css'
function SearchForm({handleSingleSearch}){
    const [coinInput, setCInput]=useState('')

    return(
        <Row>
            <Col s={8} className='offset-s2 sForm'>
                <p>search by coin name</p>
            <input id='searchIn' type='text' value={coinInput} onChange={(e)=>{setCInput(e.target.value)}} />
            <button id='search' onClick={()=>{handleSingleSearch(coinInput)}}>Search</button>
            </Col>
        </Row>
    )
}
export default SearchForm