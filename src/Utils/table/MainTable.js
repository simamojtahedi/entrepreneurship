import React from 'react'
import { useTable, useSortBy } from 'react-table'
import { Table } from 'react-bootstrap'
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from 'react-icons/md'

const MainTable = (props) => {
    const data = React.useMemo( () => props.data, [] )
      const columns = React.useMemo( () => props.columns, [] )
      const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy)

    return (
        <Table {...getTableProps()} bordered responsive>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render('Header')}
                        <span>
                            {column.isSorted
                            ? column.isSortedDesc
                                ? <MdOutlineKeyboardArrowDown />
                                : <MdOutlineKeyboardArrowUp />
                            : ''}
                        </span>
                        </th>
                    ))}
                    </tr>
                ))}
            </thead>

            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                        return (
                            <td
                            {...cell.getCellProps()}
                            
                            >
                            {cell.render('Cell')}
                            </td>
                        )
                        })}
                    </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default MainTable
