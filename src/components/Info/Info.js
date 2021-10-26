import React, { useState } from 'react';
import{Row,Col} from 'react-materialize'
import './info.css'
function Info({info}){
    console.log(info)
return(
    <Row>
        <Col s={12} m={6}className='offset m3'>
            {info.name?<h5>Coin Name: {info.name}</h5>:null}
            {info.current_price?<h6>Coin Price: {info.current_price}</h6>:null}
            {info.price_change_24h?<h6>24hr change: {info.price_change_24h}</h6>:null}
            {info.symbol?<img src={info.image} alt={info.symbol} />:null}
            {info.symbol?<h6>Symbol: {info.symbol}</h6>:null}
            <Row>
                <Col s={6} id='ath'>
                {info.ath?<p>A.T.H.: {info.ath}</p>:null}
                </Col>
                <Col s={6} id='atl'>
                {info.atl?<p>A.T.L.: {info.atl}</p>:null}
                </Col>
            </Row>
        </Col>
    </Row>
)
}
export default Info