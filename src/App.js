import React , { useEffect, useState } from 'react';
import './App.css';
import Api from './apiFunc/api'
import SearchForm from './components/Forms/SearchForm';
import Info from './components/Info/Info';
import LineChart from './components/Charts/LineChart';
import {Row} from 'react-materialize'
function App() {
  const[info,setInfo]=useState('')
  const[cList,setCList]=useState('')
  useEffect(()=>{
    let cryptos=JSON.parse(localStorage.getItem('cryptos'))
    if(cryptos){
      setCList(cryptos)
    }
  },[])
  const handleSingleSearch= async(query)=>{
   let results= await Api.searchCrypto(query)
   setInfo(results.data[0])
  }
  return (
    <div className="App">
      <SearchForm handleSingleSearch={handleSingleSearch} />
      
      {info?<Info info={info}/>:null}
      {info.sparkline_in_7d? <LineChart chData={info.sparkline_in_7d.price}/>:null}
      {cList?cList.map((crypto,i)=>{
        return(
          <Row key={i}>
            <button value={crypto.id} onClick={(e)=>{handleSingleSearch(e.target.value)}} className='crypto'>{crypto.name}</button>
          </Row>)
      }):null}
    </div>
  );
}

export default App;
