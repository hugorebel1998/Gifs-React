import { useState } from "react"
import AddCategory from './components/AddCategory';
import GifGrid from "./components/GifGrid";


export default function GitExpertApp() {

    const [categories, setCategies] = useState([]);

    function onAddCategoria(value) {

        if (categories.includes(value)) return;

        setCategies([value, ...categories])
    }


    return (
        <>
            <h1>Git Expert App</h1>

            {/* <AddCategory setCategies={setCategies}/> */}

            <AddCategory onNewCatagory={onAddCategoria} />

            {
                categories.map(categorie => (<GifGrid key={categorie} categorie={categorie} />))
            }
        </>
    )
}