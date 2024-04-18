import React, { useEffect, useState } from "react";
import GetGifs from '../services/git.api'


export default function useFetchGifs(categorie) {

    const [imagenes, setImagenes] = useState([])

    const [isLoading, setIsLoading] = useState(true)


    async function getGifs() {

        const newImages = await GetGifs(categorie);

        setImagenes(newImages)

        setIsLoading(false)
    }


    useEffect(() => {
        getGifs()
    }, [])


    return {
        imagenes,
        isLoading
    }
}