import React, { useState } from 'react';
import{Row,Col} from 'react-materialize'
function SearchForm({handleSingleSearch}){
    const [coinInput, setCInput]=useState('')

    return(
        <Row>
            <Col s={10} m={6} l={3} className='offset s1 m6 l9'>
                <p>search by coin name</p>
            <input type='text' value={coinInput} onChange={(e)=>{setCInput(e.target.value)}} />
            <button onClick={()=>{handleSingleSearch(coinInput)}}>Search</button>
            </Col>
        </Row>
    )
}
export default SearchForm