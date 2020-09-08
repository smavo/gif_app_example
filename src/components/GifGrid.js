import React from 'react'

const GifGrid = ({category}) => {

    const getGifs = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=lucifer&limit=10&api_key=FdbJxKPfIe8M0TjVcM8c6iMK0HN2NZeP'
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs)
        // console.log(data)
    }

    getGifs();

    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}

export default GifGrid;