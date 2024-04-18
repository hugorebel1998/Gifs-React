import { useState, useEffect } from 'react'
// import GetGifs from '../services/git.api'
import ShowGif from './ShowGif';
import useFetchGifs from '../hooks/useFetchGifs';



export default function GifGrid({ categorie }) {

    const { imagenes, isLoading } = useFetchGifs(categorie);

    return (
        <>
            <h3>{categorie}</h3>

            {isLoading ? 'Cargando imagenes' : ''}
            

            <ShowGif imagenes={imagenes} />

        </>

    )

}