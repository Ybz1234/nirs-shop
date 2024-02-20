import React from 'react'

export default function CartItem(props) {
    return (
        <div style={{ backgroundColor: 'red', margin: 5 }}>
            {props.name} <span> </span>
            {props.price}$
            <span style={{
                backgroundColor: 'lightcoral',
                borderRadius: 5,
                padding: 5,
                margin: 5,
                border: '2px dashed black'
            }}>X</span>
            <button style={{ backgroundColor: 'lightcoral' }}>X</button>
        </div>
    )
}
