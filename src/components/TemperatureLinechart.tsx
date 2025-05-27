import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, ReferenceLine } from 'recharts'
const data = [
    { minute: 0, temp: 4.2, externalTemp: 15.3 },
    { minute: 1, temp: 4.5, externalTemp: 15.4 },
    { minute: 20, temp: 5.0, externalTemp: 15.5 },
    { minute: 21, temp: 5.1, externalTemp: 15.6 },
    { minute: 40, temp: 6.0, externalTemp: 16.0 },
    { minute: 41, temp: 6.2, externalTemp: 16.1 },
    { minute: 60, temp: 7.0, externalTemp: 16.5 },
    { minute: 61, temp: 7.5, externalTemp: 16.6 },
    { minute: 80, temp: 8.0, externalTemp: 17.0 },
    { minute: 81, temp: 8.3, externalTemp: 17.1 },
    { minute: 1400, temp: 10.3, externalTemp: 21.1 },
]

const maxTemp = 6
const minTemp = 2
function TemperatureLinechart() {
  return (
    <ResponsiveContainer width={"100%"} aspect={3} >
      <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3"  />
      <XAxis dataKey="minute" />
       <YAxis />
        <Tooltip />
          <Legend payload={[
            { value: 'temperatura', type: 'line', id: 'ID01', color: '#219EBC' },
            { value: 'temperatura externa', type: 'line', id: 'ID02', color: '#FB8500' }
          ]} />
          <ReferenceLine y={maxTemp} stroke="red" label={{ value: `Máxima: ${maxTemp} °C`, fill: 'red', position: 'insideRight' }} strokeDasharray="3 3" />
          <ReferenceLine y={minTemp} stroke="lightblue" label={{ value: `Mínima: ${minTemp} °C`, fill: 'lightblue', position: 'insideRight' }} strokeDasharray="3 3" />
          <Line type="monotone" dataKey="temp" stroke="#219EBC" activeDot={{ r: 4 }} id='ID01' />
          <Line type="monotone" dataKey="externalTemp" stroke="#FB8500" activeDot={{ r: 4 }} id='ID02'/>
      </LineChart>
      
    </ResponsiveContainer>
      
  )
}

export default TemperatureLinechart