import * as React from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid,  Legend } from "recharts";

export default function Chart(props) {
    return (
        <div className="bg-white rounded-lg ">
        <ResponsiveContainer width={420} height={200}>
            <LineChart width={420} height={200} data={props.data}>
                <XAxis dataKey="name" style={{fontSize: '0.7rem' }}/>
                <YAxis style={{fontSize: '0.7rem' }} />
                <Legend  wrapperStyle={{fontSize: "12px"}}/>
                <CartesianGrid strokeDasharray="3 3" />
                <Line type="monotone" dataKey="UniquePlays" stroke="#4338ca" strokeWidth={2} />
                <Line type="monotone" dataKey="TotalPlays" stroke="#82ca9d" strokeWidth={2} />           
                </LineChart>
        </ResponsiveContainer>
        </div>
    );
}