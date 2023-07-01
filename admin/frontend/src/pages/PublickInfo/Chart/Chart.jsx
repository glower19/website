import React, { useEffect, useState } from 'react';
import { DatePicker, Space, Button } from 'antd';
import './style.sass'
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getNumericDate } from './getNumericDate';
import { url } from '../../../API/url';
const Chart = ({ visitesArr }) => {
    const [firstDate, setFirstDate] = useState()
    const [secondDate, setSecondDate] = useState()
    const [data, setData] = useState()
    useEffect(() => {
        createUniqueArray(visitesArr, setData)
    }, [visitesArr])
    function createUniqueArray(array1, setState) {
        const uniqueArray = []
        array1?.map((item) => {
            const mathDate = getNumericDate(+item.date)
            const index = uniqueArray.findIndex(it => it.date === mathDate)
            if (index === -1) {
                uniqueArray.push({
                    date: mathDate,
                    count: 1
                })
            } else {
                uniqueArray[index].count += 1
            }
        })
        setState(uniqueArray)
    }
    return (
        <div className='chart-container'>
            <div className='chart-date-container'>
                <div className='chart-date-title'>Посещения за период времени </div>
                <div className='flex-bet'>
                <DatePicker className='mr20' onChange={(value, date) => setFirstDate((new Date(date)).getTime())} />
                <DatePicker className='mr20' onChange={(value, date) => setSecondDate((new Date(date)).getTime())} />
                <Button onClick={() => {
                    console.log('firstDate', firstDate)
                    console.log('secondDate', secondDate)

                    const requestOptions = {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            start: 0,
                            end: secondDate
                        })
                    };
                    fetch(url + 'getCounts', requestOptions)
                        .then(response => response.json())
                        .then(data => {
                            createUniqueArray(data, setData)
                            console.log(data)
                        })
                }} type="primary">Primary</Button>
                </div>

            </div>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Chart;