import React from 'react'
import './table.css'
const Table = () => {
  return (
    <div className='flex justify-center items-center'>
      <table className='custom-table font-serif md:text-base text-xs ' >
        <tr>
            <th style={{textAlign:"left",paddingLeft:"2.5%"}}>Point of Comparison</th>
            <th>Our Service</th>
            <th>Other Service Providers</th>
        </tr>
        <tr className='font-semibold'>
            <td className='text-left' style={{textAlign:'left',paddingLeft:'25px'}}>Dedicated Developer </td>
            <td>Yes</td>
            <td>No</td>
        </tr>
        <tr className='font-semibold'>
            <td className='text-left' style={{textAlign:'left',paddingLeft:'25px'}}>Custom Coding</td>
            <td>Yes</td>
            <td>Yes</td>
        </tr>
        <tr className='font-semibold'>
            <td className='text-left' style={{textAlign:'left',paddingLeft:'25px'}}>Delivery Time </td>
            <td>7-21 Days</td>
            <td>30-45 Days</td>
        </tr>
        <tr className='font-semibold'>
            <td className='text-left' style={{textAlign:'left',paddingLeft:'25px'}}>Assured Quality Service </td>
            <td>Yes</td>
            <td>Not Sure</td>
        </tr>
        <tr className='font-semibold'>
            <td className='text-left' style={{textAlign:'left',paddingLeft:'25px'}}>Email Support</td>
            <td>Yes</td>
            <td>Yes but with delayed response</td>
        </tr>
      </table>
    </div>
  )
}

export default Table
