import React from 'react'

export default function CurrencyItem(props) {
  return (
    <div>
        <div className='currency-item'>
            <div className={`title ${props.type}`} >{props.title}</div>
            <div className={`amount ${props.type}`} >{props.amount}</div>

        </div>
    </div>
  )
}
