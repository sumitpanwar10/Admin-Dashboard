import * as React from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid,  Legend } from "recharts";

const data = [
    {
        name: "Jan",
        UniquePlays: 4000,
        TotalPlays: 2400
    },
    {
        name: "Feb",
        UniquePlays: 3000,
        TotalPlays: 1398
    },
    {
        name: "Mar",
        UniquePlays: 2000,
        TotalPlays: 9800
    },
    {
        name: "Apr",
        UniquePlays: 2780,
        TotalPlays: 3908
    },
    {
        name: "May",
        UniquePlays: 1890,
        TotalPlays: 4800
    },
    {
        name: "Jun",
        UniquePlays: 2390,
        TotalPlays: 3800
    },
    {
        name: "Jul",
        UniquePlays: 3490,
        TotalPlays: 4300
    }
    ,
    {
        name: "Aug",
        UniquePlays: 3490,
        TotalPlays: 4300
    }
    ,
    {
        name: "Sep",
        UniquePlays: 3490,
        TotalPlays: 4300
    }
    ,
    {
        name: "Oct",
        UniquePlays: 3490,
        TotalPlays: 4300
    }
    ,
    {
        name: "Nov",
        UniquePlays: 3490,
        TotalPlays: 4300
    }
    ,
    {
        name: "Dec",
        UniquePlays: 3490,
        TotalPlays: 4300
    }
];

export default function Chart() {
    return (
        <div className="bg-white rounded-lg ">
        <ResponsiveContainer width={600} height={300}>
            <LineChart width={500} height={300} data={data}>
                <XAxis dataKey="name"/>
                <YAxis />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Line type="monotone" dataKey="UniquePlays" stroke="#4338ca" strokeWidth={2} />
                <Line type="monotone" dataKey="TotalPlays" stroke="#82ca9d" strokeWidth={2} />           
                </LineChart>
        </ResponsiveContainer>
        </div>
    );
}