import React from 'react'
import { Link } from 'react-router-dom'
import { general } from '../../../../data/forum/Topics'
import '../style.scss'

const General = () => {
    return (
        <div className="mt-5">
            <table className="table table-bordered table-hover bg-light">
                <thead>
                    <tr>
                        <th>عمومی</th>
                        <th>موضوعات</th>
                        <th>نوشته‌ها</th>
                        <th>آخرین نوشته</th>
                    </tr>
                </thead>
                <tbody>
                    {general.map( item => (
                        <tr key={item.id}>
                            <td className="col-md-6"><Link to={item.address} style={{textDecoration: 'none', color: '#036EB6', fontWeight: 'bold'}}>{item.title}</Link></td>
                            <td>{item.subjectsLength}</td>
                            <td>{item.postsLength}</td>
                            <td>{item.lastPost}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default General
