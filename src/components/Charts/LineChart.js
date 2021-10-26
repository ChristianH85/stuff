import React, {useState,useEffect} from 'react';
import {Line} from 'react-chartjs-2';
// import { saveAs } from 'file-saver';
import './charts.css'

function LineChart ({chData}){
    const [points,setPts]=useState('')
    const [labels,setLabels]=useState('')
    useEffect(() => {
        setPts(chData)
        labelData(chData)
    },[chData])
    const labelData=async(data)=>{
        let labelLen= await data.map((data,i)=>{
            return i
        })
        setLabels(labelLen)
        console.log(data)
    }

    const data = {
                labels: labels,
                datasets: [
                  {
                    label: '/usd',
                    data: points,
                    backgroundColor: [
                        '#0b3f0b',
                    ],
                    borderColor: [
                      'rgba(32, 146, 12, 0.91)',
                    ],
                    borderWidth: 2,
                  },
                  
                ],
              };        
      const options = {
        indexAxis: 'x',
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'Price',
          },
        },
      };
    return(
            <div className='col s12 m6 chart'>
                <Line id='myLine' data={data} options={options}/> 
            </div>

    )
}
export default LineChart