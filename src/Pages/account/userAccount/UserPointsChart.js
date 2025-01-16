import React from 'react'
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell, LabelList, Legend } from 'recharts';

const data01 = [
  { name: 'ثبت نام اولیه', value: 5 },
  { name: 'ارسال مدارک', value: 12 }
];

const COLORS = ['#0088FE', '#00C49F'];

const UserPointsChart = () => {
    return (
        <div className='user_points'>
            <h2>نمودار امتــیازات شما</h2>
            <div className='user_activity_points'>
                <div className='user_points_chart'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={200} height={200}>
                        <LabelList dataKey="name" position="top" />
                            <Pie 
                            data={data01}  
                            dataKey="value" 
                            nameKey="name" 
                            cx="50%" 
                            cy="50%" 
                            innerRadius={60} 
                            outerRadius={80} >
                            {
                                data01.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index]}/>
                                ))
                            }
                            </Pie>
                            <Tooltip />
                            <Legend /> 
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default UserPointsChart