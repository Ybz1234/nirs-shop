import React from 'react'

export default function Product(props) {
    return (
        <div style={{ border: 'solid black 1px', borderRadius: 15, padding: 10, margin: 10 }}>
            <img src={props.img} style={{ width: 100, height: 100 }} alt="" /> <hr />
            Name {props.name} <hr />
            Price {props.price} <hr />
            <button style={{ backgroundColor: 'green' }}>Add to cart</button>
        </div>
    )
}
