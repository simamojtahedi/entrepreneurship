import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'فروردین',
    دریافت: 4000,
    پرداخت: 2400,
    amt: 2400,
  },
  {
    name: 'اردیبهشت',
    دریافت: 3000,
    پرداخت: 1398,
    amt: 2210,
  },
  {
    name: 'خرداد',
    دریافت: 2000,
    پرداخت: 9800,
    amt: 2290,
  }
];

const UserExpenseChart = () => {
    return (
        <div className='expense_chart'>
            <h2> لیست دریافت و پرداخت‌ها </h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                width={200} height={200}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="پرداخت" fill="#8884d8" />
                    <Bar dataKey="دریافت" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default UserExpenseChart