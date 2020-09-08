import React from 'react'

export const GifsGridItem = ({ id, title, url }) => { // props
    // console.log(id, title, url) // props
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p> {title} </p>
        </div>
    )
}
